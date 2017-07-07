"use strict";

const plantController = require('../controller/plant-controller');

module.exports = class plantRoutes {
  static init(router) {
    router
      .route('/api/plant')
      .get(plantController.getAll)
      .post(plantController.createNew);

    router
      .route('/api/plant/:id')
      .delete(plantController.removeById);
  }
}