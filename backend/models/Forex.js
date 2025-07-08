const mongoose = require('mongoose');

const forexSchema = new mongoose.Schema({
  pair: {
    type: String,
    required: true,
    unique: true,
    uppercase: true
  },
  rate: {
    type: Number,
    required: true,
    min: 0
  },
  change: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Forex', forexSchema); 