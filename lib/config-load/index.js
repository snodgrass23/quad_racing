module.exports = function loadConfig() {

  var public_config   = require('../../config.default');
  
  var private_config;
  try {
    private_config  = require('../../config.local');
  }
  catch(e) {
    private_config = {};
  }
  
  return _.extend(public_config, private_config);

};