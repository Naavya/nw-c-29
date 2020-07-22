const Bodies= Matter.Bodies
const World=Matter.World
const Engine=Matter.Engine
const Constraint=Matter.Constraint

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine=Engine.create()
  world=engine.world
  ground1 = new Ground(400,390,800,20)
  polygon = Bodies.circle(50,200,60)
  World.add(world,polygon)
  slingshot1 = new Slingshot(this.polygon,{x:100,y:200})
  box1 = new Box(400,370,30,40)
  box1.shapeColor="pink"
  box2 = new Box(430,370,30,40)
  box2.shapeColor="pink"
  box3 = new Box(460,370,30,40)
  box3.shapeColor="pink"
  box4 = new Box(490,370,30,40)
  box4.shapeColor="pink"
  box5 = new Box(520,370,30,40)
  box5.shapeColor="pink"
  box6 = new Box(415,320,30,40)
  box7 = new Box(445,320,30,40)
  box8 = new Box(475,320,30,40)
  box9 = new Box(505,320,30,40)
  box10 = new Box(430,280,30,40)
  box11 = new Box(460,280,30,40)
  box12 = new Box(490,280,30,40)
  box13 = new Box(445,240,30,40)
  box14 = new Box(475,240,30,40)
  box15 = new Box(460,200,30,40)

}

function draw() {
  Engine.update(engine)
  background(255); 
  box1.display() 
  box2.display() 
  box3.display()
  box4.display() 
  box5.display() 
  box6.display() 
  box7.display() 
  box8.display() 
  box9.display() 
  box10.display() 
  box11.display() 
  box12.display() 
  box13.display() 
  box14.display() 
  box15.display() 
  ground1.display()
  slingshot1.display()
  polygon.display()
  polygon.elipse()
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
   
}


function mouseReleased(){
  polygon.fly();
  
}
