    //variable to store different state of game
    var gameState="serve";

    // variable to keep the score
    var compScore=0;
    var playerScore=0;

    var tom,enemy,goal1,goal2,ball;

    var boundary1,boundary2,boundary3,boundary4,boundary5,boundary6,boundary7,boundary8,boundary9,boundary10;

    var block1,block2;
    var salman

   function preload() {
    salman=loadImage("salman.png")




   }
    function setup(){
    // var edges=createEdgeSprites()
    var edges=createEdgeSprites()   

    tom = createSprite(200, 100,50,50);

     enemy = createSprite(200, 300.50,10);
    //enemy.setAnimation("hippo");
    enemy.scale=0.2;

     goal1 = createSprite(200, 28);
    //goal1.setAnimation("goal1");

     goal2 = createSprite(200, 372);
    //goal2.setAnimation("goal2");

     ball = createSprite(200, 200);
    //ball.setAnimation("ball");
    ball.scale=0.2;
    ball.velocityX=0;
    ball.velocityY=0;


     boundary1 = createSprite(201, 380,400,5);
    boundary1.shapeColor=("white");

     boundary2 = createSprite(201, 20,400,5);
    boundary2.shapeColor=("white");

     boundary3 = createSprite(200, 396,400,5);
    boundary3.shapeColor=("white");

     boundary4 = createSprite(199, 0,400,5);
    boundary4.shapeColor=("white");

     boundary5 = createSprite(384, 205,5,400);
    boundary5.shapeColor=("white");

     boundary6 = createSprite(20, 205,5,400);
    boundary6.shapeColor=("white");

     boundary7 = createSprite(396, 197,5,400);
    boundary7.shapeColor=("white");

     boundary8 = createSprite(4, 200,5,400);
    boundary8.shapeColor=("white");

     boundary9 = createSprite(196, 145,400,5);
    boundary9.shapeColor=("white");

     boundary10 = createSprite(220, 250,400,5);
    boundary10.shapeColor=("white");



     block1 = createSprite(94, 250);
    //block1.setAnimation("cactus");
    block1.scale=0.3;


     block2 = createSprite(331, 131);
    //block2.setAnimation("cactus2");
    block2.scale=0.3;

    }



    function draw() {
    background("lightgreen");
   
    
    //tom.setAnimation("panda");
    //tom.addImage(salman)
    //tom.scale=10;


    if(ball.isTouching(goal1) || ball.isTouching(goal2)) {
    //playSound("sound://category_points/retro_game_count_points_2.mp3",false);
    }

    if(ball.isTouching(tom) || ball.isTouching(enemy)) {
    //playSound("sound://category_bell/bells_win_high.mp3",false);
    }
    
    if(ball.isTouching(block1) || ball.isTouching(block2)) {
    //playSound("sound://category_alerts/playful_game_error_sound_4.mp3",false);
    } 
    
    
    
    // to make the player paddle move with the arrow

    if (keyDown("left")) {
    tom.x=tom.x-10;
        
    }

    if (keyDown("right")) {
    tom.x=tom.x+10;
        
    }

    if (keyDown("up")) {
    tom.y=tom.y-10;
        
    }

    if (keyDown("down")) {
    tom.y=tom.y+10;
        
    }
    
    //AI for the computer paddle 
    //make it mnove with the sriker's y position
    enemy.x=ball.x;

    for (var i = 0; i < 400; i=i+20) {
    line(i,200 , i+10, 200);
        
    }

    //score
    if (ball.isTouching(goal1)||ball.isTouching(goal2)) {
    if (ball.isTouching(goal2)) {
    compScore=compScore+1;    
    }
    if (ball.isTouching(goal1)) {
    playerScore=playerScore+1;      
        }
    reset();    
    gameState="serve";
    
    }

    // serve the ball when space is pressed
    if (keyDown("space") && gameState === "serve") {
    serve();
    gameState="play";

    
    }

    //place info text in the center
    if (gameState === "serve") {
    textSize(24);
        text("Press Space to Serve",100,180);
    }

    textSize(30);
    fill("black");

    //display scores
    text(compScore, 36,230);
    text(playerScore, 38,166);      


    if (playerScore === 5 || compScore === 5){
        gameState = "over";
    textSize(24);
        text("PANDA LOST",170,120);
    text("Press 'R' to Restart",100,180);
    
    }

    if (keyDown("r") && gameState === "over") {
        gameState = "serve";
        compScore = 0;
        playerScore = 0;
    }






  //  createEdgeSprites();
    tom.bounceOff(edges);
    tom.bounceOff(goal1);
    tom.collide(boundary9);



    ball.bounceOff(edges);
    ball.bounceOff(tom);
    ball.bounceOff(enemy);
    ball.bounceOff(block1);
    ball.bounceOff(block2);


    drawSprites();
        
    
    }

    function serve() {
    ball.velocityX = 3;
    ball.velocityY = 4;
    }

    function reset() {
    ball.x = 200;
    ball.y = 200;
    ball.velocityX = 0;
    ball.velocityY = 0;
    }
