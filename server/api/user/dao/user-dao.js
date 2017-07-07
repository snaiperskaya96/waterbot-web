"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const userSchema = require('../model/user-model');
const _ = require('lodash');
const config = require('../../../config/authentication')
const Blowfish = require('javascript-blowfish').Blowfish;

userSchema.statics.getOneByUsername = (username) => {
  return new Promise((resolve, reject) => {
    const _query = {username: username};

    userModel
      .findOne(_query)
      .exec((err, user) => {
        err ? reject(err)
          : resolve(user);
      });
  });
}

userSchema.statics.getOneById = (id) => {
  return new Promise((resolve, reject) => {
    let _query = {_id: id};
    userModel
      .findOne(_query)
      .exec((err, user) => {
        err ? reject (err) : resolve(user);
      })
  })
}

userSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    userModel
      .find(_query)
      .exec((err, todos) => {
        err ? reject(err)
          : resolve(todos);
      });
  });
}

userSchema.statics.createNew = (user) => {
  return new Promise((resolve, reject) => {
    if (!_.isObject(user)) {
      return reject(new TypeError('User is not a valid object.'));
    }

    user.password = (new Blowfish(config.user.secret)).encrypt(user.password);

    let _something = new userModel(user);
  
    _something.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
}

userSchema.statics.removeById = (id) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    userModel
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
          : resolve();
      });
  });
}

if (!userSchema.options.toObject) userSchema.options.toObject = {};

userSchema.options.toObject.transform = function (doc, ret, options) {
  delete ret.password;
  delete ret.lastSessionToken;
  delete ret.__v;
  delete ret.createdAt;
  return ret;
}


const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
