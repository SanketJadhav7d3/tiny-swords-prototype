
// ▄▄▌ ▐ ▄▌ ▄▄▄· ▄▄▄  ▄▄▄  ▪        ▄▄▄      ▄▄▄ . ▐ ▄ ▄▄▄▄▄▪  ▄▄▄▄▄ ▄· ▄▌
// ██· █▌▐█▐█ ▀█ ▀▄ █·▀▄ █·██ ▪     ▀▄ █·    ▀▄.▀·•█▌▐█•██  ██ •██  ▐█▪██▌
// ██▪▐█▐▐▌▄█▀▀█ ▐▀▀▄ ▐▀▀▄ ▐█· ▄█▀▄ ▐▀▀▄     ▐▀▀▪▄▐█▐▐▌ ▐█.▪▐█· ▐█.▪▐█▌▐█▪
// ▐█▌██▐█▌▐█ ▪▐▌▐█•█▌▐█•█▌▐█▌▐█▌.▐▌▐█•█▌    ▐█▄▄▌██▐█▌ ▐█▌·▐█▌ ▐█▌· ▐█▀·.
//  ▀▀▀▀ ▀▪ ▀  ▀ .▀  ▀.▀  ▀▀▀▀ ▀█▄▀▪.▀  ▀     ▀▀▀ ▀▀ █▪ ▀▀▀ ▀▀▀ ▀▀▀   ▀ •

import Entity from './playerEntity.js'
import { WarriorStates } from './states.js';

export default class Warrior extends Entity {
  constructor(scene, x, y, width, height, texture) {
    super(scene, x, y, width, height, texture);

    this.currentState = WarriorStates.IDLE_LEFT;

    this.scene.input.keyboard.on('keydown-W', () => { 
      this.setVelocityY(-300);
      this.transitionStateTo(WarriorStates.RUN_RIGHT);
    });

    this.scene.input.keyboard.on('keydown-S', () => {
      this.setVelocityY(300);
      this.transitionStateTo(WarriorStates.RUN_RIGHT);
    });

    this.scene.input.keyboard.on('keydown-A', () => { 
      this.setVelocityX(-300);
      this.transitionStateTo(WarriorStates.RUN_LEFT);
    });

    this.scene.input.keyboard.on('keydown-D', () => { 
      this.setVelocityX(300);
      this.transitionStateTo(WarriorStates.RUN_RIGHT);
    });

    this.scene.input.keyboard.on('keyup-W', () => { 
      this.setVelocityY(0);
      this.transitionStateTo(WarriorStates.IDLE_LEFT);
    });

    this.scene.input.keyboard.on('keyup-S', () => {
      this.setVelocityY(0);
      this.transitionStateTo(WarriorStates.IDLE_LEFT);
    });

    this.scene.input.keyboard.on('keyup-A', () => { 
      this.setVelocityX(0);
      this.transitionStateTo(WarriorStates.IDLE_LEFT);
    });

    this.scene.input.keyboard.on('keyup-D', () => { 
      this.setVelocityX(0);
      this.transitionStateTo(WarriorStates.IDLE_RIGHT);
    });
  }

  update() {
    if (this.currentState == "RUN_RIGHT") {
      // this.flipX = false;
      this.setFlipX(false);
      this.play('knight-run-anim', true);
    }

    if (this.currentState == "RUN_LEFT") {
      // this.flipX = true;
      this.setFlipX(true);
      this.play('knight-run-anim', true);
    }

    if (this.currentState == "IDLE_LEFT") {
      this.setFlipX(true);
      this.play('knight-idle-anim', true);
    }

    if (this.currentState == "IDLE_RIGHT") {
      this.setFlipX(false);
      this.play('knight-idle-anim', true);
    }
  }
}
