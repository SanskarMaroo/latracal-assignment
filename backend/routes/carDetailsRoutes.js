const express = require('express');
const carDetailsController = require('../controllers/carDetailsContollers');

const router = express.Router();

router.route('/data')
.get(carDetailsController.getCarsInGarage)
.post(carDetailsController.CreateCarDetail)

router.route('/data/:id')
.get(carDetailsController.getCarDetail)
.put(carDetailsController.UpdateCarDetail)

module.exports = router;