var block1,Block2; 
var gameState="start";
function preload() {
	var blockG
}
 function setup(){
	createCanvas(500,500) 
	block1=createSprite(450,250,10,10)
	block1.shapeColor =rgb(22, 252, 162)
	blockG=new Group()
 }
 
function draw() {

	background("lightblue")
block1.x=mouseX;
block1.y=mouseY;
 if(keyDown("space")){
	gameState="play"
 }
 if(gameState==="play"){
	 if(frameCount%60===0){

	 
	 var R1=random(10,450)
	 var R2=random(10,450)
	Block2=createSprite(R1,R2,20,20)
	Block2.shapeColor = rgb(random(0,255),random(0,255),random(0,255))
	blockG.add(Block2)
//background(255,0,0)
 }
 if(blockG.isTouching(block1)){
	 blockG.destroyEach()
 }
 }	
 drawSprites()

}


