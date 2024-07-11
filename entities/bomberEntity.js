

import Entity from './playerEntity.js'
import { BomberStates } from './states.js';

export default class Bomber extends Entity {
  constructor(scene, x, y, width, height, texture, pathLayer) {
    super(scene, x, y, width, height, texture, pathLayer);

    this.currentState = BomberStates.IDLE_RIGHT;

    this.scene.input.keyboard.on('keydown-W', () => { 
      this.setVelocityY(-300);
      this.transitionStateTo(BomberStates.RUN_RIGHT);
    });

    this.scene.input.keyboard.on('keydown-S', () => {
      this.setVelocityY(300);
      this.transitionStateTo(BomberStates.RUN_RIGHT);
    });

    this.scene.input.keyboard.on('keydown-A', () => { 
      this.setVelocityX(-300);
      this.transitionStateTo(BomberStates.RUN_LEFT);
    });

    this.scene.input.keyboard.on('keydown-D', () => { 
      this.setVelocityX(300);
      this.transitionStateTo(BomberStates.RUN_RIGHT);
    });

    this.scene.input.keyboard.on('keyup-W', () => { 
      this.setVelocityY(0);
      this.transitionStateTo(BomberStates.IDLE_LEFT);
    });

    this.scene.input.keyboard.on('keyup-S', () => {
      this.setVelocityY(0);
      this.transitionStateTo(BomberStates.IDLE_LEFT);
    });

    this.scene.input.keyboard.on('keyup-A', () => { 
      this.setVelocityX(0);
      this.transitionStateTo(BomberStates.IDLE_LEFT);
    });

    this.scene.input.keyboard.on('keyup-D', () => { 
      this.setVelocityX(0);
      this.transitionStateTo(BomberStates.IDLE_RIGHT);
    });

    this.scene.input.keyboard.on('keydown-F', () => { 
      this.setVelocityX(0);
      this.transitionStateTo(BomberStates.THROW_RIGHT);
    });

    this.scene.input.keyboard.on('keydown-R', () => { 
      this.setVelocityX(0);
      this.transitionStateTo(BomberStates.DEAD);
    });
  }

  update() {
    if (this.currentState == "RUN_RIGHT") {
      // this.flipX = false;
      this.setFlipX(false);
      this.play('bomber-run-anim', true);
    }

    if (this.currentState == "RUN_LEFT") {
      // this.flipX = true;
      this.setFlipX(true);
      this.play('bomber-run-anim', true);
    }

    if (this.currentState == "IDLE_LEFT") {
      this.setFlipX(true);
      this.play('bomber-idle-anim', true);
    }

    if (this.currentState == "IDLE_RIGHT") {
      this.setFlipX(false);
      this.play('bomber-idle-anim', true);
    }

    if (this.currentState == "THROW_LEFT") {
      this.setFlipX(true);
      this.play('bomber-throw-anim', true);
    }

    if (this.currentState == "THROW_RIGHT") {
      this.setFlipX(false);
      this.play('bomber-throw-anim', true);
    }

    if (this.currentState == "DEAD") {
      this.setFlipX(false);
      this.play('dead-anim', true);
    }
  }
}
