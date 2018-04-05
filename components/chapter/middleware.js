module.exports = function(app, Chapter) {

  return {
    getChapter: function(req, res, next) {
      Chapter.findById(req.params.id).select('name').exec((err, chapter) => {
        res.locals.chapter = chapter;
        next();
      });
    },

    getAllChapters: function(req, res, next) {
      Chapter.find().select('name').exec((err, chapters) => {
        res.locals.chapters = chapters;
        next();
      });
    },

    createChapter: function(req, res, next) {
      Chapter.create(req.body, function(err) {
        // TODO: better error
        req.flash(err ? err : 'Chapter created!');
        next();
      });
    }
  };
};
