var application_root = __dirname,
    express          = require('express'),
    bodyParser       = require('body-parser'),
    path             = require('path'),
    logger           = require('morgan'),
    bcrypt           = require('bcrypt'),
    session          = require('express-session'),
    models           = require('./models');

var libraryRouter       = require('./routers/library_router.js'),
    graphicRouter       = require('./routers/graphic_router.js'),
    userRouter          = require('./routers/user_router.js'),
    compositionRouter   = require('./routers/composition_router.js');

var Library          = models.libraries,
    Graphic          = models.graphics,
    User             = models.users,
    Composition      = models.compositions;

var app = express();

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
app.use('/graphics', graphicRouter);
app.use('/users', userRouter);
app.use('/compositions', compositionRouter);

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port') );
});

module.exports = app;