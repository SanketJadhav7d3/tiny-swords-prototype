

import Entity from './playerEntity.js'
import { ArcherStates } from './states.js';

export default class Archer extends Entity {
  constructor(scene, x, y, width, height, texture) {
    super(scene, x, y, width, height, texture);

    this.currentState = ArcherStates.IDLE_RIGHT;

    this.scene.input.keyboard.on('keydown-W', () => { 
      this.setVelocityY(-300);
      this.transitionStateTo(ArcherStates.RUN_RIGHT);
    });

    this.scene.input.keyboard.on('keydown-S', () => {
      this.setVelocityY(300);
      this.transitionStateTo(ArcherStates.RUN_RIGHT);
    });

    this.scene.input.keyboard.on('keydown-A', () => { 
      this.setVelocityX(-300);
      this.transitionStateTo(ArcherStates.RUN_LEFT);
    });

    this.scene.input.keyboard.on('keydown-D', () => { 
      this.setVelocityX(300);
      this.transitionStateTo(ArcherStates.RUN_RIGHT);
    });

    this.scene.input.keyboard.on('keyup-W', () => { 
      this.setVelocityY(0);
      this.transitionStateTo(ArcherStates.IDLE_LEFT);
    });

    this.scene.input.keyboard.on('keyup-S', () => {
      this.setVelocityY(0);
      this.transitionStateTo(ArcherStates.IDLE_LEFT);
    });

    this.scene.input.keyboard.on('keyup-A', () => { 
      this.setVelocityX(0);
      this.transitionStateTo(ArcherStates.IDLE_LEFT);
    });

    this.scene.input.keyboard.on('keyup-D', () => { 
      this.setVelocityX(0);
      this.transitionStateTo(ArcherStates.IDLE_RIGHT);
    });

    this.scene.input.keyboard.on('keydown-F', () => { 
      this.setVelocityX(0);
      // this.transitionStateTo(ArcherStates.UPWARD_SLASH_BACK);
    });

    this.scene.input.keyboard.on('keydown-R', () => { 
      this.setVelocityX(0);
      this.transitionStateTo(ArcherStates.DEAD);
    });
  }

  update() {
    if (this.currentState == "RUN_RIGHT") {
      // this.flipX = false;
      this.setFlipX(false);
      this.play('archer-run-anim', true);
    }

    if (this.currentState == "RUN_LEFT") {
      // this.flipX = true;
      this.setFlipX(true);
      this.play('archer-run-anim', true);
    }

    if (this.currentState == "IDLE_LEFT") {
      this.setFlipX(true);
      this.play('archer-idle-anim', true);
    }

    if (this.currentState == "IDLE_RIGHT") {
      this.setFlipX(false);
      this.play('archer-idle-anim', true);
    }

    if (this.currentState == "DEAD") {
      this.setFlipX(false);
      this.play('dead-anim', true);
    }
  }
}
