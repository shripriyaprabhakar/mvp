const mongoose = require('mongoose');

const WeatherSchema = new mongoose.Schema({
  count: Number,
  suggestions: String,
});

const Weather = mongoose.model('Weather', WeatherSchema);

module.exports = {
	Weather,
};