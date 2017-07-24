"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const customDataSchema = require('../model/custom-data-model');
const sprintf = require('sprintf-js').sprintf;
const _ = require('lodash');

customDataSchema.statics.getAll = (query) => {
  return new Promise((resolve, reject) => {
    CustomData
      .find(query)
      .exec((err, data) => {
        err ? reject(err)
          : resolve(data);
      });
  });
}

customDataSchema.statics.createNew = (customData) => {
  return new Promise((resolve, reject) => {
    if (!_.isObject(customData)) {
      return reject(new TypeError('customData is not a valid object.'));
    }

    let _something = new CustomData(customData);

    _something.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
}

customDataSchema.statics.removeById = (id, userId) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    CustomData
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
          : resolve();
      });
  });
}

customDataSchema.statics.doUpdate = (query, data) => {
  console.log(query)
  return new Promise((resolve, reject) => {
    CustomData.update(query, data, (err, resp) => {
      err ? reject(err)
        : resolve(resp);
    });
  });
  
}

if (!customDataSchema.options.toJSON) customDataSchema.options.toJSON = {};

customDataSchema.options.toJSON.transform = function (doc, ret, options) {
  if (!ret.format) return ret;
  try {
    ret.formattedValue = sprintf(ret.format, ret.value);
  } catch(exception) {}
  return ret;
}


const CustomData = mongoose.model('custom-data', customDataSchema);

module.exports = CustomData;
