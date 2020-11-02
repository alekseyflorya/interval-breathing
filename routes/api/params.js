const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Params Model
const Params = require('../../models/Params');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  Params.find()
    .sort({ date: -1 })
    .then(params => res.json(params));
});

// @route   POST api/params
// @desc    Create Params
// @access  Private
router.post('/', auth, (req, res) => {
  const newParams = new Params({
    name: req.body.name
  });

  newParams.save().then(params => res.json(params));
});

module.exports = router;
