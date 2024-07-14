
import Entity from './playerEntity.js'
import { StructureStates } from './states.js';


export default class Structure extends Entity {
  constructor(scene, x, y, width, height, texture) {
    super(scene, x, y, width, height, texture);
    this.fullBodyBox = scene.physics.add.sprite(x, y, texture);
    this.fullBodyBox.setVisible(false);
    this.body.immovable = true;
    scene.physics.add.existing(this.fullBodyBox);
    this.depth = 1;
    this.visualOffset = 30;
    // this.attackRange.setVisible(false);
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

export class Castle extends Structure {
  constructor(scene, x, y, width, height, texture) {
    super(scene, x, y, width, height, texture);

    this.currentState = StructureStates.BUILT;

    this.health = 400;

    this.firePlace1 = this.scene.physics.add.sprite(x, y-85, 'fire');
    this.firePlace1.setDepth(2);
    this.firePlace1.setVisible(false);
    // this.firePlace1.play('fire-anim');

    this.firePlace2 = this.scene.physics.add.sprite(x-90, y-50, 'fire');
    this.firePlace2.setScale(0.8);
    this.firePlace2.setDepth(2);
    this.firePlace2.setVisible(false);
    // this.firePlace2.play('fire-anim');

    this.firePlace3 = this.scene.physics.add.sprite(x, y+80, 'fire');
    this.firePlace3.setScale(0.5);
    this.firePlace3.setDepth(2);
    this.firePlace3.setVisible(false);
    // this.firePlace3.play('fire-anim');

    this.firePlace4 = this.scene.physics.add.sprite(x+90, y, 'fire');
    this.firePlace4.setScale(0.5);
    this.firePlace4.setDepth(2);
    this.firePlace4.setVisible(false);
    // this.firePlace4.play('fire-anim');
  }

  update() {
    if (this.currentState == StructureStates.BUILT) {
      this.setTexture('castle-tiles');
    } else if (this.currentState == StructureStates.CONSTRUCT) {
      this.setTexture('castle-construct-tiles');
    } else if  (this.currentState == StructureStates.DESTROYED) {
      this.setTexture('castle-destroyed-tiles');
    }
  }
}

export class House extends Structure {
  constructor(scene, x, y, width, height, texture) {
    super(scene, x, y, width, height, texture);
    this.currentState = StructureStates.BUILT;
  }

  update() {
    if (this.currentState == StructureStates.BUILT) {
      this.setTexture('house-tiles');
    } else if (this.currentState == StructureStates.CONSTRUCT) {
      this.setTexture('house-construct-tiles');
    } else if  (this.currentState == StructureStates.DESTROYED) {
      this.setTexture('house-destroyed-tiles');
    }
  }
}

export class Tower extends Structure {
  constructor(scene, x, y, width, height, texture) {
    super(scene, x, y, width, height, texture);
    this.currentState = StructureStates.BUILT;
    this.visualOffset = 80;

    this.health = 100;

    this.firePlace1 = this.scene.physics.add.sprite(x, y-85, 'fire');
    this.firePlace1.setDepth(2);
    this.firePlace1.setVisible(false);
    //this.firePlace1.play('fire-anim');

    this.firePlace2 = this.scene.physics.add.sprite(x, y+80, 'fire');
    this.firePlace2.setScale(0.5);
    this.firePlace2.setDepth(2);
    this.firePlace2.setVisible(false);
    // this.firePlace2.play('fire-anim');
  }

  update() {

    if (this.currentState == StructureStates.BUILT) {
      this.setTexture('tower-tiles');
    } else if (this.currentState == StructureStates.CONSTRUCT) {
      this.setTexture('tower-construct-tiles');
    } else if  (this.currentState == StructureStates.DESTROYED) {
      this.setTexture('tower-destroyed-tiles');
    }
  }
}
