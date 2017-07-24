"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const adminSettingsSchema = require('../model/admin-settings-model');
const _ = require('lodash');

adminSettingsSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    adminSettingsModel
      .find(_query)
      .exec((err, todos) => {
        err ? reject(err)
          : resolve(todos);
      });
  });
}

adminSettingsSchema.statics.createNew = (adminSettings) => {
  return new Promise((resolve, reject) => {
    if (!_.isObject(adminSettings)) {
      return reject(new TypeError('Todo is not a valid object.'));
    }

    let _something = new adminSettingsModel(adminSettings);

    _something.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
}

adminSettingsSchema.statics.removeById = (id) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    adminSettingsModel
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
          : resolve();
      });
  });
}

adminSettingsSchema.statics.doUpdate = (settings) => {
  return new Promise((resolve, reject) => {
    adminSettingsModel
      .findOneAndUpdate({name: settings.name}, settings, (error, success) => {
        error ? reject(error) : resolve(success);
      });
  });
}

const adminSettingsModel = mongoose.model('admin-settings', adminSettingsSchema);

module.exports = adminSettingsModel;
