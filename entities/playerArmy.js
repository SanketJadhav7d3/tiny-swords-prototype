

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
    this.warriors.add(new Warrior(scene, 23 * 64, 9 * 64, 45, 60, this.pathLayer, this.finder));
    this.warriors.add(new Warrior(scene, 21 * 64, 9 * 64, 45, 60, this.pathLayer, this.finder));

    this.workers.add(new Worker(scene, 19 * 64, 9 * 64, 45, 60, this.pathLayer, this.finder));
    this.workers.add(new Worker(scene, 20 * 64, 9 * 64, 45, 60, this.pathLayer, this.finder));

    this.archers.add(new Archer(scene, 19 * 64, 21 * 64, 45, 60, this.pathLayer, this.finder));
    this.archers.add(new Archer(scene, 20 * 64, 21 * 64, 45, 60, this.pathLayer, this.finder));
    // this.p2.moveToTile(26, 21, this.grid);
    // this.p1.moveToTile(22, 22, this.grid);

    this.warriors.children.iterate((child) => {
      child.moveToTile(22, 22, this.grid);
    });

    this.workers.children.iterate((child) => {
      child.moveToTile(22, 21, this.grid);
    });

    this.archers.children.iterate((child) => {
      child.moveToTile(15, 10, this.grid);
    });
  } 

  update() {
    // this.p1.update();
    // this.p2.update();
    this.warriors.children.iterate((child) => {
      child.update();
    });

    this.workers.children.iterate((child) => {
      child.update();
    });

    this.archers.children.iterate((child) => {
      child.update();
    });
  }
}
