"use strict";

const userDAO = require('../dao/user-dao');

module.exports = class userController {

  static authenticate(req, res) {
    const _user = req.body;
    userDAO
      .getOneByUsername(_user.username)
      .then(user => {
        res.status(200).json(true);
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
