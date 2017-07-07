"use strict";

const mongoose = require('mongoose');

const _userSchema = {
  username: {type: String, required: true, trim: true},
  email: {type: String, required: true, trim: true},
  password: {type: String, required: true, trim: true},
  createdAt: {type: Date, default: Date.now},
  lastSessionToken: {type: String, required: false, trim: true},
  apiTokens: {type: [String], required: false}
}

module.exports = mongoose.Schema(_userSchema);
