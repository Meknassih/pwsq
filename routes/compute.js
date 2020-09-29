const express = require('express');
const router = express.Router();
const bigInt = require("big-integer");


router.post('/', function (req, res, next) {
  console.log('body', req.body);
  if (req.body.base === "" || req.body.base == null || req.body.exponent === "" || req.body.exponent == null)
    return res.status(400).send({
      error: 'BADARGS',
      message: 'Base or exponent is missing'
    });
  const result = bigInt(req.body.base).pow(bigInt(req.body.exponent));
  return res.status(200).send({
    result
  });
});

module.exports = router;
