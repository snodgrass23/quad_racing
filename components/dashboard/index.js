var path        = require('path');
var serveStatic = require('serve-static');

module.exports = function(app) {

  app.use(serveStatic(path.join(__dirname, 'public')));

  app.get('/', [
    app.user.checkPasswordReset,
    app.user.getAllPilots,
    (req, res) => {
      if (req.session.user) {
        return res.render(path.join(__dirname, 'views/dashboard'), {
          allPilots: req.session.allPilots,
          user: req.session.user
        });
      } else {
        return res.render(path.join(__dirname, 'views/welcome'));
      }
    }
  ]);
};
