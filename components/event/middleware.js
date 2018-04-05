module.exports = function(app, Event) {

  return {
    getEvent: function(req, res, next) {
      Event.findById(req.params.id).exec((err, event) => {
        res.locals.event = event;
        next();
      });
    },

    getAllEvents: function(req, res, next) {
      Event.find().select('name').exec((err, events) => {
        res.locals.events = events;
        next();
      });
    },

    createEvent: function(req, res, next) {
      Event.create(req.body, function(err) {
        // TODO: better error
        req.flash(err ? err : 'Event created!');
        next();
      });
    }
  };
};
