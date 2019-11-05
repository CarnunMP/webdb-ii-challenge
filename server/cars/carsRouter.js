const express = require('express');

const router = express.Router();

router.get('/dummy', (req, res) => {
  res.send('<h3> carsRouter hooked up! <h3>');
})

module.exports = router;
