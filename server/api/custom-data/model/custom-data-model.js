"use strict";

const mongoose = require('mongoose');

const _customDataSchema = {
  name: {type: String, required: true, trim: true},
  value: {type: String, required: true, trim: true},
  botId: {type: String, required: true, trim: true},
  nickname: {type: String, required: false, trim: true},
  enabled: {type: Boolean, required: false, trim: true, default: false},
  userId: {type: mongoose.Schema.Types.ObjectId, required: true, trim: true},
  createdAt: {type: Date, default: Date.now}
}

module.exports = mongoose.Schema(_customDataSchema);
