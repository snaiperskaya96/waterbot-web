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

    router
      .route('/api/plant/update')
      .post(plantController.update);

    router
      .route('/api/plant/save')
      .post(plantController.save);    
      
    router
      .route('/api/plant/watering')
      .post(plantController.createNewWatering)
      .get(plantController.getWaterings);

    router
      .route('/api/plant/watering/:id')
      .delete(plantController.deleteWatering);

    router
      .route('/api/plant/watering/update')
      .post(plantController.updateWatering);
  }
}
