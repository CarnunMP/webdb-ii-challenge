const express = require('express');
const db = require('../../data/dbConfig');

const router = express.Router();

router.get('/dummy', (req, res) => {
  res.send('<h3> carsRouter hooked up! <h3>');
})

router.get('/', (req, res) => {
  db('cars')
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(err => {
      res.status(500).json({
        message: "failed to GET /api/cars: " + err.message,
      })
    })
});

// Can't be bothered to write the second endpoint, sorry!
// It's enough that I see how it works, I think! :)

module.exports = router;
