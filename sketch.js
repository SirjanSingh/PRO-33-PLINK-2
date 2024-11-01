const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Render = Matter.Render;
const Bodies = Matter.Bodies;

var ground1, ground2, ground3, ground4;
var b1, b2, b3, b4, b5, b6, b7, b8;
var particle;
let part;
var plinkos = [];
var divisions = [];
var i = -1, s = 1;
var divisionHeight = 470;
var a = 1;
var r = 0;
var q = 0;
var turn = 0;
var score = 0;
var gameState = "start";
var count = 0;
var r1, r2, r3;
let particles = [];
let particleCount = -1;
let checkie = 0;

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

  b8 = new Box(250, 790, 490, 10);

  Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  background(0);

  if (a <= 3) {
    for (var t = 10; t < 500; t = t + 80) {
      divisions.push(new Box(t, 680, 10, 280));
      a = a + 2;
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
  strokeWeight(6);
  line(0, 530, 500, 530);
  pop();

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  b8.display();

  turn = 5 - count;
  textSize(17);
  text("YOUR SCORE IS " + score, 50, 50);
  text("TURNS LEFT " + turn, 300, 50);

  push();
  textSize(30);
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
  console.log(particleCount + " " + count + " " + particles.length + " " + score )
  if (particles.length > 0 && particleCount == checkie) {
    particles[particleCount].display();

    console.log(particles[particleCount].scored + " " +particles[particleCount].body.position.y + " " +particles[particleCount].body.position.x )
   
    if (particles[particleCount].body.position.y > 540 && !particles[particleCount].scored) {

      if (particles[particleCount].body.position.x < 85 || particles[particleCount].body.position.x > 417) {
        particles[particleCount].scored = true;
        score += r3;
      }

      else if ((particles[particleCount].body.position.x > 85 && particles[particleCount].body.position.x < 167) || (particles[particleCount].body.position.x > 333 && particles[particleCount].body.position.x < 417)) {
        particles[particleCount].scored = true;
        score += r2;
      }

      else {
        particles[particleCount].scored = true;
        score += r1;
      }
      checkie++;

    }
  }
  if (particles.length > 4) {
    gameState = "end";
  }

  if (gameState == "end") {
    push();
    textSize(50);
    stroke(255);
    text("GAME OVER", 100, 320);
    pop();
  }
}

function mouseReleased() {
  if (count < 5 && gameState !== "end") {
    particles.push(new Particle(mouseX, 30, 12));
    particleCount++;
    count++;
  }
}
