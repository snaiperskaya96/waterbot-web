"use strict";

const userDAO = require('../dao/user-dao');
const jwt = require('jsonwebtoken')
const config = require('../../../config/authentication')
const Blowfish = require('javascript-blowfish').Blowfish;

module.exports = class userController {

  static authenticate(req, res) {
    const _user = req.body;
    userDAO
      .getOneByUsername(_user.username)
      .then(user => {
        let json = {token: false};
        const blowfisher = new Blowfish(config.user.secret);
        if (
          user 
          && blowfisher.trimZeros(blowfisher.decrypt(user.password)) == _user.password
        ) {
          let token = jwt.sign(user, config.jwt.token, {expiresIn: '8 hours'});
          user.lastSessionToken = token;
          user.save();
          json.token = token;
          res.cookie('wb_token', token);
        }
        res.status(200).json(json);
      })
      .catch(error => res.status(400).json(error));
  }

  static verify(req, res) {
    res.status(200).json(req.isTokenValid);
  }

  static getAll(req, res) {
    userDAO
      .getAll()
      .then(users => res.status(200).json(users))
      .catch(error => res.status(400).json(error));
  }

  static get(req, res) {
    userDAO
      .getOneById(req.user._id)
      .then(user => res.status(200).json(user))
      .catch(error => res.status(400).json(error));
  }

  static getTokens(req, res) {
    userDAO.
      getOneById(req.user._id)
      .then(user => res.status(200).json(user.apiTokens))
      .catch(error => res.status(400).json(error));
  }

  static newToken(req, res) {
    userDAO
      .getOneById(req.user._id)
      .then(user => {
        const token = jwt.sign({_id: user._id, isAdmin: user.isAdmin}, config.jwt.token);
        user.apiTokens.push(token);
        user.save();
        res.status(200).json(token);
      }).catch(error => res.status(400).json(error));
  }

  static deleteToken(req, res) {
      userDAO
      .getOneById(req.user._id)
      .then(user => {
        if (req.body.token && user && user.apiTokens.indexOf(req.body.token) > -1) {
          user.apiTokens = user.apiTokens.filter(element => element !== req.body.token);
          user.save();
          res.status(200).json(true);
        } else {
          res.status(200).json(false);
        }
      }).catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _user = req.body;
    userDAO
      .createNew(_user)
      .then(user => res.status(201).json(user))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req, res) {
    let _id = req.params.id;

    userDAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }

  static updateUser(req, res) {
    const _id = req.user._id;
    req.body._id = _id;
    const query = {_id: _id};

    userDAO
      .updateUser(query, req.body)
      .then((user) => res.status(200).json(user))
      .catch(error => res.status(400).json(error));
  }
}
