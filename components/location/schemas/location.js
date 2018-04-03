var utils = require('mongoose-utils'),
    mongoose = require('mongoose');

module.exports = function() {

  let TrackSchema = require('./track')();

  var Location = new mongoose.Schema({
    name: String,
    street: String,
    city: String,
    state: String,
    country: String,
    zip: String,
    amenities: String, // do we want an amenities schema to define these more?
    tracks: [TrackSchema]
  }, {strict:true});

  // Plugins

  Location.plugin(utils.plugin.timestamps);
  Location.plugin(utils.plugin.extendedMethods);

  // Getters and Setters


  // Static methods


  // Export

  return Location;
};
