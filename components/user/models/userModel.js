const utils = require('mongoose-utils'),
      bcrypt = require('bcrypt'),
      mongoose = require('mongoose');

module.exports = function(app) {

  const chapterSchema = app.chapter.schemas.chapter;

  let User = new mongoose.Schema({
    email         : { type: String, index: true, required:true, lowercase: true, trim:true, unique: true, validate: [utils.validate.email, 'not valid'] },
    name          : { type: String, trim: true },
    handle        : { type: String, trim: true },
    chapters      : [chapterSchema],
    homeChapter   : chapterSchema,
    password      : { type: String, trim: true, required:true, validate: [utils.validate.length(4), 'required to be at least 4 characters'] },
    resetPassword : { type: Boolean, 'default':false }
  }, {strict:true});

  // Plugins

  User.plugin(utils.plugin.timestamps);
  User.plugin(utils.plugin.extendedMethods);

  // Getters and Setters

  function encrypt(plain) {
    let salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(plain, salt);
  }

  User.path('password').set(function(password) {
    let hashed = encrypt(password);
    if (password && password.length >= 4) return hashed;
    // pass short chars to fail length validation
    return "f";
  });

  // Instance methods

  User.methods.full_name = function() {
    let nameParts = this.name.split(" ");
    if (nameParts.length == 2 && this.handle) {
      return `${nameParts[0]} (${this.handle}) ${nameParts[1]}`
    } else {
      return `${this.name} (${this.handle})`;
    }
  };

  // Static methods

  User.statics.authenticate = function(creds, callback) {

    if (!creds.password || !creds.email) return callback(new Error("Email and pass required"));

    // lookup user by email
    this.findByEmail(creds.email, function(err, user){

      // found the user
      if(!err && user) {

        // check password
        if (bcrypt.compareSync(creds.password, user.password)) return callback(null, user);

        // is temp user?
        if (user.temp) return callback(new Error('Please register account.'));

        // password doesn't match
        return callback(new Error('Unable to login'));
      }

      // did not find user or got error
      else return callback(new Error('Unable to login'));
    });
  };

  User.statics.findByEmail = function(email, callback) {
    this.findOne({email:email.toLowerCase()}, function(err, user){
      if(user && !err){
        // trigger save for updated timestamp
        user.save();
        return callback(null, user);
      }
      else return callback(new Error("Unable to find user"));
    });
  };

  // Export

  return mongoose.model('User', User);

};
