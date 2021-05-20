class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    car1=createSprite(100,200)
    car1.addImage("car1",car1Image)

    car2=createSprite(300,200)
    car2.addImage("car2",car2Image)

    car3=createSprite(500,200)
    car3.addImage("car3",car3Image)

    car4=createSprite(700,200)
    car4.addImage("car4",car4Image)

    cars=[car1,car2,car3,car4]
  }
  play(){
    form.hide()
    text("gameStart",120,100)
    Player.getPlayerInfo()
    player.getRank()
    image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5)
    if(allPlayers!==undefined){
      var index=0
      var x=175
      var y
       var displayPosition=130
       for(var plr in allPlayers){
        index=index+1
         x=x+200
         y=displayHeight-allPlayers[plr].distance
         cars[index-1].x=x
         cars[index-1].y=y
         
         if (index===player.index){
           cars[index-1].shapeColor="red"
           camera.position.x=displayWidth/2
           camera.position.y=cars[index-1].y
           stroke(10)
           fill("green")
           ellipse(x,y,60,60)
         }
         //else
         //fill("black")
        //textSize(15)
        //text(allPlayers[plr].name+":"+allPlayer[plr].distance,120,displayPosition)
        //displayPosition+=20
       }

    }
    if(keyIsDown(UP_ARROW)&&player.index!==null){
      player.distance+=50
      player.update()
      //console.log(player.distance)
      if(player.distance>3450){
        gameState=2
        player.rank=player.rank+1
        Player.updateRank(player.rank)
      }
    }
  }
  end(){
    console.log("GameEnded")
    console.log(player.rank)
  }
}
