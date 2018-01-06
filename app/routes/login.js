const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.get('Content-Type'));
  res.send('respond with a resource');
});

// Fake identity source
const users = [
  {
    id: 1,
    name: 'neon',
    password: 'ne0n'
  },
  {
    id: 2,
    name: 'test',
    password: 't3st'
  }
];

module.exports = router;