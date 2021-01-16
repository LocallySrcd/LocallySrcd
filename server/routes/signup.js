const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/signup', userController.createUser, (req, res) => {
  res.status(200).json(res.locals.user);
});

module.exports = router;
