const path = require('path');
const EventSchema = require('./schemas/event')(),
      RaceSchema  = require('./schemas/race')();

module.exports = function(app) {
  const EventModel = require('mongoose').model('Event', EventSchema);
  const middleware = require('./middleware')(app, EventModel);

  // hook model and other helpers into app
  app.event = {
    schemas: {
      event: EventSchema,
      race: RaceSchema
    }
  };

  app.get('/events', [
    middleware.getAllEvents,
    render('list')
  ]);

  app.get('/events/:id', [
    middleware.getEvent,
    render('details')
  ]);

  app.post('/events', [
    middleware.createEvent,
    redirect('/events')
  ]);
};

function render(view) {
  return function (req, res) {
    return res.render(path.join(__dirname, 'views/'+view));
  };
}

function redirect(url) {
  return function (req, res) {
    return res.redirect(url);
  };
}
