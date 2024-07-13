
//  ▄▄▄▄    ▒█████   ███▄ ▄███▓ ▄▄▄▄   ▓█████  ██▀███  
// ▓█████▄ ▒██▒  ██▒▓██▒▀█▀ ██▒▓█████▄ ▓█   ▀ ▓██ ▒ ██▒
// ▒██▒ ▄██▒██░  ██▒▓██    ▓██░▒██▒ ▄██▒███   ▓██ ░▄█ ▒
// ▒██░█▀  ▒██   ██░▒██    ▒██ ▒██░█▀  ▒▓█  ▄ ▒██▀▀█▄  
// ░▓█  ▀█▓░ ████▓▒░▒██▒   ░██▒░▓█  ▀█▓░▒████▒░██▓ ▒██▒
// ░▒▓███▀▒░ ▒░▒░▒░ ░ ▒░   ░  ░░▒▓███▀▒░░ ▒░ ░░ ▒▓ ░▒▓░
// ▒░▒   ░   ░ ▒ ▒░ ░  ░      ░▒░▒   ░  ░ ░  ░  ░▒ ░ ▒░
//  ░    ░ ░ ░ ░ ▒  ░      ░    ░    ░    ░     ░░   ░ 
//  ░          ░ ░         ░    ░         ░  ░   ░     
//       ░                           ░

import Entity from './playerEntity.js'
import { BomberStates } from './states.js';

export default class Bomber extends Entity {
  constructor(scene, x, y, width, height, pathLayer, finder) {
    super(scene, x, y, width, height, 'bomber-entity', pathLayer, finder);

    this.currentState = BomberStates.IDLE_RIGHT;
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
