var throng = require('throng');

var WORKERS = process.env.WEB_CONCURRENCY || 1;
var PORT = process.env.PORT || 5000;
var BLITZ_KEY = process.env.BLITZ_KEY;

throng(start, {
  workers: WORKERS,
  lifetime: Infinity
});

function start() {
  
var application_root = __dirname,
    express          = require('express'),
    bodyParser       = require('body-parser'),
    path             = require('path'),
    logger           = require('morgan'),
    bcrypt           = require('bcrypt'),
    session          = require('express-session'),
    models           = require('./models');

var libraryRouter              = require('./routers/library_router.js'),
    libraryGraphicRouter       = require('./routers/library_graphic_router.js'),
    userRouter                 = require('./routers/user_router.js'),
    compositionRouter          = require('./routers/composition_router.js'),
    compositionGraphicRouter   = require('./routers/composition_graphic_router.js');

var Library                 = models.libraries,
    LibraryGraphic          = models.library_graphics,
    User                    = models.users,
    Composition             = models.compositions,
    CompositionGraphic      = models.composition_graphics;

  var blitz = require('blitzkrieg');
  var crypto = require('crypto');

var app = express();

  app
    .use(blitz(BLITZ_KEY))
    .get('/cpu', cpuBound)
    .get('/memory', memoryBound)
    .get('/io', ioBound)
    .listen(PORT, onListen);

app.use( logger('dev') );
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );
app.use(express.static(__dirname + '/public'));
app.use(session({
  secret: 'thisdoesntmatterordoesit',
  resave: false,
  saveUninitialized: true
}));

app.use('/libraries', libraryRouter);
app.use('/library_graphics', libraryGraphicRouter);
app.use('/users', userRouter);
app.use('/compositions', compositionRouter);
app.use('/composition_graphics', compositionGraphicRouter);

// app.set('port', process.env.PORT || 5000);
  function cpuBound(req, res, next) {
    var key = Math.random() < 0.5 ? 'ninjaturtles' : 'powerrangers';
    var hmac = crypto.createHmac('sha512WithRSAEncryption', key);
    var date = Date.now() + '';
    hmac.setEncoding('base64');
    hmac.end(date, function() {
      res.send('A hashed date for you! ' + hmac.read());
    });
  }

  function memoryBound(req, res, next) {
    var hundredk = new Array(100 * 1024).join('X');
    setTimeout(function sendResponse() {
      res.send('Large response: ' + hundredk);
    }, 20).unref();
  }

  function ioBound(req, res, next) {
    setTimeout(function SimulateDb() {
      res.send('Got response from fake db!');
    }, 300).unref();
  }


  function onListen() {
    console.log('Express server listening on', PORT);
  }

// app.listen(app.get('port'), function() {
//   console.log('Express server listening on port ' + app.get('port') + '...');
// });

module.exports = app;
}