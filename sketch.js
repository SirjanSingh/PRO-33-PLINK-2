const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Render = Matter.Render;
const Bodies = Matter.Bodies;

var ground1, ground2, ground3, ground4;
var b1, b2, b3, b4, b5, b6, b7, b8;
var particle
var plinkos = [];
var divisions = [];
var i = -1, s = 1;
var divisionHeight = 470
var a = 1;
var r = 0;
var q = 0;
var turn = 0;
var score = 0;
var gameState = "start";
var count = 0;
var r1, r2, r3;
let particles = [];

function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(500, 800);

  r1 = 50 * Math.round(random(1, 3));
  r2 = 50 * Math.round(random(4, 6));
  r3 = 50 * Math.round(random(6, 10));


  ground1 = new Ground(250, 800, 500, 10);
  ground2 = new Ground(250, 0, 500, 10);
  ground3 = new Ground(0, 400, 10, 800);
  ground4 = new Ground(500, 400, 10, 800);
  /*
    b1 = new Box(10,620,10,330);
    b2 = new Box(90,620,10,330);
    b3 = new Box(170,620,10,330);
    b4 = new Box(250,620,10,330);
    b5 = new Box(330,620,10,330);
    b6 = new Box(410,620,10,330);
    b7 = new Box(490,620,10,330);
    */
  b8 = new Box(250, 790, 490, 10)

  //var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } });
  //Render.run(render);
  Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  background(0);
  /*  if (s===1){
    for( var k = 10;k<=width;k+80){
      divisions.push(new Box(k , height-470,10,470));
      s=s+1;
    }
    }
  for( var k = 10;k<=width;k+80){
    divisions[k].display();
  }*/

  /*for( var k = 10;k<=480;k+80){
    var boxi=new Box(k , 620,10,470)
    divisions.push([boxi]);
  }*/
  /*for( var k = 7;k<=8;k+1){
   
  }*/


  if (a <= 3) {

    for (var t = 10; t < 500; t = t + 80) {
      divisions.push(new Box(t, 680, 10, 280));

      console.log(t);
      a = a + 2
    }
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  if (r < 10) {

    for (var j = 15; j <= width; j = j + 40) {
      plinkos.push(new Pinko(j, 100, 15));
    }



    for (var j = 30; j <= width; j = j + 40) {
      plinkos.push(new Pinko(j, 180, 15));
    }



    for (var j = 15; j <= width; j = j + 40) {
      plinkos.push(new Pinko(j, 260, 15));
    }



    for (var j = 30; j <= width; j = j + 40) {
      plinkos.push(new Pinko(j, 340, 15));
    }



    for (var j = 15; j <= width; j = j + 40) {
      plinkos.push(new Pinko(j, 420, 15));
    }


    r = r + 2;
  }

  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }

  push();
  stroke(255, 255, 60);
  strokeWeight(6)
  line(0, 530, 500, 530)

  /*
  line(0,580,85,580)
  line(417,580,500,580)
   line(85,600,167,600)
  line(333,600,417,600)
  line(167,620,333,620)
  */
  pop()
  /*  
  for( var k = 0;k<=8;k+1){
    divisions[k].display();
  }*/
  s = s + 1;

  console.log(gameState)
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();

  /*b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();*/
  b8.display();
  turn = 5 - count
  textSize(17)
  text("YOUR SCORE IS " + score, 50, 50);
  text("TURNS LEFT " + turn, 300, 50);

  push();
  textSize(30)
  stroke
  text(r3, 25, 570);
  text(r2, 105, 570);
  text(r1, 185, 570);
  text(r1, 265, 570);
  text(r2, 345, 570);
  text(r3, 425, 570);
  pop();

  for (let i = 0; i < particles.length; i++) {
    particles[i].display();
  }
  //console.log(count)
  if (particle != null) {
    particle.display();

    if (particle.body.position.y > 540) {
      console.log(particle.body.position.x)
      if (particle.body.position.x < 85 || particle.body.position.x > 417) {
        score = score + r3;

        console.log(r3)



      }

      else if ((particle.body.position.x > 85 && particle.body.position.x < 167) || (particle.body.position.x > 333 && particle.body.position.x < 417)) {
        score = score + r2;
        console.log(r2)


      }

      else {
        score = score + r1;
        console.log(r1)





      }

      particle = null;
      count++;
      if (count > 4) { gameState = "end"; }
    }
  }


  if (gameState == "end") {
    push();
    textSize(50);
    stroke(255)
    text("GAME OVER", 100, 320);
    pop();
  }

}




function mouseReleased() {

  console.log(turn);
  if (count < 6) {
    if (gameState !== "end") {
      particle = new Particle(mouseX, 30, 12);
      particles.push(particle);
      //turn--;
    }
  }



}