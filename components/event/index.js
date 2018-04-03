const EventModel   = require('./models/eventModel')();

module.exports = function(app) {

  // hook model and other helpers into app
  app.race = {
    model: EventModel
  };
};
