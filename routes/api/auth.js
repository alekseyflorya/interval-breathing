const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const {body, validationResult} = require('express-validator')
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');


// User Model
const User = require('../../models/User');

// @route   POST api/auth
// @desc    Auth user
// @access  Public
router.post('/',
  [
    body('email', 'Enter the correct Email').isEmail().normalizeEmail(),
    body('password', 'Password will be minimum 6 symbols').isLength({min: 6, max: 36}).trim()
  ],
  (req, res) => {
  const { email, password } = req.body;

  const errors = validationResult(req)

  // Simple validation
  if(!email || !password || !errors.isEmpty()) {
    return res.status(400).json({ msg: 'Please enter valid data!' });
  }

  // Check for existing user
  User.findOne({ email })
    .then(user => {
      if(!user) return res.status(400).json({ msg: 'User Does not exist' });

      // Validate password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

          jwt.sign(
            { id: user.id },
            config.get('jwtSecret'),
            { expiresIn: 3600 },
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
        })
    })
});

// @route   GET api/auth/user
// @desc    Get user data
// @access  Private
router.get('/user', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
});

router.post('/user', (req, res) => {
  const id = req.body._id;
  const params = req.body.params;

  User.findByIdAndUpdate(id, {params: params},
    (err, user) => {
      if (err) {
        console.log(err);
        throw err;
      } else {
        res.json(user);
        console.log('Params updated successfully !')
      }
    });
});


module.exports = router;
