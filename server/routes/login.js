const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/', userController.getUser, (req, res) => {
  res.status(200).json(res.locals);
});

module.exports = router;
