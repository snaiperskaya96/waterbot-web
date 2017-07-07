"use strict";

const userController = require('../controller/user-controller');

module.exports = class userRoutes {
  static init(router) {
    router
      .route('/api/user')
      .get(userController.get)
      .post(userController.createNew);

    router
      .route('/api/user/:id')
      .delete(userController.removeById);

    router
      .route('/api/user/authenticate')
      .post(userController.authenticate)

    router
      .route('/api/user/verify')
      .get(userController.verify)

    router
      .route('/api/user/tokens')
      .get(userController.getTokens)
      .post(userController.newToken)

    router
      .route('/api/user/tokens/delete')
      .post(userController.deleteToken)
  }
}
