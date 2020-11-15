const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const {body, validationResult} = require('express-validator')


// User Model
const User = require('../../models/User');

// @route   POST api/users
// @desc    Register new user
// @access  Public
router.post('/',
  [
    body('name', 'Name will be min 3 symbols').isAlpha().isLength({min: 3}).trim(),
    body('email', 'Enter the correct Email').isEmail().normalizeEmail(),
    body('password', 'Password will be minimum 6 symbols').isLength({min: 6, max: 36}).trim()
  ],
  (req, res) => {
  const { name, email, password } = req.body;

  const errors = validationResult(req)

  // Simple validation
  if(!name || !email || !password || !errors.isEmpty()) {
    return res.status(400).json({ msg: 'Please enter valid data!' });
  }

  // Check for existing user
  User.findOne({ email })
    .then(user => {
      if(user) return res.status(400).json({ msg: 'User already exists' });

      const newUser = new User({
        name,
        email,
        password
      });

      // Create salt & hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
              jwt.sign(
                { id: user.id },
                config.get('jwtSecret'),
                { expiresIn: 7200 },
                (err, token) => {
                  if(err) throw err;
                  res.json({
                    token,
                    user: {
                      _id: user.id,
                      name: user.name,
                      email: user.email,
                      params: user.params
                    }
                  });
                }
              )
            });
        })
      })
    })
});

module.exports = router;
