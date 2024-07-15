
/*
Interactive objects - Warriors, Towers, Castle and Goblins for now

Game logic class handles all the interaction between them
*/

export default class GameLogic {
  constructor(scene, castle, towers, playerArmy, enemyArmy) {
    this.scene = scene;
    this.castle = castle;
    this.towers = towers;
    this.playerArmy = playerArmy;
    this.enemyArmy = enemyArmy;

    var towersArray = this.towers.towersGroup.getChildren();

    for (var i = 0; i < towersArray.length; i++) {
      var tower = towersArray[i];
      this.playerArmy.spawnWarrior();
      this.playerArmy.protectTower(i, tower);
    }

    this.playerArmy.spawnWarrior();
    this.playerArmy.protectTower(i, castle);


    this.towers.handleOverlapWithGroup(this.playerArmy.warriors);

  }

  update() {
    // player.update();
    this.playerArmy.update();

    this.enemyArmy.update();

    this.castle.update(this.playerArmy.warriors);

    // towers update
    this.towers.update(this.playerArmy.warriors);
  }

}
