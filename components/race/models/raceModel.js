var utils = require('mongoose-utils'),
    mongoose = require('mongoose');

module.exports = function() {

  var Race = new mongoose.Schema({

  }, {strict:true});

  // Plugins

  Race.plugin(utils.plugin.timestamps);
  Race.plugin(utils.plugin.extendedMethods);

  // Getters and Setters


  // Static methods


  // Export

  return mongoose.model('Race', Race);
};
