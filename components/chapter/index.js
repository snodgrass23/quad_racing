module.exports = function(app) {
  const ChapterSchema = require('./schemas/chapter')(app);

  // hook model and other helpers into app
  app.chapter = {
    schemas: {
      chapter: ChapterSchema
    }
  };
};
