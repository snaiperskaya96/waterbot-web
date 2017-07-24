"use strict";

const mongoose = require('mongoose');

const _adminSettingsSchema = {
  name: {type: String, required: true},
  value: {type: mongoose.Schema.Types.Mixed, required: true},
  type: {type: String, required: true},
  createdAt: {type: Date, default: Date.now}
}

module.exports = mongoose.Schema(_adminSettingsSchema);
