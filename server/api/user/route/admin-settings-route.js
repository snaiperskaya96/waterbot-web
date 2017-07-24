"use strict";

const adminSettingsController = require('../controller/admin-settings-controller');

module.exports = class adminSettingsRoutes {
  static init(router) {
    router
      .route('/api/admin-settings')
      .get(adminSettingsController.getAll)
      .post(adminSettingsController.createNew);

    router
      .route('/api/admin-settings/update')
      .post(adminSettingsController.update);

    router
      .route('/api/admin-settings/:id')
      .delete(adminSettingsController.removeById);
  }
}
