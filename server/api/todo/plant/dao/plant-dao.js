"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const plantSchema = require('../model/plant-model');
const _ = require('lodash');

plantSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    plant
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
      return reject(new TypeError('Todo is not a valid object.'));
    }

    let _something = new plant(plant);

    _something.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
}

plantSchema.statics.removeById = (id) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    plant
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
          : resolve();
      });
  });
}

const plant = mongoose.model('plant', plantSchema);

module.exports = plant;
