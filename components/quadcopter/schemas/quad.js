var utils = require('mongoose-utils'),
    mongoose = require('mongoose');

module.exports = function() {

  var Quad = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: String
  }, {strict:true});

  // Plugins

  Quad.plugin(utils.plugin.timestamps);
  Quad.plugin(utils.plugin.extendedMethods);

  // Getters and Setters


  // Static methods


  // Export

  return Quad;
};
