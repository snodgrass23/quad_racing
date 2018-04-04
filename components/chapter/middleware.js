module.exports = function(app, Chapter) {

  return {
    getChapter: function(req, res, next) {
      Chapter.findOne({handle: req.params.name}).select('name').exec((err, chapter) => {
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
  };
};
