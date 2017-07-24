"use strict";

const adminSettingsDAO = require('../dao/admin-settings-dao');
const userDAO = require('../dao/user-dao');

module.exports = class adminSettingsController {

  static refuse(req, res) {
      res.status(401).json('Unauthorized');
  }

  static getAll(req, res) {
    if (!req.user.isAdmin) return adminSettingsController.refuse(req, res);
    adminSettingsDAO
      .getAll()
      .then(adminSettings => res.status(200).json(adminSettings))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    if (!req.user.isAdmin) return adminSettingsController.refuse(req, res);
    let _adminSettings = req.body;

    adminSettingsDAO
      .createNew(_adminSettings)
      .then(adminSettings => res.status(201).json(adminSettings))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req, res) {
    if (!req.user.isAdmin) return adminSettingsController.refuse(req, res);
    let _id = req.params.id;

    adminSettingsDAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }

  static update(req, res) {
    if (!req.user.isAdmin) return adminSettingsController.refuse(req, res);

    adminSettingsDAO
      .doUpdate(req.body)
      .then(() => res.status(200).json({}))
      .catch((error) => res.status(400).json(error));
  }
}
