

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

    // this.warriors.add(new Warrior(scene, 21 * 64, 9 * 64, 45, 60, 'warrior-entity', this.pathLayer, this.finder));
    // this.warriors.add(new Warrior(scene, 23 * 64, 9 * 64, 45, 60, 'warrior-entity', this.pathLayer, this.finder));
    // this.bombers.add(new Bomber(scene, 13 * 64, 16 * 64, 45, 60, this.pathLayer, this.finder));
    // this.bombers.add(new Bomber(scene, 13 * 64, 17 * 64, 45, 60, this.pathLayer, this.finder));

    this.goblins.add(new Goblin(scene, 30 * 64, 13 * 64, 45, 60, this.pathLayer, this.finder, this.grid));
    this.goblins.add(new Goblin(scene, 31 * 64, 13 * 64, 45, 60, this.pathLayer, this.finder, this.grid));
    this.goblins.add(new Goblin(scene, 31 * 64, 12 * 64, 45, 60, this.pathLayer, this.finder, this.grid));
    this.goblins.add(new Goblin(scene, 30 * 64, 12 * 64, 45, 60, this.pathLayer, this.finder, this.grid));
    this.goblins.add(new Goblin(scene, 30 * 64, 14 * 64, 45, 60, this.pathLayer, this.finder, this.grid));
    this.goblins.add(new Goblin(scene, 31 * 64, 12 * 64, 45, 60, this.pathLayer, this.finder, this.grid));
    this.goblins.add(new Goblin(scene, 30 * 64, 14 * 64, 45, 60, this.pathLayer, this.finder, this.grid));
    this.goblins.add(new Goblin(scene, 34 * 64, 15 * 64, 45, 60, this.pathLayer, this.finder, this.grid));
    // this.goblins.add(new Goblin(scene, 30 * 64, 10 * 64, 45, 60, this.pathLayer, this.finder, this.grid));

    // this.goblins.children.iterate((goblin) => {
       // goblin.moveToTile(15, 15, this.grid);
    // });

    // this.p2.moveToTile(26, 21, this.grid);
    // this.p1.moveToTile(22, 22, this.grid);
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
