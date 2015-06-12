var models             = require('./models'),
    Library            = models.libraries,
    LibraryGraphic     = models.library_graphics,
    backgroundsUrl     = '/graphics/backgrounds',
    famouspplUrl       = '/graphics/celebrities',
    animalsUrl         = '/graphics/animals',
    assortedUrl        = '/graphics/assorted';

var libraries = [
  {
    name: 'Backgrounds',
    data_name: 'backgrounds',
    library_graphics: [
      {
        name: 'BehindTheHills',
        data_name: 'BehindTheHills',
        url: backgroundsUrl + '/behind_the_hills.jpg' ,
        type: 'background'
      },
      {
        name: 'DeadSeaPink',
        data_name: 'DeadSeaPink',
        url: backgroundsUrl + '/dead_sea_pink.jpg' ,
        type: 'background'
      },
      {
        name: 'NyanCatBreaksMonitor',
        data_name: 'NyanCatBreaksMonitor',
        url: backgroundsUrl + '/nyan_cat_breaks_monitor.jpg' ,
        type: 'background'
      },
      {
        name: 'AmericanFlag',
        data_name: 'AmericanFlag',
        url: backgroundsUrl + '/american_flag.jpg' ,
        type: 'background'
      },
      {
        name: 'DaMoon',
        data_name: 'DaMoon',
        url: backgroundsUrl + '/da_moon.jpg' ,
        type: 'background'
      },
      {
        name: 'MonaLisa',
        data_name: 'MonaLisa',
        url: backgroundsUrl + '/mona_lisa.jpg',
        type: 'background'
      },
      {
        name: 'PradaMilano',
        data_name: 'PradaMilano',
        url: backgroundsUrl + '/prada_milano.jpg',
        type: 'background'
      },
      {
        name: 'GrandCanyon',
        data_name: 'GrandCanyon',
        url: backgroundsUrl + '/gc_first_light.jpg',
        type: 'background'
      }
    ]
  },
  {
    name: 'Celebrities',
    data_name: 'celebrities',
    library_graphics: [
      {
        name: 'Elvis',
        data_name: 'Elvis',
        url: famouspplUrl + '/elvis1.png' ,
        type: 'graphic'
      },
      {
        name: 'MarilynMansonRose',
        data_name: 'MarilynMansonRose',
        url: famouspplUrl + '/marilyn_manson_rose.png' ,
        type: 'graphic'
      },
      {
        name: 'SnoopMWTC',
        data_name: 'SnoopMWTC',
        url: famouspplUrl + '/snoop_murder_wt_case.png' ,
        type: 'graphic'
      },
      {
        name: 'Patrick',
        data_name: 'Patrick',
        url: famouspplUrl + '/patrick.png',
        type: 'graphic'
      },
      {
        name: 'LegoBond',
        data_name: 'LegoBond',
        url: famouspplUrl + '/lego_bond.png',
        type: 'graphic'
      },
      {
        name: 'BabySpongeBob',
        data_name: 'BabySpongeBob',
        url: famouspplUrl + '/baby_spongebob.png',
        type: 'graphic'
      },
      {
        name: 'MariowCoins',
        data_name: 'MariowCoins',
        url: famouspplUrl + '/mario_coins.png',
        type: 'graphic'
      },
      {
        name: 'BabyMario',
        data_name: 'BabyMario',
        url: famouspplUrl + '/baby_mario.png',
        type: 'graphic'
      },
      {
        name: 'Yoshi',
        data_name: 'Yoshi',
        url: famouspplUrl + '/yoshi.png',
        type: 'graphic'
      },
    ]
  },
  {
    name: 'Animals',
    data_name: 'animals',
    library_graphics: [
      {
        name: 'SmileyDolphin',
        data_name: 'SmileyDolphin',
        url: animalsUrl + '/smiley_dolphin.png',
        type: 'graphic'
      },
      {
        name: 'SmileyLamb',
        data_name: 'SmileyLamb',
        url: animalsUrl + '/smiley_lamb.png',
        type: 'graphic'
      },
      {
        name: 'PrancingSpottedHorse',
        data_name: 'PrancingSpottedHorse',
        url: animalsUrl + '/prancing_spotted_horse.png',
        type: 'graphic'
      },
      {
        name: 'SquintyCat',
        data_name: 'SquintyCat',
        url: animalsUrl + '/squinty_cat.png',
        type: 'graphic'
      },
      {
        name: 'PawingCat',
        data_name: 'PawingCat',
        url: animalsUrl + '/pawing_cat.png',
        type: 'graphic'
      },
      {
        name: 'CatwButterflies',
        data_name: 'CatwButterflies',
        url: animalsUrl + '/butterfly_dreamer.png',
        type: 'graphic'
      },
      {
        name: 'NYANcat',
        data_name: 'NYANcat',
        url: animalsUrl + '/nyan_cat.png',
        type: 'graphic'
      },
      {
        name: 'NYANpikachu',
        data_name: 'NYANpikachu',
        url: animalsUrl + '/nyan_pikachu.png',
        type: 'graphic'
      },
      {
        name: 'HelloKitty',
        data_name: 'HelloKitty',
        url: animalsUrl + '/hello_kitty.png',
        type: 'graphic'
      },
      {
        name: 'HelloKittyDancer',
        data_name: 'HelloKittyDancer',
        url: animalsUrl + '/hello_kitty_dancer.png',
        type: 'graphic'
      },
      {
        name: 'NyanlessCat',
        data_name: 'NyanlessCat',
        url: animalsUrl + '/nyanless_cat.png',
        type: 'graphic'
      },
      {
        name: 'SenorNyanCat',
        data_name: 'SenorNyanCat',
        url: animalsUrl + '/senor_nyan_cat.png',
        type: 'graphic'
      },
      {
        name: 'NyanFish',
        data_name: 'NyanFish',
        url: animalsUrl + '/nyan_fish.png',
        type: 'graphic'
      }
    ]
  },
  {
    name: 'Assorted',
    data_name: 'assorted',
    library_graphics: [
      {
        name: 'ActiveTank',
        data_name: 'ActiveTank',
        url: assortedUrl + '/active_tank.png',
        type: 'graphic'
      },
      {
        name: 'DiamondBling',
        data_name: 'DiamondBling',
        url: assortedUrl + '/diamond_bling.png',
        type: 'graphic'
      },
      {
        name: 'Seduction',
        data_name: 'Seduction',
        url: assortedUrl + '/seduction.png',
        type: 'graphic'
      },
      {
        name: 'Brain',
        data_name: 'Brain',
        url: assortedUrl + '/brain.png',
        type: 'graphic'
      },
      {
        name: 'MaleModel',
        data_name: 'MaleModel',
        url: assortedUrl + '/male_model.png',
        type: 'graphic'
      },
      {
        name: 'PizzaMeditation',
        data_name: 'PizzaMeditation',
        url: assortedUrl + '/pizza_meditation.png',
        type: 'graphic'
      }
    ]
  }
]

var seedDatabase = function () {
  libraries.forEach(function (libraryData) {
    Library
      .create({
        name: libraryData.name,
        data_name: libraryData.data_name
      })
      .then(function(library) {
        libraryData.library_graphics.forEach(function (libraryGraphicData) {
          LibraryGraphic
            .create({
              name: libraryGraphicData.name,
              data_name: libraryGraphicData.data_name,
              url: libraryGraphicData.url,
              type: libraryGraphicData.type,
              library_id: library.id
            });
        });
      });
  });
}

Library.destroy({ truncate: true }).then(function() {
  LibraryGraphic.destroy({ truncate: true }).then(function() {
    seedDatabase();
  });
});