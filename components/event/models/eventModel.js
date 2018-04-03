var utils = require('mongoose-utils'),
    mongoose = require('mongoose');

module.exports = function() {

  var Event = new mongoose.Schema({

  }, {strict:true});

  // Plugins

  Event.plugin(utils.plugin.timestamps);
  Event.plugin(utils.plugin.extendedMethods);

  // Getters and Setters


  // Static methods


  // Export

  return mongoose.model('Event', Event);
};
