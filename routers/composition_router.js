var express      = require('express'),
    models       = require('../models');

var Library      = models.libraries,
    Graphic      = models.graphics,
    User         = models.users,
    Composition  = models.compositions;

var compositionRouter = express.Router();

var restrictAccess = function(req, res, next) {
  var sessionID = parseInt( req.session.currentUser);  
  var reqID = parseInt( req.params.id );  

  sessionID === reqID ? next() : res.status(401).send({err: 401, msg: 'Access restricted'})
};

var authenticate = function( req, res, next) {
  req.session.currentUser ? next() : res.status(400).send({err: 400, msg: 'Invalid login info'});
};

// compositionRouter.get('/users/:id/', authenticate, restrictAccess, function (req, res) {
//   Composition
//     .findAll({
//       where: { user_id: req.params.id }
//     })
//       .then(function(compositions) {
//         res.send(compositions);
//       });
// });

compositionRouter.get('/', function (req, res) {
  Composition
    .findAll({ include: [User] })
    .then(function(compositions) {
      res.send(compositions);
    });
});

// compositionRouter.post('/users/:id/', function (req, res) {
//   if (req.session.currentUser) {
//     Composition
//       .create({
//         composition: req.body.composition,
//         user_id: req.session.currentUser
//       })
//       .then(function(composition) {
//         res.send(composition);
//       });
//   } else {
//     res.status(400);
//     res.send({
//       err: 400,
//       msg: 'Negative, sir!'
//     });

//   }
// });


module.exports = compositionRouter;