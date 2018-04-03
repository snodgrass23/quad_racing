const QuadSchema = require('./schemas/quad')();

module.exports = function(app) {

  // hook model and other helpers into app
  app.chapter = {
    schemas: {
      quad: QuadSchema
    }
  };
};
