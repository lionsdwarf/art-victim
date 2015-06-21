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
      },
      {
        name: '8BitSkyline',
        data_name: '8BitSkyline',
        url: backgroundsUrl + '/8bit_skyline.png' ,
        type: 'background'
      },
      {
        name: '8BitSunset',
        data_name: '8BitSunset',
        url: backgroundsUrl + '/8bit_sunset.png' ,
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
        name: 'Manson',
        data_name: 'Manson',
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
      {
        name: 'Beavis',
        data_name: 'Beavis',
        url: famouspplUrl + '/beavis.png',
        type: 'graphic'
      },
      {
        name: 'Blinky',
        data_name: 'Blinky',
        url: famouspplUrl + '/8bit_blinky.png' ,
        type: 'graphic'
      },
      {
        name: 'Britney',
        data_name: 'Britney',
        url: famouspplUrl + '/b_spears.png' ,
        type: 'graphic'
      },
      {
        name: 'Batman',
        data_name: 'Batman',
        url: famouspplUrl + '/batman.png' ,
        type: 'graphic'
      },
      {
        name: 'Clinton',
        data_name: 'Clinton',
        url: famouspplUrl + '/clinton_head.png' ,
        type: 'graphic'
      },
      {
        name: 'KimJongUn',
        data_name: 'KimJongUn',
        url: famouspplUrl + '/kim_jong_un.png' ,
        type: 'graphic'
      },
      {
        name: 'SenseiPutin',
        data_name: 'SenseiPutin',
        url: famouspplUrl + '/sensei_putin.png' ,
        type: 'graphic'
      },
      {
        name: 'Miley',
        data_name: 'Miley',
        url: famouspplUrl + '/miley_cyrus.png' ,
        type: 'graphic'
      },
      {
        name: 'The Rock',
        data_name: 'TheRock',
        url: famouspplUrl + '/the_rock.png' ,
        type: 'graphic'
      },
      {
        name: 'Megaman',
        data_name: 'Megaman',
        url: famouspplUrl + '/megaman.png' ,
        type: 'graphic'
      },
      {
        name: 'BiggieSmalls',
        data_name: 'BiggieSmalls',
        url: famouspplUrl + '/biggie_smalls.png' ,
        type: 'graphic'
      },
      {
        name: 'Elway',
        data_name: 'Elway',
        url: famouspplUrl + '/elway.png' ,
        type: 'graphic'
      },
      {
        name: 'Messi',
        data_name: 'Messi',
        url: famouspplUrl + '/messi.png' ,
        type: 'graphic'
      },
      {
        name: 'Monroe',
        data_name: 'Monroe',
        url: famouspplUrl + '/monroe.png' ,
        type: 'graphic'
      },
      {
        name: 'Obama',
        data_name: 'Obama',
        url: famouspplUrl + '/obama.png' ,
        type: 'graphic'
      },
      {
        name: 'Yeezus',
        data_name: 'Yeezus',
        url: famouspplUrl + '/yeezus.png' ,
        type: 'graphic'
      },
      {
        name: 'Yeezy',
        data_name: 'Yeezy',
        url: famouspplUrl + '/yeezy_yeezy.png' ,
        type: 'graphic'
      }
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
      },
      {
        name: 'Beetle',
        data_name: 'Beetle',
        url: animalsUrl + '/beetle.png',
        type: 'graphic'
      },
      {
        name: 'Chicken',
        data_name: 'Chicken',
        url: animalsUrl + '/chicken.png',
        type: 'graphic'
      },
      {
        name: 'BrownSlug',
        data_name: 'BrownSlug',
        url: animalsUrl + '/brown_slug.png',
        type: 'graphic'
      },
      {
        name: 'PinkiePie',
        data_name: 'PinkiePie',
        url: animalsUrl + '/pinkie_pie.png',
        type: 'graphic'
      },
      {
        name: 'Spider',
        data_name: 'Spider',
        url: animalsUrl + '/spider.png',
        type: 'graphic'
      },
      {
        name: 'Elephan',
        data_name: 'Elephan',
        url: animalsUrl + '/elephant_cutout.png' ,
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
        url: assortedUrl + '/nacho_meditation.png',
        type: 'graphic'
      },
      {
        name: 'Heart',
        data_name: 'Heart',
        url: assortedUrl + '/8bitheart.png' ,
        type: 'graphic'
      },
      {
        name: 'Palm',
        data_name: 'Palm',
        url: assortedUrl + '/palm.png' ,
        type: 'graphic'
      },
      {
        name: 'TallPalm',
        data_name: 'TallPalm',
        url: assortedUrl + '/palm2.png' ,
        type: 'graphic'
      },
      {
        name: 'Sword',
        data_name: 'Sword',
        url: assortedUrl + '/diamond_sword.png' ,
        type: 'graphic'
      },
      {
        name: 'AngryBride',
        data_name: 'AngryBride',
        url: assortedUrl + '/angry_bride.png' ,
        type: 'graphic'
      },
      {
        name: 'Piano',
        data_name: 'Piano',
        url: assortedUrl + '/pianoletsduet.png' ,
        type: 'graphic'
      },
      {
        name: 'TallTree',
        data_name: 'TallTree',
        url: assortedUrl + '/tall_tree.png' ,
        type: 'graphic'
      },
      {
        name: 'Bonded',
        data_name: 'Bonded',
        url: assortedUrl + '/bond.png' ,
        type: 'graphic'
      },
      {
        name: 'ZebraLips',
        data_name: 'ZebraLips',
        url: assortedUrl + '/neon_zebra_lips.png' ,
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