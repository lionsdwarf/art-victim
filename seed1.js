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
        name: 'AmericanFlag',
        data_name: 'AmericanFlag',
        url: backgroundsUrl + '/american_flag.jpg' ,
        type: 'background'
      },
      {
        name: 'GrandCanyon',
        data_name: 'GrandCanyon',
        url: backgroundsUrl + '/gc_first_light.jpg',
        type: 'background'
      },
      {
        name: 'BlankTv',
        data_name: 'BlankTv',
        url: backgroundsUrl + '/blank_tv.jpg' ,
        type: 'background'
      },
      {
        name: 'CatDonut',
        data_name: 'CatDonut',
        url: backgroundsUrl + '/cat_donut.jpg' ,
        type: 'background'
      },
      {
        name: 'Cheif',
        data_name: 'Cheif',
        url: backgroundsUrl + '/cheif.jpg' ,
        type: 'background'
      },
      {
        name: 'Claw',
        data_name: 'Claw',
        url: backgroundsUrl + '/claw.jpg' ,
        type: 'background'
      },
      {
        name: 'Epiglottis',
        data_name: 'Epiglottis',
        url: backgroundsUrl + '/epiglottis.jpg' ,
        type: 'background'
      },
      {
        name: 'JetPuffed',
        data_name: 'JetPuffed',
        url: backgroundsUrl + '/jet_puffed.jpg' ,
        type: 'background'
      },
      {
        name: 'lasers',
        data_name: 'lasers',
        url: backgroundsUrl + '/lasers.jpg' ,
        type: 'background'
      },
      {
        name: 'MediumRare',
        data_name: 'MediumRare',
        url: backgroundsUrl + '/medium_rare.jpg' ,
        type: 'background'
      },
      {
        name: 'MerryMerry',
        data_name: 'MerryMerry',
        url: backgroundsUrl + '/merry_gr.jpg' ,
        type: 'background'
      },
      {
        name: 'MonaLisa',
        data_name: 'MonaLisa',
        url: backgroundsUrl + '/mona_lisa.jpg' ,
        type: 'background'
      },
      {
        name: 'NativeHorse',
        data_name: 'NativeHorse',
        url: backgroundsUrl + '/native_horse.jpg' ,
        type: 'background'
      },
      {
        name: 'NYC',
        data_name: 'NYC',
        url: backgroundsUrl + '/nyc_skyline.jpg' ,
        type: 'background'
      },
      {
        name: 'RollerCoaster',
        data_name: 'RollerCoaster',
        url: backgroundsUrl + '/roller_coaster.jpg' ,
        type: 'background'
      },
      {
        name: 'SensualDream',
        data_name: 'SensualDream',
        url: backgroundsUrl + '/sensual_dream.jpg' ,
        type: 'background'
      },
      {
        name: 'SleepsWithFishes',
        data_name: 'SleepsWithFishes',
        url: backgroundsUrl + '/sleeps_w_fishes.jpg' ,
        type: 'background'
      },
      {
        name: 'TurtleBurger',
        data_name: 'TurtleBurger',
        url: backgroundsUrl + '/turtle_burger.jpg' ,
        type: 'background'
      },
      {
        name: 'Unnamed',
        data_name: 'Unnamed',
        url: backgroundsUrl + '/unnamed.png' ,
        type: 'background'
      },
      {
        name: 'VeilNebula',
        data_name: 'VeilNebula',
        url: backgroundsUrl + '/veil_nebula.jpg' ,
        type: 'background'
      },
      {
        name: 'Wheaties',
        data_name: 'Wheaties',
        url: backgroundsUrl + '/wheaties.jpg' ,
        type: 'background'
      },
      {
        name: 'WildHorses',
        data_name: 'WildHorses',
        url: backgroundsUrl + '/wild_horses.jpg' ,
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
        name: 'Marilyn',
        data_name: 'Marilyn',
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
        name: 'BabySB',
        data_name: 'BabySB',
        url: famouspplUrl + '/baby_spongebob.png',
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
        name: 'Horse',
        data_name: 'Horse',
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
        name: 'PuppyCat',
        data_name: 'PuppyCat',
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
        name: 'HKDancer',
        data_name: 'HKDancer',
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
        name: 'SenorNyan',
        data_name: 'SenorNyan',
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
        name: 'Bling',
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
        name: 'Stud',
        data_name: 'Stud',
        url: assortedUrl + '/male_model.png',
        type: 'graphic'
      },
      {
        name: 'NacoMeditation',
        data_name: 'NachoMeditation',
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