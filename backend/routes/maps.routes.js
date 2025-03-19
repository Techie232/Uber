const express = require('express');
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const mapController = require('../controllers/map.controller');
const { query } = require('express-validator');

router.get('/get-coorindates',
   query('address').isString().notEmpty(),
   authMiddleware.authUser, mapController.getCoordinates)

router.get('/get-distance-time',
   query('oriLong').isString().notEmpty(),
   query('oriLat').isString().notEmpty(),
   query('destLong').isString().notEmpty(),
   query('destLat').isString().notEmpty(),
   authMiddleware.authUser,
   mapController.getDistanceTime
)

router.get('/get-suggestions',
   query('input').isString().isLength({ min: 3 }),
   authMiddleware.authUser,
   mapController.getAutoCompleteSuggestions,
)

module.exports = router;