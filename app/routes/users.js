const express = require('express');
const router = express.Router();
const db = require('../models/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //TODO - get headers for authorization console.log(req.get('Content-Type'));
  let sql_statement = "SELECT * FROM identity";
  db.query(sql_statement, (err, result, fields) => {
    if (err) throw err;
    const ret = result.map(el => {
      return {
        name: el.name,
        userid: el.userid,
        roles: el.roles
      }
    });
    res.json(ret);
  });
});

module.exports = router;
