const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const path = require('path');

router.post('/signup', userController.createUser, (req, res) => {
  console.log('post request to signup, completed');
  res.status(200).json(res.locals);
});

module.exports = router;
