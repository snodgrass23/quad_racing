var utils = require('mongoose-utils'),
    mongoose = require('mongoose');

module.exports = function() {

  var Track = new mongoose.Schema({
    name: String
  }, {strict:true});

  // Plugins

  Track.plugin(utils.plugin.timestamps);
  Track.plugin(utils.plugin.extendedMethods);

  // Getters and Setters


  // Static methods


  // Export

  return Track;
};
