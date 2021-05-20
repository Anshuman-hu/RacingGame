class Player {
  constructor(){
    this.index=null
    this.distance=0
    this.name=null
    this.rank=null
  }

  getRank(){
    database.ref('rank').on("value",(data)=>{
      this.rank=data.val()
    })
  }

  static updateRank(rank){
    database.ref('/').update({
      rank:rank
    })
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount:count
    });
  }

  update(name){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef=database.ref('players')
    playerInfoRef.on("value",(data)=>{
      allPlayers=data.val()
    })
  }
}
