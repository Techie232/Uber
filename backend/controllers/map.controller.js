const mapService = require('../services/maps.service');
const { validationResult } = require('express-validator');

module.exports.getCoordinates = async (req, res, next) => {

   const errros = validationResult(req);
   if (!errros.isEmpty()) {
      return res.status(400).json({ errors: errros.array() });
   }

   const { address } = req.query;

   try {
      const coordinates = await mapService.getAddressCoordinate(address);
      res.status(200).json(coordinates);
   } catch (error) {
      res.status(404).json({ message: 'Coordinates not Found' });
   }
}

module.exports.getDistanceTime = async (req, res, next) => {
   try {
      const errros = validationResult(req);
      if (!errros.isEmpty()) {
         return res.status(400).json({ errors: errros.array() });
      }

      const { oriLong, oriLat, destLong, destLat } = req.query;

      const distanceTime = await mapService.getDistanceTime(oriLong, oriLat, destLong, destLat);

      res.status(200).json(distanceTime);

   } catch (error) {
      console.log(error)
      res.status(500).json({
         message: 'Internal server error',
      })
   }
}

module.exports.getAutoCompleteSuggestions = async(req, res, next) => {
   
}