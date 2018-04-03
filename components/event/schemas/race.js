var utils = require('mongoose-utils'),
    mongoose = require('mongoose');

module.exports = function() {
  const resultSchema = require('./result')();

  var Race = new mongoose.Schema({
    class: String,
    format: String,
    status: String,
    start_at: Date,
    results: resultSchema
  }, {strict:true});

  // Plugins

  Race.plugin(utils.plugin.timestamps);
  Race.plugin(utils.plugin.extendedMethods);

  // Getters and Setters


  // Static methods


  // Export

  return Race;
};
