var express      = require('express'),
    models       = require('../models'),
    Library      = models.libraries,
    Graphic      = models.graphics;

var graphicRouter = express.Router();

graphicRouter.get('/', function (req, res) {
  Graphic
    .findAll()
    .then(function(graphic) {
      res.send(graphic)
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

module.exports = graphicRouter;
