

import Entity from './playerEntity.js'
import { WorkerStates } from './states.js';

export default class Worker extends Entity {
  constructor(scene, x, y, width, height, pathLayer, finder) {

    super(scene, x, y, width, height, 'worker-entity', pathLayer, finder);

    this.currentState = WorkerStates.IDLE_LEFT;
    this.health = 30;
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

    if (this.currentState == "CUT_RIGHT") {
      this.setFlipX(false);
      this.play('worker-cut-anim', true);
    }

    if (this.currentState == "CUT_LEFT") {
      this.setFlipX(true);
      this.play('worker-cut-anim', true);
    }

    if (this.currentState == "HAMMER_LEFT") {
      this.setFlipX(true);
      this.play('worker-hammer-anim', true);
    }

    if (this.currentState == "HAMMER_RIGHT") {
      this.setFlipX(false);
      this.play('worker-hammer-anim', true);
    }
  }
}
