var models             = require('./models'),
    Library            = models.libraries,
    Graphic            = models.graphics,
    backgroundsUrl     = '/public/graphics/backgrounds',
    musicUrl           = '/public/graphics/music';

var libraries = [
  {
    name: 'Backgrounds',
    graphics: [
      {
        name: 'Behind the hills',
        url: backgroundsUrl + '/behind_the_hills.jpg' 
      },
      {
        name: 'Dead sea pink',
        url: backgroundsUrl + '/dead_sea_pink.jpg' 
      },
      {
        name: 'Grab the open mouth',
        url: backgroundsUrl + '/grab_the_open_mouth.jpg' 
      }
    ]
  },
  {
    name: 'Music',
    graphics: [
      {
        name: 'Elvis',
        url: musicUrl + '/elvis1.png' 
      },
      {
        name: 'Marilyn by rose',
        url: musicUrl + '/marilyn_manson_rose.png' 
      },
      {
        name: 'Snoop M.W.T.C.',
        url: musicUrl + '/snoop_murder_wt_case.png' 
      }
    ]
  }
]

var seedDatabase = function () {
  libraries.forEach(function (libraryData) {
    Library
      .create({
        name: libraryData.name
      })
      .then(function(library) {
        libraryData.graphics.forEach(function (graphicData) {
          Graphic
            .create({
              name: graphicData.name,
              url: graphicData.url,
              library_id: library.id
            });
        });
      });
  });
}

Library.destroy({ truncate: true }).then(function() {
  Graphic.destroy({ truncate: true }).then(function() {
    seedDatabase();
  });
});