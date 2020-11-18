const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var ground, stand1, stand2
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15,
box16, box17, box18, box19, box20, box21, box22, box23

var box1, boxII, boxIII, boxIV, boxV, boxVI, boxVII, boxVIII, boxIX, boxX, boxXI, boxXII, boxXIII, boxXIV, boxXV
var polygon
var score = 0



function preload() {
  backImg = loadImage("bg.png")
}

function setup() {
  createCanvas(1350,700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,695,width,10 )
  stand1 = new Ground(600,640, 400, 10 )
  stand2 = new Ground(1050, 400, 300, 10)
  //Ist stand
  box1 = new Box(445, 628, 50, 50)
  box2 = new Box(496, 628, 50, 50)
  box3 = new Box(548, 628, 50, 50)
  box4 = new Box(600, 628, 50, 50)
  box5 = new Box(652, 628, 50, 50)
  box6 = new Box(704, 628, 50, 50)
  box7 = new Box(756, 628, 50, 50)
  box8 = new Box(471, 546, 50, 50)
  box9 = new Box(523, 546, 50, 50)
  box10 = new Box(575, 546, 50, 50)
  box11 = new Box(627, 546, 50, 50)
  box12 = new Box(679, 546, 50, 50)
  box13 = new Box(731, 546, 50, 50)
  box14 = new Box(505, 494, 50, 50)
  box15 = new Box(557, 494, 50, 50)
  box16 = new Box(609, 494, 50, 50)
  box17 = new Box(661, 494, 50, 50)
  box18 = new Box(713, 494, 50, 50)
  box19 = new Box(553, 442, 50, 50)
  box20 = new Box(605, 442, 50, 50)
  box21 = new Box(657, 442, 50, 50)
  box22 = new Box(579, 390, 50, 50)
  box23 = new Box(631, 390, 50, 50)
  box24 = new Box(601, 338, 50, 50)

  boxI = new Box(950, 360, 50, 50)
  boxII = new Box(1002, 360, 50, 50)
  boxIII =new Box(1054, 360, 50, 50)
  boxIV = new Box(1106, 360, 50, 50)
  boxV = new Box(1158, 360, 50, 50)
  boxVI = new Box(972, 310, 50, 50)
  boxVII = new Box(1024, 310, 50, 50)
  boxVIII = new Box(1076, 310, 50, 50)
  boxIX = new Box(1128, 310, 50, 50)
  boxX = new Box(1000, 260, 50, 50)
  boxXI = new Box(1052, 260, 50, 50)
  boxXII = new Box(1104, 260, 50, 50)
  boxXIII = new Box(1026, 210, 50, 50)
  boxXIV = new Box(1078, 210, 50, 50)
  boxXV = new Box(1047,160, 50,50)

  polygon = new Holder()
  sling = new SlingShot(polygon.bodies, {x:180, y:200})

}

function draw() {
  background(backImg);  
  Engine.update(engine);
  ground.display()
  stand1.display()
  stand2.display()
  box1.display(50, 170, 150)
  box2.display(50, 170, 150)
  box3.display(50, 170, 150)
  box4.display(50, 170, 150)
  box5.display(50, 170, 150)
  box6.display(50, 170, 150)
  box7.display(50, 170, 150)
  box8.display(50, 100, 200)
  box9.display(50, 100, 200)
  box10.display(50, 100, 200)
  box11.display(50, 100, 200)
  box12.display(50, 100, 200)
  box13.display(50, 100, 200)
  box14.display(100, 60, 180)
  box15.display(100, 60, 180)
  box16.display(100, 60, 180)
  box17.display(100, 60, 180)
  box18.display(100, 60, 180)
  box19.display(190, 55, 155)
  box20.display(190, 55, 155)
  box21.display(190, 55, 155)
  box22.display(210, 180, 100)
  box23.display(210, 180, 100)
  box24.display(255, 255, 180)

  boxI.display(255, 255, 180)
  boxII.display(255, 255, 180)
  boxIII.display(255, 255, 180)
  boxIV.display(255, 255, 180)
  boxV.display(255, 255, 180)
  boxVI.display(255, 185, 200)
  boxVII.display(255, 185, 200)
  boxVIII.display(255, 185, 200)
  boxIX.display(255, 185, 200)
  boxX.display(255, 120, 240)
  boxXI.display(255, 120, 240)
  boxXII.display(255, 120, 240)
  boxXIII.display(190, 55, 155)
  boxXIV.display(190, 55, 155)
  boxXV.display(150, 230, 255)

  box1.score()
  box2.score()
  box3.score()
  box4.score()
  box5.score()
  box6.score()
  box7.score()
  box8.score()
  box9.score()
  box10.score()
  box11.score()
  box12.score()
  box13.score()
  box14.score()
  box15.score()
  box16.score()
  box17.score()
  box18.score()
  box19.score()
  box20.score()
  box21.score()
  box22.score()
  box23.score()
  box24.score()

  boxI.score()
  boxII.score()
  boxIII.score()
  boxIV.score()
  boxV.score()
  boxVI.score()
  boxVII.score()
  boxVIII.score()
  boxIX.score()
  boxX.score()
  boxXI.score()
  boxXII.score()
  boxXIII.score()
  boxXIV.score()
  boxV.score()

  polygon.display()
  sling.display()
  drawSprites();
  strokeWeight(1)
  fill("green")
  textSize(30)
  text("DRAG & HIT THE BLOCKS | PRESS SPACE TO BRING THE STRIKER BACK", 100, 50) 
  text("SCORE: "+score, 100, 100)
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.bodies, {x: mouseX, y: mouseY})
}
function mouseReleased(){
  sling.fly()
}
function keyPressed(){
	if(keyCode === 32){
		launcher = {x:90, y:550}
		Matter.Body.setPosition(polygon.bodies, {x:90, y:550})
		sling.attach(polygon.bodies)

	}
}
