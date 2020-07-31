
class Particle {
    constructor(x, y,radius) {
var options={
                'restitution':0.6,
                'friction':1.0 ,
                'density':100.0,
                isStatic:false
            }
      this.body = Bodies.circle(x, y, radius/1.9, options);
      this.radius=radius;
      this.color= color(random(80,255),random(80,255),random(80,255));

      World.add(world, this.body);
    }
    display(){
     var pos= this.body.position;
   /*  pos.x=mouseX
     pos.y=mouseY  */
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      fill (this.color);
      ellipseMode(CENTER);
      ellipse( 0, 0,this.radius);
      pop();
    }
  }
  
  
