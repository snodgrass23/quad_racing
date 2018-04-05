let path        = require('path'),
    serveStatic = require('serve-static');

module.exports = function(app) {
  let UserModel = require('./models/userModel')(app);
  let middleware = require('./middleware')(app, UserModel);

  app.use(serveStatic(path.join(__dirname, 'public')));

  // hook model and other helpers into app
  app.user = {
    loggedIn: function(req, res, next) {
      if (req.session.user) {
        return next();
      }
      req.session.redirect = req.url;
      req.flash('Please log in first.');
      return res.redirect('/');
    },
    getAllPilots: middleware.getAllPilots,
    getPilot: middleware.getPilot,
    checkPasswordReset: function(req, res, next) {
      if (req.session.user && req.session.user.resetPassword) {
        req.session.user.resetPassword = false;
        UserModel.findByIdAndUpdate(req.session.user._id, {resetPassword:false}, function(){});
        req.flash("Would you like to update your password to something more memorable?");
        return res.redirect('/settings');
      }
      next();
    },
    model: UserModel
  };

  // ROUTES

  app.get('/settings', [
    render('settings')
  ]);

  app.post('/settings', [
    middleware.updateUser,
    redirect('/')
  ]);

  app.get('/register', [
    addParams,
    render('register')
  ]);

  app.post('/register', [
    middleware.doRegister,
    middleware.doSignIn
  ]);

  app.get('/signin', [
    addParams,
    render('signin')
  ]);

  app.post('/signin', [
    middleware.doSignIn
  ]);

  app.all('/signout', [
    middleware.endSession,
    flash("You have been signed out."),
    redirect('/')
  ]);

  app.get('/reset', [
    render('reset')
  ]);

  app.post('/reset', [
    middleware.resetPassword
  ]);

  app.get('/pilots', [
    middleware.getAllPilots,
    render('pilot_list')
  ]);

  app.get('/pilots/:pilotHandle', [
    addParams,
    middleware.getPilot,
    render('pilot_details')
  ]);

};


// USER Methods

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

function flash(message) {
  return function (req, res, next) {
    req.flash(message);
    return next();
  };
}

function addParams(req, res, next) {
  res.locals.querystring = req.query;
  return next();
}
