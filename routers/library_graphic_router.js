var express      = require('express'),
    models       = require('../models');

var Library             = models.libraries,
    LibraryGraphic      = models.library_graphics;

var graphicRouter = express.Router();

graphicRouter.get('/', function (req, res) {
  LibraryGraphic
    .findAll()
    .then(function (libraryGraphic) {
      res.send(libraryGraphic)
    },
    function (err) {
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

graphicRouter.get('/:id', function (req, res) {
  LibraryGraphic
    .findOne(req.params.id)
    .then(function (libraryGraphic) {
      res.send(libraryGraphic)
    },
    function (err) {
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

module.exports = graphicRouter;
