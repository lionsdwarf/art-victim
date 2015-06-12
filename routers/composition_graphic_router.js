var express      = require('express'),
    models       = require('../models');

var Composition            = models.compositions,
    CompositionGraphic     = models.compositionGraphics;

var compositionGraphicRouter = express.Router();

var restrictAccess = function(req, res, next) {
  var sessionID = parseInt(req.session.currentUser);  
  var reqID = parseInt(req.params.id);  

  sessionID === reqID ? next() : res.status(401).send({err: 401, msg: 'Access restricted'})
};

var authenticate = function( req, res, next) {
  req.session.currentUser ? next() : res.status(400).send({err: 400, msg: 'Invalid login info'});
};

compositionGraphicRouter.get('/', authenticate, restrictAccess, function (req, res) {
  CompositionGraphic
    .findAll({ include: [Composition] })
    .then(function(compositionGraphics) {
      res.send(compositionGraphics);
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

compositionGraphicRouter.get('/:id', authenticate, restrictAccess, function (req, res) {
  CompositionGraphic
    .findOne(req.params.id)
    .then(function (CompositionGraphic) {
      res.send(CompositionGraphic)
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

module.exports = compositionGraphicRouter;