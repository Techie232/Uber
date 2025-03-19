const axios = require('axios');

module.exports.getAddressCoordinate = async (address) => {
   const apiKey = process.env.GEOCODE_MAP_API_KEY;
   const url = `https://geocode.maps.co/search?q=${encodeURIComponent(address)}&api_key=${apiKey}`

   try {
      const response = await axios.get(url);

      if (response.data?.length >= 0) {
         const location = response.data[0];
         return {
            ltd: location.lat,
            lng: location.lon
         };
      } else {
         throw new Error('Unable to fetch coordinates');
      }
   } catch (error) {
      console.error(error);
      throw new Error('Error fetching coordinates');
   }
}

module.exports.getDistanceTime = async (oriLong, oriLat, destLong, destLat) => {

   if (!oriLong || !oriLat || !destLong || !destLat) {
      throw new Error('All coordinates are required');
   }

   const apiKey = process.env.OPEN_ROUTE_SERVICE_API_KEY;
   const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${oriLong},${oriLat}&end=${destLong},${destLat}`;

   try {

      const response = await axios.get(url);
      if (response) {
         return {
            distance: response.data.features[0].properties.segments[0].distance / 1000 + " km",
            duration: response.data.features[0].properties.segments[0].duration / 60 + " minute",
         }
      }
      else
         throw new Error('Unable to compute distance');

   } catch (error) {
      console.log(error)
      throw error;
   }

}

module.exports.getAutoCompleteSuggestions = async (input) => {
   if (!input) {
      throw new Error("query is required");
   }

   const apiKey = process.env.GEOCODE_MAP_API_KEY;
}