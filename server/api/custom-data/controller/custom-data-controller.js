"use strict";

const customDataDAO = require('../dao/custom-data-dao');

module.exports = class customDataController {
  static getAll(req, res) {
    const query = {userId: req.user._id};

    customDataDAO
      .getAll(query)
      .then(customData => res.status(200).json(customData))
      .catch(error => res.status(400).json(error));
  }

  static getOneById(req, res) {
    const query = {userId: req.user._id, _id: req.params.id};

    customDataDAO
      .findOne(query)
      .then(customData => res.status(200).json(customData))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _customData = req.body;
    _customData.userId = req.user._id;
    _customData.botId = req.headers.wb_id;

    customDataDAO
      .findOne({userId: req.user._id, botId: req.headers.wb_id, name: req.body.name})
      .then((data) => {
        if (data) {
          req.body._id = data._id;
          return customDataController.updateById(req, res);
        } else {
          customDataDAO
            .createNew(_customData)
            .then(customData => res.status(201).json(customData))
            .catch(error => res.status(400).json(error));
        }
      })
      .catch(error => res.status(400).json(error));
  }

  static updateById(req, res) {
    const query = {_id: req.body._id, userId: req.user._id};
    delete req.body._id;
    customDataDAO
      .doUpdate(query, req.body)
      .then((response) => res.status(200).json(response))
      .catch(error => {res.status(400).json(error)});
  }

  static removeById(req, res) {
    const query = {_id: req.params.id, userId: req.user._id};

    customDataDAO
      .remove(query, {justOne: true})
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
