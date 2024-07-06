
export default class Entity extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    // this.setCollideWorldBounds(true);
    // this.body.setCollideWorldBounds(true);
  }
}


export class Warrior extends Entity {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.scene = scene;

    // temp
    this.scene.input.keyboard.on('keydown-W', () => { 
      this.y -= 5;
      this.play('knight-run-anim', true);
    });
    this.scene.input.keyboard.on('keydown-S', () => {
      this.y += 5;
      this.play('knight-run-anim', true);
    });
    this.scene.input.keyboard.on('keydown-A', () => { 
      this.play('knight-run-anim', true);
      this.x -= 5;
    });
    this.scene.input.keyboard.on('keydown-D', () => { 
      this.x += 5;
      this.play('knight-run-anim', true);
    });
  }

  update() {
  }
}
