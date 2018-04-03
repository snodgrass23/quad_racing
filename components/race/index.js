const RaceModel   = require('./models/raceModel')();

module.exports = function(app) {

  // hook model and other helpers into app
  app.race = {
    model: RaceModel
  };
};
