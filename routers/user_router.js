var express      = require('express'),
    bcrypt       = require('bcrypt'),
    session      = require('express-session'),
    models       = require('../models');

var User                   = models.users,
    Composition            = models.compositions,
    CompositionGraphic     = models.composition_graphics;

var userRouter = express.Router();

var restrictAccess = function(req, res, next) {
  var sessionID = parseInt(req.session.currentUser);  
  var reqID = parseInt(req.params.id);  

  sessionID === reqID ? next() : res.status(401).send({err: 401, msg: 'Access restricted'})
};

var authenticate = function( req, res, next) {
  req.session.currentUser ? next() : res.status(400).send({err: 400, msg: 'Invalid login info'});
};

userRouter.get('/current_user', function (req, res) {
  var userID = req.session.currentUser;
  User
    .findOne(userID)
      .then(function(user) {
        res.send(user);
      });
});

userRouter.get('/', function (req, res) {
  User
    .findAll({ include: [Composition] })
    .then(function(users) {
      res.send(users);
    });
});


userRouter.post('/sessions', function (req, res) {
  var loginUsername = req.body.username;
  var loginPassword = req.body.password;

  User
    .findOne({
      where: { username: loginUsername }
    })
    .then(function(user) {
      if (user) {
        var passwordDigest = user.pswd_digest;

        bcrypt.compare(loginPassword, passwordDigest, function (err, result) {
          if (result) {
            req.session.currentUser = user.id;
            res.send('Valid login!');
          } else {
            res.status(400);
            res.send({
              err: 400,
              msg: 'Invalid password'
            });
          }
        });
      } else {
        res.status(400);
        res.send({
          err: 400,
          msg: 'Invalid username'
        });
      }
    });
});

userRouter.delete('/sessions', function (req, res) {
  delete req.session.currentUser;
  res.send('Logged out');
});

userRouter.post('/', function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var email = req.body.email;

  bcrypt.hash(password, 10, function (err, hash) {
    User
      .create({
        username: username,
        pswd_digest: hash,
        email: email
      })
      .then(function(user) {
        res.send(user);
      });
  });
});

userRouter.get('/:id/compositions', 
  // authenticate, restrictAccess, 
  function (req, res) {
  Composition
    .findAll({
      where: { user_id: req.params.id }
    })
      .then(function(compositions) {
        res.send(compositions);
      });
});

userRouter.post('/:id/compositions', function (req, res) {
  if (req.session.currentUser) {
    Composition
      .create({
        name: req.body.name,
        data_name: req.body.data_name,
        user_id: req.session.currentUser
      })
      .then(function(composition) {
        res.send(composition);
      });
  } else {
    res.status(400);
    res.send({
      err: 400,
      msg: 'Negative, sir!'
    });

  }
});

userRouter.get('/:id/compositions/:id', function (req, res) {
  Composition
    .findOne({
      where: { id: req.params.id },
      include: CompositionGraphic
    })
    .then(function(composition) {
      res.send(composition)
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

userRouter.get('/:id/compositions/:id/composition_graphics', 
  // authenticate, restrictAccess, 
  function (req, res) {
  CompositionGraphic
    .findAll({
      where: { composition_id: req.params.id }
    })
      .then(function(compositionGraphics) {
        res.send(compositionGraphics);
      });
});

userRouter.post('/:id/compositions/:id/composition_graphics', function (req, res) {
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
    });
});

userRouter.delete('/:id/compositions/:id/composition_graphics/:id', function (req, res) {
  CompositionGraphic
    .findOne(req.params.id)
    .then(function(compGraphic) {
      compGraphic.destroy()
      .then(function(deletedCompGraphic) {
        res.send(deletedCompGraphic);
      });
    });
});

userRouter.get('/:id', authenticate, restrictAccess, function (req, res) {
    User
      .findOne({
        where: { id: req.params.id},
        include: [Composition]
      })
      .then(function(user) {
        res.send(user);
      });
});

module.exports = userRouter;