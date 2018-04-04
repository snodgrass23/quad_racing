# Functional Components

Each component will be a minimally coupled piece of logic that can handle a section of functionality including the routing for related requests. For example, the User component handles all routing for things like registering and logging in. It also contains the user db schema and model that can be used for all DB activities.

All base12 components have the same signature:

```javascript
module.exports = function(app) {
  // ...
  return my_module;
}
```

The component or lib is responsible for supplying the app with the needed interface hooks. This includes request routing and access to any internal component logic. For example, a component with a single route might look like:

```javascript
module.exports = function(app) {
  app.get('/dashboard', function(req, res) {
    return res.render(require('path').join(__dirname, 'dashboard'), {
      user: req.session.user
    });
  });
};
```

The component should be treated as a black box so that other components (or the app iteself) only interact through a known interface. For example, the default user component had logic to determine if a user is logged in. This allows all other components to access the functionity like this:

```javascript
app.user.loggedIn
```

It exposes this functionality like this:

```javascript
app.user = {
  loggedIn: function(req, res, next) {
    if (req.session.user) {
      return next();
    }
    req.session.redirect = req.url;
    req.flash('Please log in first.');
    return res.redirect('/');
  }
}
```

You will then need to add the component to the main app file for loading.
``` javascript
var user = require('./components/user');
```
``` javascript
user(app, config);
```
