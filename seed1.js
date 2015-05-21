var models             = require('./models'),
    Library            = models.libraries,
    Graphic            = models.graphics,
    backgroundsUrl     = '/graphics/backgrounds',
    famouspplUrl       = '/graphics/famous_people',
    animalsUrl         = '/graphics/animals',
    assortedUrl        = '/graphics/assorted';

var libraries = [
  {
    name: 'Backgrounds',
    library: 'backgrounds',
    graphics: [
      {
        name: 'BehindTheHills',
        url: backgroundsUrl + '/behind_the_hills.jpg' 
      },
      {
        name: 'DeadSeaPink',
        url: backgroundsUrl + '/dead_sea_pink.jpg' 
      },
      {
        name: 'NyanCatBreaksMonitor',
        url: backgroundsUrl + '/nyan_cat_breaks_monitor.jpg' 
      },
      {
        name: 'AmericanFlag',
        url: backgroundsUrl + '/american_flag.jpg' 
      },
      {
        name: 'DaMoon',
        url: backgroundsUrl + '/da_moon.jpg' 
      },
      {
        name: 'MonaLisa',
        url: backgroundsUrl + '/mona_lisa.jpg'
      },
      {
        name: 'PradaMilano',
        url: backgroundsUrl + '/prada_milano.jpg'
      },
      {
        name: 'GrandCanyon',
        url: backgroundsUrl + '/gc_first_light.jpg'
      }
    ]
  },
  {
    name: 'Famous People',
    library: 'famous-people',
    graphics: [
      {
        name: 'Elvis',
        url: famouspplUrl + '/elvis1.png' 
      },
      {
        name: 'MarilynMansonRose',
        url: famouspplUrl + '/marilyn_manson_rose.png' 
      },
      {
        name: 'SnoopMWTC',
        url: famouspplUrl + '/snoop_murder_wt_case.png' 
      },
      {
        name: 'Patrick',
        url: famouspplUrl + '/patrick.png'
      },
      {
        name: 'LegoBond',
        url: famouspplUrl + '/lego_bond.png'
      },
      {
        name: 'BabySpongeBob',
        url: famouspplUrl + '/baby_spongebob.png'
      },
      {
        name: 'MariowCoins',
        url: famouspplUrl + '/mario_coins.png'
      },
      {
        name: 'BabyMario',
        url: famouspplUrl + '/baby_mario.png'
      },
      {
        name: 'Yoshi',
        url: famouspplUrl + '/yoshi.png'
      },
    ]
  },
  {
    name: 'Animals',
    library: 'animals',
    graphics: [
      {
        name: 'SmileyDolphin',
        url: animalsUrl + '/smiley_dolphin.png'
      },
      {
        name: 'SmileyLamb',
        url: animalsUrl + '/smiley_lamb.png'
      },
      {
        name: 'PrancingSpottedHorse',
        url: animalsUrl + '/prancing_spotted_horse.png'
      },
      {
        name: 'SquintyCat',
        url: animalsUrl + '/squinty_cat.png'
      },
      {
        name: 'PawingCat',
        url: animalsUrl + '/pawing_cat.png'
      },
      {
        name: 'CatwButterflies',
        url: animalsUrl + '/butterfly_dreamer.png'
      },
      {
        name: 'NYANcat',
        url: animalsUrl + '/nyan_cat.png'
      },
      {
        name: 'NYANpikachu',
        url: animalsUrl + '/nyan_pikachu.png'
      },
      {
        name: 'HelloKitty',
        url: animalsUrl + '/hello_kitty.png'
      },
      {
        name: 'HelloKittyDancer',
        url: animalsUrl + '/hello_kitty_dancer.png'
      },
      {
        name: 'NyanlessCat',
        url: animalsUrl + '/nyanless_cat.png'
      },
      {
        name: 'SenorNyanCat',
        url: animalsUrl + '/senor_nyan_cat.png'
      },
      {
        name: 'NyanFish',
        url: animalsUrl + '/nyan_fish.png'
      }
    ]
  },
  {
    name: 'Assorted',
    library: 'assorted',
    graphics: [
      {
        name: 'ActiveTank',
        url: assortedUrl + '/active_tank.png'
      },
      {
        name: 'DiamondBling',
        url: assortedUrl + '/diamond_bling.png'
      },
      {
        name: 'Seduction',
        url: assortedUrl + '/seduction.png'
      },
      {
        name: 'Brain',
        url: assortedUrl + '/brain.png'
      },
      {
        name: 'MaleModel',
        url: assortedUrl + '/male_model.png'
      },
      {
        name: 'PizzaMeditation',
        url: assortedUrl + '/pizza_meditation.png'
      }
    ]
  }
]

var seedDatabase = function () {
  libraries.forEach(function (libraryData) {
    Library
      .create({
        name: libraryData.name,
        library: libraryData.library
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