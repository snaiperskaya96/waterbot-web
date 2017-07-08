"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const plantSchema = require('../model/plant-model');
const _ = require('lodash');

plantSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    plantModel
      .find(_query)
      .exec((err, todos) => {
        err ? reject(err)
          : resolve(todos);
      });
  });
}

plantSchema.statics.createNew = (plant) => {
  return new Promise((resolve, reject) => {
    if (!_.isObject(plant)) {
      return reject(new TypeError('Plant is not a valid object.'));
    }

    let _something = new plantModel(plant);
    _something.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
}

plantSchema.statics.updatePlant = (query, plant) => {
  return new Promise((resolve, reject) => {
    if (!_.isObject(plant)) {
      return reject(new TypeError('Plant is not a valid object.'));
    }

    plantModel.update(query, plant, (err, saved) => {
      return err ? reject(err) : resolve({});
    });
  });
}

plantSchema.statics.getOneByName = (name, userId) => {
  return new Promise((resolve, reject) => {
    let _query = {name: name, userId: userId};

    plantModel
      .findOne(_query)
      .exec((err, plant) => {
        err ? reject(err)
          : resolve(plant);
      });
  });
}

plantSchema.statics.removeById = (id) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    plantModel
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
          : resolve();
      });
  });
}

const plantModel = mongoose.model('plant', plantSchema);

module.exports = plantModel;
