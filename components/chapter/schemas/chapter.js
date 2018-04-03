var utils = require('mongoose-utils'),
    mongoose = require('mongoose');

module.exports = function(app) {

  var Chapter = new mongoose.Schema({
    name: String,
    location: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' }
  }, {strict:true});

  // Plugins

  Chapter.plugin(utils.plugin.timestamps);
  Chapter.plugin(utils.plugin.extendedMethods);

  // Getters and Setters


  // Static methods


  // Export

  return Chapter;
};
