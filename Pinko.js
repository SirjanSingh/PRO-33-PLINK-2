
class Pinko{
  constructor(x, y,radius) {
var options={
              'restitution':0.6,
              'friction':1.0 ,
              'density':1.0,
              isStatic:true
          }
          this.body = Bodies.circle(x, y, radius/2, options);
          this.radius=radius;
    this.color= color(255);

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


