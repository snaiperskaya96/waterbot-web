"use strict";

const mongoose = require('mongoose');
const expect = require('chai').expect;

  const custom-dataDAO = require(process.cwd() + '/server/api/custom-data/dao/custom-data-dao');
  const setupMongoose = require('../../_helpers/db').setupMongoose;



describe('custom-dataDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    custom-dataDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
