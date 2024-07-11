

import Entity from './playerEntity.js'

export default class Structure extends Entity {
  constructor(scene, x, y, width, height, texture) {
    super(scene, x, y, width, height, texture);
    this.fullBodyBox = scene.physics.add.sprite(x, y, texture);
    this.fullBodyBox.setVisible(false);
    this.setImmovable(true);
    scene.physics.add.existing(this.fullBodyBox);
    this.depth = 1;
    this.visualOffset = 30;
  }

  handleOverlapWith(otherEntity) {
    this.scene.physics.add.overlap(this.fullBodyBox, otherEntity, this.onOverlap, null, this.scene);
  }

  onOverlap(entity1, entity2) {
    // Logic to handle overlap between entity1 and entity2
    // 1 - structure
    // 2 - player sprite
    
    // var structureBottomY = entity1.y + (entity1.height / 2);

    if (entity2.y < entity1.y + 50) {
      entity2.depth = 0;
    }
    else {
      entity2.depth = 2;
    }
  }
}

export class Tree extends Structure {
  constructor(scene, x, y, width, height, texture) {
    super(scene, x, y, width, height, texture);

    this.fullBodyBox.height = 200;
    this.fullBodyBox.width = 200;
  }
}

export class Tower extends Structure {
  constructor(scene, x, y, width, height, texture) {
    super(scene, x, y, width, height, texture);

    this.fullBodyBox.height = 200;
    this.fullBodyBox.width = 200;

    this.visualOffset = 40;
  }
}
