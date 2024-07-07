

import Entity from './playerEntity.js'

export default class Structure extends Entity {
  constructor(scene, x, y, width, height, texture) {
    super(scene, x, y, width, height, texture);
    this.fullBodyBox = scene.physics.add.sprite(x, y, texture);
    this.fullBodyBox.setVisible(false);
    this.setImmovable(true);
    scene.physics.add.existing(this.fullBodyBox);
    this.depth = 1;
  }

  handleOverlapWith(otherEntity) {
    this.scene.physics.add.overlap(this.fullBodyBox, otherEntity, this.onOverlap, null, this.scene);
  }

  onOverlap(entity1, entity2) {
    // Logic to handle overlap between entity1 and entity2
    // 1 - structure
    // 2 - player sprite

    if (entity2.y < entity1.y) {
      entity2.depth = 0;
    }
    else {
      entity2.depth = 2;
    }
  }
}

