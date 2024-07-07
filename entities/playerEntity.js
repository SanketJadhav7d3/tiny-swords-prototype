
export default class Entity extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, width, height, texture) {
    super(scene, x, y, texture);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.body.setSize(width, height);
    // this.setOffset(offsetX, offsetY);
    // this.setCollideWorldBounds(true);
    // this.body.setCollideWorldBounds(true);
  }
}

export class Structure extends Entity {
  constructor(scene, x, y, width, height, texture) {
    super(scene, x, y, width, height, texture);
    this.fullBodyBox = scene.physics.add.sprite(x, y, texture);
    this.fullBodyBox.setVisible(false);
    this.setImmovable(true);
    scene.physics.add.existing(this.fullBodyBox);
  }

  handleOverlapWith(otherEntity) {
    this.scene.physics.add.overlap(this.fullBodyBox, otherEntity, this.onOverlap, null, this.scene);
  }

  onOverlap(entity1, entity2) {
    // Logic to handle overlap between entity1 and entity2
    // 1 - structure
    // 2 - player sprite

    console.log(entity1.depth, entity2.depth);
    if (entity2.y < entity1.y) {
      entity2.depth = 0;
    }
    else {
      console.log("down")
      entity2.depth = 2;
    }
  }
}

export class Warrior extends Entity {
  constructor(scene, x, y, width, height, texture) {
    super(scene, x, y, width, height, texture);

    this.scene.input.keyboard.on('keydown-W', () => { 
      this.setVelocityY(-300);
      this.play('knight-run-anim', true);
    });
    this.scene.input.keyboard.on('keydown-S', () => {
      this.setVelocityY(300);
      this.play('knight-run-anim', true);
    });
    this.scene.input.keyboard.on('keydown-A', () => { 
      this.play('knight-run-anim', true);
      this.setVelocityX(-300);
    });
    this.scene.input.keyboard.on('keydown-D', () => { 
      this.setVelocityX(300);
      this.play('knight-run-anim', true);
    });
  }

  update() {
  }
}
