"use strict";

const plant = require('../dao/plant-dao');

module.exports = class plantController {
  static getAll(req, res) {
    plantDAO
      .getAll()
      .then(plants => res.status(200).json(plants))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _plant = req.body;

    plantDAO
      .createNew(_plant)
      .then(plant => res.status(201).json(plant))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req, res) {
    let _id = req.params.id;

    plantDAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
