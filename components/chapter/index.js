const path = require('path');

module.exports = function(app) {
  const ChapterSchema = require('./schemas/chapter')(app);
  const ChapterModel = require('mongoose').model('Chapter', ChapterSchema);
  const middleware = require('./middleware')(app, ChapterModel);

  // hook model and other helpers into app
  app.chapter = {
    schemas: {
      chapter: ChapterSchema
    }
  };

  app.get('/chapters', [
    middleware.getAllChapters,
    render('list')
  ]);

  app.get('/chapters/:name', [
    middleware.getChapter,
    render('details')
  ]);
};


function render(view) {
  return function (req, res) {
    return res.render(path.join(__dirname, 'views/'+view));
  };
}
