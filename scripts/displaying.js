export default class Displaying {
    constructor(canvasContext, chainlet) {
      this.context = canvasContext;
      this.chainlet = chainlet;
      this.positioning = [];
      this.line = 0.25;
    }
    
    savePositioning(x, y) { // check orbit length
      this.positioning.push({x,y});
      if (this.positioning.length > this.chainlet) {
        this.positioning.shift();
      }
    }
    
    scales() { // a method for resetting the drawing of orbits in case the scale of the environment has been changed.
      this.positioning = [];
    }
    
    paths(x, y, movable) { // drawing orbits
      this.savePositioning(x, y);
      const positioningLenght = this.positioning.length;
      for (let i = 0; i < positioningLenght; i++) {
        if (movable == false) { // do not draw an orbit for an object that is stationary
          this.context.beginPath();
          this.context.arc(this.positioning[i].x, this.positioning[i].y, this.line, 0, 2 * Math.PI);
          this.context.fillStyle = `rgb(255, 255, 255)`;
          this.context.fill();
        }
      }
    }

    planets (x,y, imageClass, scale) { // drawing asteroids, planets, stars.
        this.img = new Image ();
        this.img.src = imageClass;
        this.savePositioning(x, y);
        const positioningLenght = this.positioning.length;
        for (let i = 0; i < positioningLenght; i++) {  
          if (i == positioningLenght - 1) {  
            this.context.beginPath();
            this.context.drawImage(this.img,this.positioning[i].x-scale/2, this.positioning[i].y-scale/2, scale, scale);
          }
      }
    }

    information (imageClass, width, height) { // out information on last create object
        this.context.font = "14px Gill Sans, sans-serif";
        this.context.fillText("speed y : " + Math.ceil((imageClass.sy)*1000)/1000, width-200, height-15);
        this.context.fillText("speed x : " + Math.ceil((imageClass.sx)*1000)/1000, width-350, height-15);
        this.context.fillText("position y : " + Math.ceil((imageClass.y)*1000)/1000, width-500, height-15);
        this.context.fillText("position x : " + Math.ceil((imageClass.x)*1000)/1000, width-650, height-15);
        this.context.fillText("fixed : " + imageClass.fixed, width-750, height-15);
        this.context.fillText("name : " + imageClass.name, width-925, height-15);
        this.context.fill();
    }     
} 

    