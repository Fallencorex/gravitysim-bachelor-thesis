export default class Settings {
  constructor() {
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
    this.imageInterfacePath = [ 'resources/images/background.jpg' , 'resources/images/course.png']; // array containing paths to intergace images

    this.imagePlanetsPath = { // aobject containing paths to planet images
      none: ['', 'None'],
      asteroid: ['resources/images/asteroid.png', 'Asteroid'],
      jupiter: ['resources/images/jupiter.png', 'Jupiter'],
      earth: ['resources/images/earth.png', 'Earth'],
      mars: ['resources/images/mars.png', 'Mars'],
      mercury: ['resources/images/mercury.png', 'Mercury'],
      neptune: ['resources/images/neptune.png', 'Neptune'],
      saturn: ['resources/images/saturn.png', 'Saturn'],
      uranus: ['resources/images/uranus.png', 'Uranus'],
      venus: ['resources/images/venus.png', 'Venus'],
      sun: ['resources/images/sun.png', 'Sun'],
      redGiant: ['resources/images/red_giant.png', 'Red giant'],
      blueSquenceStar: ['resources/images/blue_squence_star.png', 'Blue Squence Star'],
      blackhole: ['resources/images/black_hole.png', 'Black hole'],
    }

    this.scenesNone = [{
      name: this.imagePlanetsPath.none[1], // name of object
      imageClass: this.imagePlanetsPath.none[0], // way to image
      fixed: true, // object mobility (yes/no)
      m: 0, // mass
      x: 0, // position on the x-axis
      y: 0, // position on the y-axis
      sx: 0, // speed on x-axis 
      sy: 0, // speed on y-axis
    }];

    this.scenes1NewtonLaw = [{
      name: this.imagePlanetsPath.asteroid[1],
      imageClass: this.imagePlanetsPath.asteroid[0],
      fixed: false,
      m: 0.00001,
      x: -8,
      y: -0.25,
      sx: 4,
      sy: 0,
    }];

    this.scenesTwoObjects = [{
      name: this.imagePlanetsPath.blueSquenceStar[1],
      imageClass: this.imagePlanetsPath.blueSquenceStar[0],
      fixed: false,
      m: 2,
      x: -1,
      y: 0,
      sx: 0,
      sy: -4,
    },
    {
      name: this.imagePlanetsPath.redGiant[1],
      imageClass: this.imagePlanetsPath.redGiant[0],
      fixed: false,
      m: 2,
      x: 1,
      y: 0,
      sx: 0,
      sy: 4,
    }];

    this.scenesNBodyProblem = [{
      name: this.imagePlanetsPath.jupiter[1],
      imageClass: this.imagePlanetsPath.jupiter[0],
      fixed: false,
      m: 4,
      x: 0,
      y: -3,
      sx: 0,
      sy: 0.25,
    },
    {
      name: this.imagePlanetsPath.mars[1],
      imageClass: this.imagePlanetsPath.mars[0],
      fixed: false,
      m: 10,
      x: -3,
      y: 3,
      sx: 1,
      sy: -0.50,
    },
    {
      name: this.imagePlanetsPath.neptune[1],
      imageClass: this.imagePlanetsPath.neptune[0],
      fixed: false,
      m: 1,
      x: 3,
      y: 3,
      sx: -1,
      sy: -2,
    }];

    this.scenesSolarSystem = [{
      name: this.imagePlanetsPath.sun[1],
      imageClass: this.imagePlanetsPath.sun[0],
      fixed: true,
      m: 1,
      x: 0,
      y: 0,
      sx: 0,
      sy: 0,
    },
    {
      name: this.imagePlanetsPath.mercury[1],
      imageClass: this.imagePlanetsPath.mercury[0],
      fixed: false,
      m: 0.0025,
      x: 0,
      y: 1,
      sx: 6,
      sy: 0,
    },
    {
      name: this.imagePlanetsPath.venus[1],
      imageClass: this.imagePlanetsPath.venus[0],
      fixed: false,
      m: 0.00025,
      x: 0,
      y: 1.6,
      sx: 5,
      sy: 0,
    },
    {
      name: this.imagePlanetsPath.earth[1],
      imageClass: this.imagePlanetsPath.earth[0],
      fixed: false,
      m: 0.00025,
      x: 0,
      y: 2,
      sx: 4.8,
      sy: 0,
    },
    {
      name: this.imagePlanetsPath.mars[1],
      imageClass: this.imagePlanetsPath.mars[0],
      fixed: false,
      m: 0.00025,
      x: 0,
      y: 2.35,
      sx: 4.50,
      sy: 0,
    },
    {
      name: this.imagePlanetsPath.jupiter[1],
      imageClass: this.imagePlanetsPath.jupiter[0],
      fixed: false,
      m: 0.00025,
      x: 0,
      y: 2.60,
      sx: 4.2,
      sy: 0,
    },
    {
      name: this.imagePlanetsPath.saturn[1],
      imageClass: this.imagePlanetsPath.saturn[0],
      fixed: false,
      m: 0.00025,
      x: 0,
      y: 3.05,
      sx: 3.95,
      sy: 0,
    },
    {
      name: this.imagePlanetsPath.uranus[1],
      imageClass: this.imagePlanetsPath.uranus[0],
      fixed: false,
      m: 0.00025,
      x: 0,
      y: 3.40,
      sx: 3.70,
      sy: 0,
    },
    {
      name: this.imagePlanetsPath.neptune[1],
      imageClass: this.imagePlanetsPath.neptune[0],
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