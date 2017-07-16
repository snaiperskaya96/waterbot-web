"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const wateringSchema = require('../model/watering-model');
const _ = require('lodash');

wateringSchema.statics.getAll = (query) => {
    return new Promise((resolve, reject) => {
        wateringModel
        .find(query)
        .exec((err, waterings) => {
            err ? reject(err) : resolve(waterings);
        });
    })
};

wateringSchema.statics.create = (watering) => {
    return new Promise((resolve, reject) => {
        if (!_.isObject(watering)) {
            return reject(new TypeError('Watering is not a valid object.'));
        }
        const model = new wateringModel(watering);
        model.save((error, saved) => {
            error ? reject(error) : resolve(saved);
        });
    });
};

wateringSchema.statics.updateWatering = (query, watering) => {
  return new Promise((resolve, reject) => {
    if (!_.isObject(watering)) {
      return reject(new TypeError('Watering is not a valid object.'));
    }

    wateringModel.update(query, watering, (err, saved) => {
      return err ? reject(err) : resolve({});
    });
  });
};

wateringSchema.statics.deleteWateringById = (watering) => {
    return new Promise((resolve, reject) => {
        wateringModel.findOneAndRemove(watering, (error, response) => {
            return error ? reject(error) : resolve(response);
        });
    });
};

const wateringModel = mongoose.model('watering', wateringSchema);

module.exports = wateringModel;
