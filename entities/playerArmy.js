

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
    this.towers = scene.physics.add.group();

    // this.warriors.add(new Warrior(scene, 21 * 64, 9 * 64, 45, 60, 'warrior-entity', this.pathLayer, this.finder));
    // this.warriors.add(new Warrior(scene, 23 * 64, 9 * 64, 45, 60, 'warrior-entity', this.pathLayer, this.finder));
    this.p1 = new Warrior(scene, 23 * 64, 9 * 64, 45, 60, 'warrior-entity', this.pathLayer, this.finder)
    this.p2 = new Warrior(scene, 21 * 64, 9 * 64, 45, 60, 'warrior-entity', this.pathLayer, this.finder)

    this.p2.moveToTile(26, 21, this.grid);
    this.p1.moveToTile(22, 22, this.grid);

    //this.warriors.children.iterate((child) => {
      //console.log(child);
      //child.moveToTile(22, 22, this.grid);
    //});
  } 

  update() {
    this.p1.update();
    this.p2.update();
    this.warriors.children.iterate((child) => {
      child.update();
    });
  }
}
