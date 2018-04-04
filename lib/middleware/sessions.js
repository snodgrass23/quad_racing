var session = require('express-session');
var RedisStore = require('connect-redis')(session);

module.exports = function(app) {
  return session({
    secret: 'keyboard racer',
    resave: false,
    saveUninitialized: true,
    store: new RedisStore({
      client: app.redis
    })
  });
};
