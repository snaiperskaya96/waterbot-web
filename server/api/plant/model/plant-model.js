"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _plantSchema = {
  plantId: {type: Number, required: true},
  userId: {type: Schema.Types.ObjectId, required: true, trim: true},
  name: {type: String, required: false},
  createdAt: {type: Date, default: Date.now}
}

module.exports = mongoose.Schema(_plantSchema);
