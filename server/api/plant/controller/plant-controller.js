"use strict";

const plantDAO = require('../dao/plant-dao');
const wateringDAO = require('../dao/watering-dao');
const mongoose = require('mongoose');

/**
 * WateringController should be separate from PlantController...
 */

module.exports = class plantController {
  static getAll(req, res) {
    const query = {
      userId: req.user._id || false
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
      userId: req.user._id || false, 
      botId: req.headers.wb_id,
      name: req.body.name,
    };
    let plant = {
      humidity: req.body.humidity
    };
    plantDAO
      .updatePlant(query, plant)
      .then(plant => res.status(201).json(plant))
      .catch(error => res.status(400).json(error));
  }

  static save(req, res) {
    let query = {
      userId: req.user._id || false,
      _id: req.body._id,
      name: req.body.name
    };

    let plant = {
      nickname: req.body.nickname,
      wateredEvery: req.body.wateredEvery,
      wateringTime: req.body.wateringTime,
      wateredFor: req.body.wateredFor
    };

    plantDAO
      .updatePlant(query, plant)
      .then(plant => res.status(201).json(plant))
      .catch(error => res.status(400).json(error));
  }

  static createNewWatering(req, res) {
    let event = req.body;
    event.userId = req.user._id || false;
    wateringDAO
        .create(event)
        .then(event => res.status(200).json(event))
        .catch(error => res.status(400).json(error));
  }

  static updateWatering(req, res) {
    let query = {
      userId: req.user._id || false,
      _id: req.body._id
    };

    let plant = req.body;
    delete plant._id;
    delete plant.userId;

    wateringDAO
      .updateWatering(query, plant)
      .then(plant => res.status(201).json(plant))
      .catch(error => res.status(400).json(error));
  }


  static getWaterings(req, res) {
    const query = {userId: req.user._id || false};
    if (req.query.plantId) {
      query['plantId'] = mongoose.Types.ObjectId(req.query.plantId);
    }

    wateringDAO
      .getAll(query)
      .then(events => res.status(200).json(events))
      .catch(error => res.status(400).json(error));
  }

  static deleteWatering(req, res) {
    const watering = {_id: req.params.id, userId: req.user._id || false};
    wateringDAO
      .deleteWateringById(watering)
      .then(response => res.status(200).json(response))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    plantDAO
      .getOneByName(req.body.name, req.user._id || false)
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
