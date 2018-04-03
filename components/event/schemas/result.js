var utils = require('mongoose-utils'),
    mongoose = require('mongoose');

module.exports = function() {

  var Results = new mongoose.Schema({
    pilots: [],
    heats: [],
    finals: []
  }, {strict:true});

  // Plugins

  Results.plugin(utils.plugin.timestamps);
  Results.plugin(utils.plugin.extendedMethods);

  // Getters and Setters


  // Static methods


  // Export

  return Results;
};
