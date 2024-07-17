
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

    this.playerArmy.spawnWarrior();

    this.towers.handleOverlapWithGroup(this.playerArmy.warriors);
    this.towers.handleOverlapWithGroup(this.enemyArmy.goblins);

    this.enemyArmy.handleGoblinAttackOverlapWithGroup(this.playerArmy.warriors);
    // this.playerArmy.handleWarriorAttackOverlapWithGroup(this.enemyArmy.goblins);
    this.playerArmy.protectTower(0, this.towers.towersGroup.getChildren()[6]);
  }

  update() {
    // player.update();
    this.playerArmy.update();

    this.enemyArmy.update(this.playerArmy);

    this.castle.update(this.playerArmy.warriors);

    // towers update
    this.towers.update(this.playerArmy.warriors, this.enemyArmy.goblins);
  }
}
