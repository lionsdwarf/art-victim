var application_root = __dirname,
    express          = require('express'),
    bodyParser       = require('body-parser'),
    path             = require('path'),
    logger           = require('morgan'),
    models           = require('./models'),
    Graphic          = models.graphics,
    Library          = models.libraries,
    graphicRouter    = require('./routers/graphic_router.js'),
    libraryRouter    = require('./routers/library_router.js');

var app = express();

app.use( logger('dev') );
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );
app.use( express.static( path.join( application_root, 'public' )));
app.use( express.static( path.join( application_root, 'browser' )));

app.use('/graphics', graphicRouter);
app.use('/libraries', libraryRouter);

app.listen(5000, function() {
  console.log('Server live on port 5000...')
});

module.exports = app;