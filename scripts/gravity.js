export default class Gravity {
    constructor(g, dt, objects) {
      this.g = g;
      this.dt = dt;
      this.objects = objects;
    }
  
    position() { // Change of position
      const objectLength = this.objects.length;
      for (let i = 0; i < objectLength; i++) {
        const objectI = this.objects[i];
        if (this.objects[i].fixed == false) {
           objectI.sx += objectI.ax * this.dt;
           objectI.sy += objectI.ay * this.dt;
           objectI.x += objectI.sx * this.dt;
           objectI.y += objectI.sy * this.dt;
          } 
        }
        return this;
    }

    acceleration() { // Change of speed
      const objectLength = this.objects.length;
      for (let i = 0; i < objectLength; i++) {
        let ax = 0;
        let ay = 0;
        const objectI = this.objects[i];
        for (let j = 0; j < objectLength; j++) {
          if (i !== j) {
            const objectJ = this.objects[j];
            const dx = objectJ.x - objectI.x;
            const dy = objectJ.y - objectI.y;
            const range = Math.pow(dx,2) + Math.pow(dy,2);
            const f = (this.g * objectJ.m) / (range * Math.sqrt(range)); 
            ax = ax + dx * f;
            ay = ay + dy * f;
            
          }
        }
        objectI.ax = ax;
        objectI.ay = ay;
      }
      return this;
    }   
}
  