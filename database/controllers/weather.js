const models = require('../models/weather.js');

const findWeatherAndUpdateCount = (data, callback) => {
	// console.log('hi');
    models.Rsvp.create(data, (err, result) => {
      if (err) {
      	console.log('data not here')
        callback(err)
      } else {
      	console.log('data is here')
      callback(err, result);
    };
  });
  
};

module.exports = {
	findWeatherAndUpdateCount,
};
