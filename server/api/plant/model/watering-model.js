"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _wateringSchema = {
  plantId: {type: Schema.Types.ObjectId, required: true, trim: true},
  userId: {type: Schema.Types.ObjectId, required: true, trim: true},
  title: {type: String, rqeuired: false, trim: true},
  start: {type: String, required: true, default: 0},
  end: {type: String, default: null},
  wateredFor: {type: Number, required: true},
  wateringTime: {type: Object, required: true},
  allDay: {type: Boolean, required: true}
}

module.exports = mongoose.Schema(_wateringSchema);
