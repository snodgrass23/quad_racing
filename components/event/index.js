const EventSchema = require('./schemas/event')(),
      RaceSchema  = require('./schemas/race')();

module.exports = function(app) {

  // hook model and other helpers into app
  app.event = {
    schemas: {
      event: EventSchema,
      race: RaceSchema
    }
  };
};
