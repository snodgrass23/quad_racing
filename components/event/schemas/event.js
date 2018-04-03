var utils = require('mongoose-utils'),
    mongoose = require('mongoose');

module.exports = function() {

  var Event = new mongoose.Schema({
    name :    { type: String, trim: true },
    isPrivate: Boolean,
    status: String,
    description: String,
    start_at: Date,
    end_at:   Date
  }, {strict:true});

  // Plugins

  Event.plugin(utils.plugin.timestamps);
  Event.plugin(utils.plugin.extendedMethods);

  // Getters and Setters


  // Static methods


  // Export

  return Event;
};
