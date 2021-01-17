const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const path = require('path');

console.log('inside of login.js');
// router.get('/', (req, res) => {
//   return res
//     .status(200)
//     .set({ 'content-type': 'text/html; charset=UTF-8' })
//     .sendFile(path.resolve(__dirname, '../client/login.html'));
// });

router.post('/', userController.getUser, (req, res) => {
  res.status(200).json(res.locals);
});

module.exports = router;
