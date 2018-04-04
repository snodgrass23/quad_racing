module.exports = function(app, Event) {

  return {
    getEvent: function(req, res, next) {
      Event.findOne({handle: req.params.name}).select('name').exec((err, event) => {
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
  };
};
