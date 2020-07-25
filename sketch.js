const Engine= Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Render = Matter.Render;
const Bodies= Matter.Bodies;

var ground1,ground2,ground3,ground4;
var b1,b2,b3,b4,b5,b6,b7,b8;
var particle = [];
var plinkos = [];
var divisions = []; 
var i=-1,s=1;
var divisionHeight=470
var a=1;
var r=0;
var q=0;
var e=1;
function setup() {

  engine = Engine.create();
  world = engine.world;
  
  createCanvas(500,800);


  ground1= new Ground(250,800,500,10);
  ground2= new Ground(250,0,500,10);
  ground3= new Ground(0,400,10,800);
  ground4= new Ground(500,400,10,800);
/*
  b1 = new Box(10,620,10,330);
  b2 = new Box(90,620,10,330);
  b3 = new Box(170,620,10,330);
  b4 = new Box(250,620,10,330);
  b5 = new Box(330,620,10,330);
  b6 = new Box(410,620,10,330);
  b7 = new Box(490,620,10,330);
  b8 = new Box(250,790,490,10)
*/
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

if (a<=3){

for (var t=10;t<500;t=t+80){
  divisions.push(new Box(t , 680,10,280));

  console.log(t);
a=a+2
}
}

for( var k = 0;k<divisions.length;k++){
  divisions[k].display();
}

q=random(250,260)

if(frameCount%15===0&&e<250){

  particle.push(new Particle(q ,30,12));

e++;
}
for( var j = 0;j<particle.length;j++){
  particle[j].display();
}


if (r<10) {
  
for( var j = 15;j<=width;j=j+40){
  plinkos.push(new Pinko(j ,100,15));
}



for( var j = 30;j<=width;j=j+50){
  plinkos.push(new Pinko(j ,180,15));
}



for( var j = 15;j<=width;j=j+40){
  plinkos.push(new Pinko(j ,260,15));
}



for( var j = 30;j<=width;j=j+50){
  plinkos.push(new Pinko(j ,340,15));
}



for( var j = 15;j<=width;j=j+40){
  plinkos.push(new Pinko(j ,420,15));
}


r=r+2;
}

for( var j = 0;j<plinkos.length;j++){
  plinkos[j].display();
}

/*  
for( var k = 0;k<=8;k+1){
  divisions[k].display();
}*/
 s=s+1;
console.log(s);
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
  b7.display();
  b8.display();*/
}