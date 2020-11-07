const {Schema, model} = require('mongoose')

// Create Schema
const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  },
  params: {
    inhale: {type: Number, default: 2},
    delay: {type: Number, default: 3},
    exhale: {type: Number, default: 4},
    pause: {type: Number, default: 5},
    inhalePerMin: {type: Number, default: 19},
    colour: {type: String, default: '#010a1c'},
    figure: {type: Number, default: 0},
    isVideo: {type: Boolean, default: true},
    video: {type: Number, default: 2},
    audio: {trackType: {
      type: String, default: 'audio'},
      trackId: {type: Number, default: 1}},
    volume: {type: Number, default: 0.8}
  }
});

module.exports = model('User', schema)
