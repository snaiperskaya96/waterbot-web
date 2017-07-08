"use strict";

const plantDAO = require('../dao/plant-dao');

module.exports = class plantController {
  static getAll(req, res) {
    const query = {
      userId: req.user._id
    }
    plantDAO
      .getAll(query)
      .then(plants => res.status(200).json(plants))
      .catch(error => res.status(400).json(error));
  }

  static getOneByName(req, res) {
    plantDAO
      .getOneByName(req.params.name, req.user._id)
      .then(plant => res.status(201).json(plant))
      .catch(error => res.status(400).json(error));
  }

  static update(req, res) {
    let query = {
      userId: req.user._id,
      botId: req.headers.wb_id,
      name: req.body.name
    };
    let plant = {
      humidity: req.body.humidity
    }
    plantDAO
      .updatePlant(query, plant)
      .then(plant => res.status(201).json(plant))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    plantDAO
      .getOneByName(req.body.name, req.user._id)
      .then(plant => {
        if (plant) return res.status(201).json(); 
        let _plant = req.body;
        _plant.userId = req.user._id;
        _plant.botId = req.headers.wb_id;
        plantDAO
          .createNew(_plant)
          .then(plant => res.status(200).json(plant))
          .catch(error => res.status(400).json(error));
      })
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
