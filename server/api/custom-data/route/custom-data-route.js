"use strict";

const customDataController = require('../controller/custom-data-controller');

module.exports = class customDataRoutes {
  static init(router) {
    router
      .route('/api/custom-data')
      .get(customDataController.getAll)
      .post(customDataController.createNew);

    router
      .route('/api/custom-data/update')
      .post(customDataController.updateById);

    router
      .route('/api/custom-data/:id')
      .get(customDataController.getOneById);

    router
      .route('/api/custom-data/delete/:id')
      .get(customDataController.removeById);
  }
}
