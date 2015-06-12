var express             = require('express'),
    models              = require('../models'),
    Library             = models.libraries,
    LibraryGraphic      = models.library_graphics;

var libraryRouter = express.Router();

libraryRouter.get('/', function (req, res) {
  Library
    .findAll()
    .then(function(library) {
      res.send(library)
    },
    function(err) {
      var errors = err.errors.map(function(error) {
        return error.path + ' - ' + error.message
      });
      res.status(404);
      res.send({
        status: 404,
        err: errors
      });
    });
});

libraryRouter.get('/:id/library_graphics', function (req, res) {
  Library
    .findOne({
      where: {id: req.params.id },
      include: LibraryGraphic
    })
    .then(function(library) {
      res.send(library.library_graphics)
    }, 
    function(err) {
      var errors = err.errors.map(function(error) {
        return error.path + ' - ' + error.message
      });
      res.status(404);
      res.send({
        status: 404,
        err: errors
      });
    });
});

libraryRouter.get('/:id', function (req, res) {
  Library
    .findOne({
      where: {id: req.params.id },
      include: LibraryGraphic
    })
    .then(function(library) {
      res.send(library)
    }, 
    function(err) {
      var errors = err.errors.map(function(error) {
        return error.path + ' - ' + error.message
      });
      res.status(404);
      res.send({
        status: 404,
        err: errors
      });
    });
});

module.exports = libraryRouter;
