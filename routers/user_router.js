var express      = require('express'),
    bcrypt       = require('bcrypt'),
    session      = require('express-session'),
    models       = require('../models');

var User         = models.users,
    Composition  = models.compositions;

var userRouter = express.Router();

var restrictAccess = function(req, res, next) {
  var sessionID = parseInt( req.session.currentUser);  
  var reqID = parseInt( req.params.id );  

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

  bcrypt.hash(password, 10, function (err, hash) {
    User
      .create({
        username: username,
        pswd_digest: hash
      })
      .then(function(user) {
        res.send(user);
      });
  });
});

userRouter.get('/:id/compositions', authenticate, restrictAccess, function (req, res) {
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
        title: req.body.title,
        composition: req.body.composition,
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