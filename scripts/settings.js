export default class Settings {
    constructor () {
        this.g = 50; // gravity constant
        this.dt = 0.0050; // time, simulation step
        this.scale = 100; // stage size
        this.chainlet = 300; // orbit display length
        this.mousePX = 0; // Mouse position when clicking on the x-axis
        this.mousePY = 0; // Mouse position when clicking on the y-axis
        this.mouseX = 0; // The current position of the mouse on the x-axis
        this.mouseY = 0; // The current position of the mouse on the y-axis
        this.dragging = false; // dragging mouse
        this.fixed = false; // fixing an object on creation
        this.paths = true; // orbit line display on/off
        // get html properties
        this.objectElement = document.querySelector("#objects"); 
        this.scenesElement = document.querySelector("#scenes");
        this.fixedElement = document.querySelector("#fixed");
        this.timeRangeElement = document.querySelector("#time");
        this.gravityRangeElement = document.querySelector("#gravity");
        this.outTimeElement = document.querySelector(".out_time");
        this.outGravityElement = document.querySelector(".out_gravity");
        this.pathsElement = document.querySelector("#paths");
        this.collisionElement = document.querySelector("#collision");
        this.scaleElement = document.querySelector(".panelScale");
        this.clearUniverseElement = document.querySelector("#clear_universe");
        this.canvasElement = document.querySelector("#simulatedSpace");
        this.imagePaths  = [ // array containing paths to planet images
         'resources/images/01_asteroid.png',  // 0
         'resources/images/02_planet_01.png', // 1
         'resources/images/02_planet_02.png', // 2
         'resources/images/02_planet_03.png', // 3
         'resources/images/02_planet_04.png', // 4
         'resources/images/02_planet_05.png', // 5
         'resources/images/02_planet_06.png', // 6
         'resources/images/02_planet_07.png', // 7
         'resources/images/02_planet_08.png', // 8
         'resources/images/03_star_01.png',   // 9
         'resources/images/03_star_02.png',   // 10
         'resources/images/03_star_03.png',   // 11
         'resources/images/04_black_hole.png',// 12
         'resources/images/background.jpg',   // 13
         'resources/images/course.png'];      // 14

        this.scenesNone = [{
            name: 'None', // name of object
            imageClass: '', // way to image
            fixed: true, // object mobility (yes/no)
            m: 0, // mass
            x: 0, // position on the x-axis
            y: 0, // position on the y-axis
            sx: 0, // speed on x-axis 
            sy: 0, // speed on y-axis
        }];

        this.scenes1NewtonLaw = [{
            name: 'Asteroid',
            imageClass: this.imagePaths[0],
            fixed: false,
            m: 0.00001,
            x: -8,
            y: -0.25,
            sx: 4,
            sy: 0,
        }];

        this.scenesTwoObjects = [{
            name: 'Blue squence star',
            imageClass: this.imagePaths[10],
            fixed: false,
            m: 2, 
            x: -1,
            y: 0,
            sx: 0,
            sy: -4,
          },
          {
            name: 'Read Giant',
            imageClass: this.imagePaths[11],
            fixed: false,
            m: 2,
            x: 1,
            y: 0,
            sx: 0,
            sy: 4,
        }];

        this.scenesNBodyProblem = [{
            name: 'Jupiter',
            imageClass: this.imagePaths[1],
            fixed: false,
            m: 4, 
            x: 0,
            y: -3,
            sx: 0,
            sy: 0.25,
          },
          {
            name: 'Mars',
            imageClass: this.imagePaths[5],
            fixed: false,
            m: 10, 
            x: -3,
            y: 3,
            sx: 1,
            sy: -0.50,
          },
          {
            name: 'Neptune',
            imageClass: this.imagePaths[6],
            fixed: false,
            m: 1, 
            x: 3,
            y: 3,
            sx: -1,
            sy: -2,
        }];

        this.scenesSolarSystem = [{
            name: 'Sun',
            imageClass: this.imagePaths[9],
            fixed: true,
            m: 1,
            x: 0,
            y: 0,
            sx: 0,
            sy: 0,
          },
          {
            name: 'Mercury',
            imageClass: this.imagePaths[1],
            fixed: false,
            m: 0.0025,
            x: 0,
            y: 1,
            sx: 6,
            sy: 0,
          },
          {
            name: 'Venus',
            imageClass: this.imagePaths[2],
            fixed: false,
            m: 0.00025,
            x: 0,
            y: 1.6,
            sx: 5,
            sy: 0,
          },
          {
            name: 'Earth',
            imageClass: this.imagePaths[3],
            fixed: false,
            m: 0.00025,
            x: 0,
            y: 2,
            sx: 4.8,
            sy: 0,
          },
          {
            name: 'Mars',
            imageClass: this.imagePaths[4],
            fixed: false,
            m: 0.00025,
            x: 0,
            y: 2.35,
            sx: 4.50,
            sy: 0,
          },
          {
            name: 'Jupiter',
            imageClass: this.imagePaths[5],
            fixed: false,
            m: 0.00025,
            x: 0,
            y: 2.60,
            sx: 4.2,
            sy: 0,
          },
          {
            name: 'Saturn',
            imageClass: this.imagePaths[6],
            fixed: false,
            m: 0.00025,
            x: 0,
            y: 3.05,
            sx: 3.95,
            sy: 0,
          },
          {
            name: 'Uranus',
            imageClass: this.imagePaths[7],
            fixed: false,
            m: 0.00025,
            x: 0,
            y: 3.40,
            sx: 3.70,
            sy: 0,
          },
          {
            name: 'Neptune',
            imageClass: this.imagePaths[8],
            fixed: false,
            m: 0.00025,
            x: 0,
            y: 3.75,
            sx: 3.5,
            sy: 0,
          },
        ];

    }
}