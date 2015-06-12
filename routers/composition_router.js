var express      = require('express'),
    models       = require('../models');

var User                   = models.users,
    Composition            = models.compositions,
    CompositionGraphic     = models.composition_graphics;

var compositionRouter = express.Router();

var restrictAccess = function(req, res, next) {
  var sessionID = parseInt(req.session.currentUser);  
  var reqID = parseInt(req.params.id);  

  sessionID === reqID ? next() : res.status(401).send({err: 401, msg: 'Access restricted'})
};

var authenticate = function( req, res, next) {
  req.session.currentUser ? next() : res.status(400).send({err: 400, msg: 'Invalid login info'});
};

// compositionRouter.get('/', authenticate, restrictAccess, function (req, res) {
//   Composition
//     .findAll({ include: [User] })
//     .then(function(compositions) {
//       res.send(compositions);
//     });
// });

// compositionRouter.get('/:id', authenticate, restrictAccess, function (req, res) {
//   Composition
//     .findOne({
//       where: { id: req.params.id },
//       include: CompositionGraphic
//     })
//     .then(function(composition) {
//       res.send(composition)
//     }, 
//     function(err) {
//       var errors = err.errors.map(function(error) {
//         return error.path + ' - ' + error.message
//       });
//       res.status(404);
//       res.send({
//         status: 404,
//         err: errors
//       });
//     });
// });

compositionRouter.post('/:id/composition_graphics', authenticate, restrictAccess, function (req, res) {
  CompositionGraphic
    .create({
      name: req.body.name,
      data_name: req.body.data_name,
      type: req.body.type,
      url: req.body.url,
      user_input: req.body.user_input,
      left: req.body.left,
      top: req.body.top,
      width: req.body.width,
      height: req.body.height,
      z_index: req.body.z_index,
      greyscale: req.body.greyscale,
      composition_id: req.body.composition_id
    })
    .then(function(compositionGraphic) {
      res.send(compositionGraphic)
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

module.exports = compositionRouter;