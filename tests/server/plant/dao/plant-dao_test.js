"use strict";

const mongoose = require('mongoose');
const expect = require('chai').expect;

  const plantDAO = require(process.cwd() + '/server/api/plant/dao/plant-dao');
  const setupMongoose = require('../../_helpers/db').setupMongoose;



describe('plantDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    plantDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
