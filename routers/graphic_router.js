var express      = require('express'),
    models       = require('../models');

var Library      = models.libraries,
    Graphic      = models.graphics,
    User         = models.users,
    Composition  = models.compositions;

var graphicRouter = express.Router();

graphicRouter.get('/', function (req, res) {
  Graphic
    .findAll()
    .then(function (graphic) {
      res.send(graphic)
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
  Graphic
    .findOne(req.params.id)
    .then(function (graphic) {
      res.send(graphic)
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
