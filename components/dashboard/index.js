var path        = require('path');
var serveStatic = require('serve-static');

module.exports = function(app) {

  app.use(serveStatic(path.join(__dirname, 'public')));

  app.get('/', [
    app.user.checkPasswordReset,
    setPilotHandle,
    app.user.getPilot,
    (req, res) => {
      if (req.session.user) {
        return res.render(path.join(__dirname, 'views/dashboard'));
      } else {
        return res.render(path.join(__dirname, 'views/welcome'));
      }
    }
  ]);
};

function setPilotHandle(req, res, next) {
  req.params.pilotHandle = req.session.user && req.session.user.handle;
  next();
}
