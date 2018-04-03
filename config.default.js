var port = 3000;

module.exports = {

  port: port,
  request_timeout: 100000,
  session_secret: "quadRacingSecret",
  log_requests: true,
  stylus_compress: 1,
  stylus_debug: 1,
  stylus_force: 1,
  test: false,
  redis: {
    host: "localhost",
    port: 6379,
    auth: "",
    debug: false
  },
  mongoose_url: "mongodb://localhost/quadracing",
  send_mail: true,
  contact_email: "snodgrass23@gmail.com",
  host: "http://localhost:"+port
};
