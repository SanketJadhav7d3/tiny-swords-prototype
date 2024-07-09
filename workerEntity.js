

import Entity from './playerEntity.js'
import { WorkerStates } from './states.js';

export default class Worker extends Entity {
  constructor(scene, x, y, width, height, texture) {
    super(scene, x, y, width, height, texture);

    this.currentState = WorkerStates.IDLE_LEFT;

    this.scene.input.keyboard.on('keydown-W', () => { 
      this.setVelocityY(-300);
      this.transitionStateTo(WorkerStates.RUN_RIGHT);
    });

    this.scene.input.keyboard.on('keydown-S', () => {
      this.setVelocityY(300);
      this.transitionStateTo(WorkerStates.RUN_RIGHT);
    });

    this.scene.input.keyboard.on('keydown-A', () => { 
      this.setVelocityX(-300);
      this.transitionStateTo(WorkerStates.RUN_LEFT);
    });

    this.scene.input.keyboard.on('keydown-D', () => { 
      this.setVelocityX(300);
      this.transitionStateTo(WorkerStates.RUN_RIGHT);
    });

    this.scene.input.keyboard.on('keyup-W', () => { 
      this.setVelocityY(0);
      this.transitionStateTo(WorkerStates.IDLE_LEFT);
    });

    this.scene.input.keyboard.on('keyup-S', () => {
      this.setVelocityY(0);
      this.transitionStateTo(WorkerStates.IDLE_LEFT);
    });

    this.scene.input.keyboard.on('keyup-A', () => { 
      this.setVelocityX(0);
      this.transitionStateTo(WorkerStates.IDLE_LEFT);
    });

    this.scene.input.keyboard.on('keyup-D', () => { 
      this.setVelocityX(0);
      this.transitionStateTo(WorkerStates.IDLE_RIGHT);
    });

    this.scene.input.keyboard.on('keydown-F', () => { 
      this.setVelocityX(0);
      this.transitionStateTo(WorkerStates.CUT_RIGHT);
    });
  }

  update() {
    if (this.currentState == "RUN_RIGHT") {
      // this.flipX = false;
      this.setFlipX(false);
      this.play('worker-run-anim', true);
    }

    if (this.currentState == "RUN_LEFT") {
      // this.flipX = true;
      this.setFlipX(true);
      this.play('worker-run-anim', true);
    }

    if (this.currentState == "IDLE_LEFT") {
      this.setFlipX(true);
      this.play('worker-idle-anim', true);
    }

    if (this.currentState == "IDLE_RIGHT") {
      this.setFlipX(false);
      this.play('worker-idle-anim', true);
    }

    if (this.currentState == "CUT_LEFT") {
      this.setFlipX(true);
      this.play('worker-cut-anim', true);
    }

    if (this.currentState == "CUT_RIGHT") {
      this.setFlipX(false);
      this.play('worker-cut-anim', true);
    }
  }
}
