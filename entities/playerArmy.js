

import Warrior from './warriorEntity.js';
import Worker from './workerEntity.js';
import Archer from './archerEntity.js';

// var tileX = pathLayer.worldToTileX(player.x);
// var tileY = pathLayer.worldToTileX(player.y);

// const path = finder.findPath(tileX, tileY, 20, 22, grid);

// let index = 0;

export default class PlayerArmy {
  constructor(scene, pathLayer, finder, grid) {
    this.scene = scene;
    this.pathLayer = pathLayer;
    this.finder = finder;
    this.grid = grid;

    this.warriors = scene.physics.add.group();
    this.workers = scene.physics.add.group();
    this.archers = scene.physics.add.group();
    
    this.spawnWarrior(16, 10);
  } 

  spawnWarrior(tileX, tileY) {
    var warrior = new Warrior(this.scene, tileX * 64, tileY * 64, 45, 60, this.pathLayer, this.finder, this.grid);
    this.warriors.add(warrior);
  }

  spawnWorker(tileX, tileY) {
    var worker = new Worker(this.scene, tileX * 64, tileY * 64, 45, 60, this.pathLayer, this.finder, this.grid);
    this.workers.add(worker);
  }

  protectTower(index, tower) {
    // go to that tower and protect it 
    // warrior.moveToTile(towerPos[0], towerPos[1]);
    var warrior = this.warriors.getChildren()[index]
    warrior.protectEntity(tower);
  }

  follow(index, mouseX, mouseY) {
    var warrior = this.warriors.getChildren()[index]
    warrior.followMouse(mouseX, mouseY);
  }

  handleWarriorAttackOverlapWithGroup(otherGroup) {
    this.warriors.children.iterate((warrior) => {
      otherGroup.children.iterate((child) => {
        warrior.handleAttackOverlapWith(child);
      });
    });
  }

  update(enemyArmy) {
    // this.p1.update();
    // this.p2.update();

    this.warriors.children.iterate((child) => {
      if (child)
        child.update(enemyArmy);
    });

    this.workers.children.iterate((child) => {
      child.update();
    });

    // this.archers.children.iterate((child) => {
      // child.update();
    // });
  }
}
