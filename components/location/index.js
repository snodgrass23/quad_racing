const LocationSchema = require('./schemas/location')();

module.exports = function(app) {

  // hook model and other helpers into app
  app.location = {
    schemas: {
      location: LocationSchema
    }
  };
};
