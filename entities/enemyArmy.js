

import Bomber from './bomberEntity.js';
import Goblin from './goblinEntity.js';

export default class EnemyArmy {

  constructor(scene, pathLayer, finder, grid) {
    this.scene = scene;
    this.pathLayer = pathLayer;
    this.finder = finder;
    this.grid = grid;

    this.bombers = scene.physics.add.group();
    this.goblins = scene.physics.add.group();

  } 

  handleGoblinAttackOverlapWithGroup(otherGroup) {
    this.goblins.children.iterate((goblin) => {
      otherGroup.children.iterate((child) => {
        goblin.handleAttackOverlapWith(child);
      });
    });
  }

  spawnGoblin(tileX, tileY) {
    var goblin = new Goblin(this.scene, tileX * 64, tileY * 64, 45, 60, this.pathLayer, this.finder, this.grid);
    this.goblins.add(goblin);
  }

  update(playerArmy) {
    // this.p1.update();
    // this.p2.update();

    this.goblins.children.iterate((child) => {
      if (child)
        child.update(playerArmy);
    });
  }
}
