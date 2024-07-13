

import Entity from './playerEntity.js'
import { ArcherStates } from './states.js';

export default class Archer extends Entity {
  constructor(scene, x, y, width, height, pathLayer, finder) {
    
    super(scene, x, y, width, height, 'archer-entity', pathLayer, finder);

    this.currentState = ArcherStates.IDLE_RIGHT;
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
