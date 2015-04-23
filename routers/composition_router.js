var express      = require('express'),
    models       = require('../models');

var User         = models.users,
    Composition  = models.compositions;

var compositionRouter = express.Router();

compositionRouter.get('/', function (req, res) {
  Composition
    .findAll({ include: [User] })
    .then(function(compositions) {
      res.send(compositions);
    });
});

module.exports = compositionRouter;