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
        console.log()
        if (
          user 
          && blowfisher.trimZeros(blowfisher.decrypt(user.password)) == _user.password
        ) {
          console.log('ciao')
          let token = jwt.sign(user, config.jwt.token);
          json.token = token;
          res.cookie('wb_token', token);        
        }
        res.status(200).json(json);
      })
      .catch(error => res.status(400).json(error));
  }

  static getAll(req, res) {
    userDAO
      .getAll()
      .then(users => res.status(200).json(users))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    console.log(req)
    let _user = req.body;
    console.log(_user);
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
}
