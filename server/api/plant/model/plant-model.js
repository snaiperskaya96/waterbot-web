"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _plantSchema = {
  userId: {type: Schema.Types.ObjectId, required: true, trim: true},
  name: {type: String, required: true},
  nickname: {type: String, required: false, default: null},
  botId: {type: String, required: true},
  wateredEvery: {type: Number, required: false, default: 0},
  wateringTimes: {time: {type: Number, required: false}, seconds: {type: Number, required: false}},
  humidity: {type: Number, default: null},
  createdAt: {type: Date, default: Date.now}
}

module.exports = mongoose.Schema(_plantSchema);
