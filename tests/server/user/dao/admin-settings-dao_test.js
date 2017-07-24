"use strict";

const mongoose = require('mongoose');
const expect = require('chai').expect;

  const admin-settingsDAO = require(process.cwd() + '/server/api/user/dao/admin-settings-dao');
  const setupMongoose = require('../../_helpers/db').setupMongoose;



describe('admin-settingsDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    admin-settingsDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
