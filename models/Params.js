const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ParamsSchema = new Schema({
  inhale: {
    type: Number,
    default: 2
  },
  delay: {
    type: Number,
    default: 3
  },
  exhale: {
    type: Number,
    default: 4
  },
  pause: {
    type: Number,
    default: 5
  },
  inhalePerMin: {
    type: Number,
    default: 19
  },
  colour: {
    type: String,
    default: '#010a1c'
  },
  figure: {
    type: Number,
    default: 2
  },
  isVideo: {
    type: Boolean,
    default: true
  },
  video: {
    type: Number,
    default: 0
  }
});

module.exports = Params = mongoose.model('params', ParamsSchema);
