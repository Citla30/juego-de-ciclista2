var fondo,fondoimg;
var player1,player2,player3;
var mainCyclist,mainRacerImg1,mainRacerImg2,mainRacerImg3;
var pinkCG,oppPink1Img,oppPink2Img;
var yellowCG,oppYellow1Img,oppYellow2Img;
var redCG,oppRed1Img,oppRed2Img;
var gameOver,gameOverImg, restart;
var coins,coinsimg,coinsgroup,coin,coinimg;
var meta,metagroup,metaimg;
var confeti,confetiimg,confetigroup;
var invisiblesu,invisible2;

var END =0;
var PLAY =1;
var Play2=2;
var Play3=3;
var Play4=4;
var gameState = PLAY;
var gameStaet=Play2;

var canasta,canastaimg;
var rabbit,rabbitimg;
var coco,cocoimg;
var cerillos,cerillosimg;
var hermanos,hermanosimg;
var panda,pandaimg;
var manchas,manchasimg;
var meta,metaimg,meta2,meta2,meta3,meta3img;
var niñoimg;
var confeti,confetiimg;
var obstacles,ob1,ob2,obstaclesGroup;
var ob3,ob3group,ob3img;
var policia,policiaimg;

var cycleBell;

var distance=0;
var score=0;

function preload(){
  
  fondoimg=loadImage("fondo.jpg");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
  
  oppPink1Img = loadAnimation("images/opponent1.png","images/opponent2.png");
  oppPink2Img = loadAnimation("images/opponent3.png");
  
  oppYellow1Img = loadAnimation("images/opponent4.png","images/opponent5.png");
  oppYellow2Img = loadAnimation("images/opponent6.png");
  
  oppRed1Img = loadAnimation("images/opponent7.png","images/opponent8.png");
  oppRed2Img = loadAnimation("images/opponent9.png");

  gameOverImg = loadImage("images/gameOver.png");
  coinsimg=loadImage("moneda.png");
  canastaimg=loadImage("jarron.png");
  coinimg=loadImage("moneda.png");
  cerillosimg=loadImage("cerillos.png");
  rabbitimg=loadImage("conejo.jpg");
  cocoimg=loadImage("coco.png");
  pandaimg=loadImage("panda.jpg");
  manchasimg=loadImage("manchan.jpg");
  metaimg=loadImage("premio.png");
  meta2img=loadImage("premio2.png");
  meta3img=loadImage("premio3.png");
  niñoimg=loadImage("images/mainPlayer1.png");
  hermanosimg=loadImage("piojos.png");
  confetiimg=loadImage("confetti2.gif");
  ob1=loadImage("images/obstacle1.png");
  ob2=loadImage("images/obstacle3.png")
  ob3img=loadImage("images/obstacle2.png");
  policiaimg=loadImage("Imagen4.png");
  
  cycleBell = loadSound("sound/bell.mp3");
}

function setup(){
  
createCanvas(400,450);
  
  fondo=createSprite(0,190);
  fondo.scale=1.5;
  fondo.addImage(fondoimg);
  fondo.velocityX=-5;
  fondo.scale=1.8;

  mainCyclist  = createSprite(90,350);
  mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
  mainCyclist.scale=0.06;
  mainCyclist.debug=false;
  mainCyclist.setCollider("circle",0,0,400);
  
  gameOver = createSprite(200,180);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 0.8;
  gameOver.visible = false;  
  
  canasta=createSprite(200,330,10,10);
  canasta.addImage(canastaimg);
  canasta.scale=0.2;
  
  
  invisiblesu=createSprite(200,300,400,10);
  invisiblesu.debug=true;
  invisiblesu.setCollider("rectangle",0,-150,400,300);
  invisiblesu.visible=false;
  
  invisible2=createSprite(200,430,400,10);
  invisible2.visible=false;
  
  coin=createSprite(40,20);
  coin.addImage(coinimg);
  coin.scale=0.07;
  
  meta=createSprite(200,-50);
  meta.addImage(metaimg);
  meta.scale=0.2;
  meta.visible=false;
  meta.debug=false;
  
  meta2=createSprite(200,-50);
  meta2.addImage(meta2img);
  meta2.scale=0.2;
  meta2.visible=false;
  
  meta3=createSprite(200,-50);
  meta3.addImage(meta3img);
  meta3.scale=0.2;
  meta3.visible=false;
  
  panda=createSprite(130,250);
  panda.addImage(pandaimg);
  panda.visible=false;
  panda.scale=0.2;
  
  manchas=createSprite(230,250);
  manchas.addImage(manchasimg);
  manchas.visible=false;
  manchas.scale=0.045;
  
  rabbit=createSprite(130,250);
  rabbit.addImage(rabbitimg);
  rabbit.visible=false;
  rabbit.scale=0.09;
  
  coco=createSprite(230,250);
  coco.addImage(cocoimg);
  coco.visible=false;
  coco.scale=0.3;
  
  confeti=createSprite(200,10);
  confeti.addImage(confetiimg);
  confeti.visible=false;
  confeti.lifetime=400;

  cerillos=createSprite(200,300);
  cerillos.addImage(cerillosimg);
  cerillos.visible=false;
  cerillos.scale=0.3;
  
  hermanos=createSprite(340,280);
  hermanos.addImage(hermanosimg);
  hermanos.visible=false;
  hermanos.scale=0.08;
  
  policia=createSprite(150,350);
  policia.addImage(policiaimg);
  policia.scale=0.1;
  policia.visible=false;
  
 
  pinkCG = new Group();
  yellowCG = new Group();
  redCG = new Group();
  coinsgroup=new Group();
  obstaclesGroup=new Group();
  ob3group=new Group();
  
  score=0;  
}

function draw() {
  background(0);

  drawSprites();
  
  textSize(20);
  fill("black");
  text("Distancia: "+ distance,250,30);
  
  
  textSize(20);
  fill("black");
  text(" "+ score,60,30);

  if(gameState===PLAY){
    
      Coins();
      Spawnobstacles();
      OB2();
    
      distance = distance + Math.round(getFrameRate()/50);
    
      fondo.velocityX = -(6 + 2*distance/150);
  
      mainCyclist.y = World.mouseY;
      canasta.y= World.mouseY;
      canasta.x=World.mouseX;

      edges= createEdgeSprites();
      mainCyclist.collide(edges);
      mainCyclist.bounce(invisible2);
      
     if(mainCyclist.isTouching(invisiblesu)){
       mainCyclist.x=90;
       mainCyclist.y=325;
     }

      if(fondo.x<0){
         fondo.x=width/2;
      }
      
      if(keyDown("space")) {
         cycleBell.play();
      }
 
      var select_oppPlayer = Math.round(random(1,3));

      if (World.frameCount % 150 == 0) {
        if (select_oppPlayer == 1) {
          pinkCyclists();
        } else if (select_oppPlayer == 2) {
          yellowCyclists();
        } else {
          redCyclists();
        }
      }

     if(pinkCG.isTouching(mainCyclist)){
         gameState = END;
         player1.velocityY = 0;
         player1.addAnimation("opponentPlayer1",oppPink2Img);
      }

      if(yellowCG.isTouching(mainCyclist)){
          gameState = END;
          player2.velocityY = 0;
          player2.addAnimation("opponentPlayer2",oppYellow2Img);
      }

      if(redCG.isTouching(mainCyclist)){
          gameState = END;
          player3.velocityY = 0;
          player3.addAnimation("opponentPlayer3",oppRed2Img);
      }

      if(canasta.isTouching(coinsgroup)){
          coinsgroup.destroyEach();
          score=score+10;
      }

      if(mainCyclist.isTouching(ob3group)){
          mainCyclist.visible=false;
          gameState=END;
      }
      if(mainCyclist.isTouching(obstaclesGroup)){
          gameState=END;
          policia.visible=true;
      }
    
      if(score===30){
        meta.x=70;
        meta.velocityY=4;
        score=score+30;
        meta.visible=true;
      }
    
      if(meta.isTouching(mainCyclist)){
        gameState=Play2;
        confeti.visible=true;
      }

      if(score==90){
        meta2.x=70;
        meta2.velocityY=4;
        score=score+40;
        meta2.visible=true;
      }

      if(meta2.isTouching(mainCyclist)){
         gameState=Play3;
         confeti.visible=true;
      }
    
      if(score==190){
          meta3.x=70;
          meta3.velocityY=4;
          score=score+50;
          meta3.visible=true;
      }
    
      if(meta3.isTouching(mainCyclist)){
        gameState=Play4;
        confeti.visible=true;
       }
} else if (gameState === END) {
  
    gameOver.visible = true;
    gameOver.depth=meta2.depth;
    gameOver.depth=gameOver.depth+1;
    
    text("¡Presiona la tecla de arriba",80,250);
    text("para reiniciar el juego¡",100,280);

    fondo.velocityX=0;
  
    mainCyclist.velocityY = 0;
    mainCyclist.addAnimation("SahilRunning",mainRacerImg2);
  
    pinkCG.setVelocityXEach(0);
    pinkCG.setLifetimeEach(-1);
  
    yellowCG.setVelocityXEach(0);
    yellowCG.setLifetimeEach(-1);
  
    redCG.setVelocityXEach(0);
    redCG.setLifetimeEach(-1);
  
    obstaclesGroup.setLifetimeEach(-1);
    obstaclesGroup.setVelocityXEach(0);
   
    ob3group.setLifetimeEach(-1);
    ob3group.setVelocityXEach(0);
  
    coinsgroup.destroyEach();
  
    meta.velocityY=0;
    meta2.velocityY=0;
    meta3.velocityY=0;
     
   if(keyDown(UP_ARROW)){
      reset();
   }
} else if(gameState===Play2){
  
    Meta();
    
    if(mousePressedOver(panda)){
      gameState=PLAY;
      meta.x=350;
      meta.y=100;
      meta.visible=true;
      panda.visible=false;
      manchas.visible=false;
      text("Bebés pandas",70,300);
      confeti.visible=false;
      mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
      
    }
  
  if(mousePressedOver(manchas)){
      gameState=END;
      meta.x=200;
      meta.y=-50;
      meta.visible=true;
      panda.visible=false;
      manchas.visible=false;
      confeti.visible=false;
    }
  
} else if(gameState===Play3){
  
    Meta2();
    
    if(mousePressedOver(coco)){
      gameState=PLAY;
      meta2.x=350;
      meta2.y=200;
      meta2.visible=true;
      coco.visible=false;
      rabbit.visible=false;
      confeti.visible=false;
      mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
      
    }
  
    if(mousePressedOver(rabbit)){
        gameState=END;
        meta2.x=200;
        meta2.y=-50;
        meta2.visible=true;
        coco.visible=false;
        rabbit.visible=false;
        confeti.visible=false;
     }
  
} else if(gameState===Play4){
  
    Meta3();
    
    if(mousePressedOver(cerillos)){
      gameState=PLAY;
      meta3.x=350;
      meta3.y=300;
      meta3.visible=true;
      cerillos.visible=false;
      hermanos.visible=false;
      confeti.visible=false;
      mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
      
    }
  
    if(mousePressedOver(hermanos)){
        gameState=END;
        meta3.x=200;
        meta3.y=-50;
        meta3.visible=true;
        cerillos.visible=false;
        hermanos.visible=false;
         confeti.visible=false;
     }
  }
}
function pinkCyclists(){
  
        player1 =createSprite(400,Math.round(random(320, 400)));
        player1.scale =0.05;
        player1.velocityX = -(6 + 2*distance/150);
        player1.addAnimation("opponentPlayer1",oppPink1Img);
        player1.setLifetime=170;
        pinkCG.add(player1);
        player1.setCollider("circle",0,0,400);
        player1.debug=false;
        policia.depth=player1.depth;
        policia.depth=policia.depth+1
}

function yellowCyclists(){
  
        player2 =createSprite(400,Math.round(random(320, 400)));
        player2.scale =0.05;
        player2.velocityX = -(6 + 2*distance/150);
        player2.addAnimation("opponentPlayer2",oppYellow1Img);
        player2.setLifetime=170;
        yellowCG.add(player2);
        player2.debug=false;
        player2.setCollider("circle",0,0,400);
        policia.depth=player2.depth;
        policia.depth=policia.depth+1;
}

function redCyclists(){
  
        player3 =createSprite(400,Math.round(random(320, 400)));
        player3.scale =0.05;
        player3.velocityX = -(6 + 2*distance/150);
        player3.addAnimation("opponentPlayer3",oppRed1Img);
        player3.setLifetime=170;
        redCG.add(player3);
        player3.debug=false;
        player3.setCollider("circle",0,0,400);
        policia.depth=player3.depth;
        policia.depth=policia.depth+1;
}

function Coins(){
  
        if(frameCount%60===0){
        coins= createSprite(120, 370, 60, 50);
        coins.x=Math.round(random(10,400));
        coins.addImage(coinsimg);
        coins.lifetime = 170;
        coins.scale = 0.07;
        coins.debug=false;
        coinsgroup.add(coins);
        policia.depth=coins.depth;
        policia.depth=policia.depth+1;
        }
}

function Meta(){
  
  text("Felicidades desbloqueaste la copa",38,100);
  text("bronce, para seguir jugando contesta:",27,125);
  text("¿Que tienen los pandas que no tenga",20,170);
  text("ningun otro animal?",90,205);
  
        panda.visible=true;
        manchas.visible=true;
        meta.visible=true;
        confeti.visible=true;
  
        fondo.velocityX=0;
        mainCyclist.velocityY=0;
        meta.velocityY=0;
  
        pinkCG.destroyEach();
        yellowCG.destroyEach();
        redCG.destroyEach();
        coinsgroup.destroyEach();
        obstaclesGroup.destroyEach();
        ob3group.destroyEach();
  
        mainCyclist.addAnimation("SahilRunning",niñoimg);
}
  function Meta2(){
  text("Felicidades desbloqueaste la copa",20,100);
  text("plata, para seguir jugando contesta:",20,125);
  text("¿Es peludo, humedo por dentro y ",38,170);
  text("empieza con la letra c ¿Qué es?",40,205);
        coco.visible=true;
        rabbit.visible=true;
        meta2.visible=true;
        confeti.visible=true;
    
        fondo.velocityX=0;
        mainCyclist.velocityY=0;
        meta2.velocityY=0;
    
        pinkCG.destroyEach();
        yellowCG.destroyEach();
        redCG.destroyEach();
        coinsgroup.destroyEach();
        obstaclesGroup.destroyEach();
        ob3group.destroyEach();
    
        mainCyclist.addAnimation("SahilRunning",niñoimg);     
}
function Meta3(){
  text("Felicidades desbloqueaste la copa",20,100);
  text("oro, para seguir jugando contesta:",20,125);
  text("Somos muchos hermanitos,",50,170);
  text(" en una sola casa vivimos",55,195);
  text("si nos rascan la cabeza ",60,220);
  text("al instante morimos.",65,245);
        cerillos.visible=true;
        hermanos.visible=true;
        meta3.visible=true;
        confeti.visible=true;
  
        fondo.velocityX=0;
        mainCyclist.velocityY=0;
        meta3.velocityY=0;
  
        pinkCG.destroyEach();
        yellowCG.destroyEach();
        redCG.destroyEach();
        coinsgroup.destroyEach();
        obstaclesGroup.destroyEach();
        ob3group.destroyEach();
  
        mainCyclist.addAnimation("SahilRunning",niñoimg);
}
function Spawnobstacles(){
  if(frameCount%350===0){
    obstacles=createSprite(400,400,10,40);
    obstacles.velocityX=-(3 + 2*distance/60);
    
    var rand=Math.round(random(1,2));
    switch(rand) {
      case 1:obstacles.addImage("imagen del ob1",ob1);
      break;
   
      case 2:obstacles.addImage("imagen del ob2",ob2);
      break;
      default: break;  
    }
    
    obstacles.scale=0.08;
    obstacles.lifetime=170;
    obstacles.debug=false;
    obstacles.setCollider("circle",0,0,150);
    obstaclesGroup.add(obstacles);
    canasta.depth=obstacles.depth;
    canasta.depth=canasta.depth+1;
    policia.depth=obstacles.depth;
    policia.depth=policia.depth+1;
    mainCyclist.depth=obstacles.depth;
    mainCyclist.depth=mainCyclist.depth+1;
  }
}
function OB2(){
  
  if(frameCount%500===0){
    ob3= createSprite(400,360,40,10);
    ob3.velocityX=-(3+ 2*distance/100);
    ob3.addImage(ob3img);
    ob3.scale=0.1;
    ob3.lifetime=170;
    ob3group.add(ob3);
    ob3.setCollider("circle",0,0,150);
    canasta.depth=ob3.depth;
    canasta.depth=canasta.depth+1;
    policia.depth=ob3.depth;
    policia.depth=policia.depth+1;
  }
}
function reset(){
  gameState=PLAY;
  gameOver.visible=false;
  
  mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
  
  pinkCG.destroyEach();
  yellowCG.destroyEach();
  redCG.destroyEach();
  obstaclesGroup.destroyEach();
  ob3group.destroyEach();
  
  distance=0;
  score=0;
  
  meta.visible=false;
  meta2.visible=false;
  meta3.visible=false;
  confeti.visible=false;
  mainCyclist.visible=true;
  policia.visible=false;
}
