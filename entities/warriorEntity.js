
// ▄▄▌ ▐ ▄▌ ▄▄▄· ▄▄▄  ▄▄▄  ▪        ▄▄▄      ▄▄▄ . ▐ ▄ ▄▄▄▄▄▪  ▄▄▄▄▄ ▄· ▄▌
// ██· █▌▐█▐█ ▀█ ▀▄ █·▀▄ █·██ ▪     ▀▄ █·    ▀▄.▀·•█▌▐█•██  ██ •██  ▐█▪██▌
// ██▪▐█▐▐▌▄█▀▀█ ▐▀▀▄ ▐▀▀▄ ▐█· ▄█▀▄ ▐▀▀▄     ▐▀▀▪▄▐█▐▐▌ ▐█.▪▐█· ▐█.▪▐█▌▐█▪
// ▐█▌██▐█▌▐█ ▪▐▌▐█•█▌▐█•█▌▐█▌▐█▌.▐▌▐█•█▌    ▐█▄▄▌██▐█▌ ▐█▌·▐█▌ ▐█▌· ▐█▀·.
//  ▀▀▀▀ ▀▪ ▀  ▀ .▀  ▀.▀  ▀▀▀▀ ▀█▄▀▪.▀  ▀     ▀▀▀ ▀▀ █▪ ▀▀▀ ▀▀▀ ▀▀▀   ▀ •

import Entity from './playerEntity.js'
import { WarriorStates } from './states.js';

export default class Warrior extends Entity {
  constructor(scene, x, y, width, height, pathLayer, finder) {

    super(scene, x, y, width, height, 'warrior-entity', pathLayer, finder);

    this.currentState = WarriorStates.IDLE_RIGHT;

    // this.scene.input.keyboard.on('keydown-W', () => { 
      // this.setVelocityY(-300);
      // this.transitionStateTo(WarriorStates.RUN_RIGHT);
    // });

    // this.scene.input.keyboard.on('keydown-S', () => {
      // this.setVelocityY(300);
      // this.transitionStateTo(WarriorStates.RUN_RIGHT);
    // });

    // this.scene.input.keyboard.on('keydown-A', () => { 
      // this.setVelocityX(-300);
      // this.transitionStateTo(WarriorStates.RUN_LEFT);
    // });

    // this.scene.input.keyboard.on('keydown-D', () => { 
      // this.setVelocityX(300);
      // this.transitionStateTo(WarriorStates.RUN_RIGHT);
    // });

    // this.scene.input.keyboard.on('keyup-W', () => { 
      // this.setVelocityY(0);
      // this.transitionStateTo(WarriorStates.IDLE_LEFT);
    // });

    // this.scene.input.keyboard.on('keyup-S', () => {
      // this.setVelocityY(0);
      // this.transitionStateTo(WarriorStates.IDLE_LEFT);
    // });

    // this.scene.input.keyboard.on('keyup-A', () => { 
      // this.setVelocityX(0);
      // this.transitionStateTo(WarriorStates.IDLE_LEFT);
    // });

    // this.scene.input.keyboard.on('keyup-D', () => { 
      // this.setVelocityX(0);
      // this.transitionStateTo(WarriorStates.IDLE_RIGHT);
    // });

    // this.scene.input.keyboard.on('keydown-F', () => { 
      // this.setVelocityX(0);
      // this.transitionStateTo(WarriorStates.UPWARD_SLASH_BACK);
    // });

    // this.scene.input.keyboard.on('keydown-R', () => { 
      // this.setVelocityX(0);
      // this.transitionStateTo(WarriorStates.DEAD);
    // });
  }

  update() {
    if (this.currentState == "RUN_RIGHT") {
      // this.flipX = false;
      this.setFlipX(false);
      this.play('warrior-run-anim', true);
    }

    if (this.currentState == "RUN_LEFT") {
      // this.flipX = true;
      this.setFlipX(true);
      this.play('warrior-run-anim', true);
    }

    if (this.currentState == "IDLE_LEFT") {
      this.setFlipX(true);
      this.play('warrior-idle-anim', true);
    }

    if (this.currentState == "IDLE_RIGHT") {
      this.setFlipX(false);
      this.play('warrior-idle-anim', true);
    }

    if (this.currentState == "UPWARD_SLASH_LEFT") {
      this.setFlipX(true);
      this.play('warrior-upward-slash-right-anim', true);
    }

    if (this.currentState == "UPWARD_SLASH_RIGHT") {
      this.setFlipX(false);
      this.play('warrior-upward-slash-right-anim', true);
    }

    if (this.currentState == "DOWNWARD_SLASH_RIGHT") {
      this.setFlipX(false);
      this.play('warrior-downward-slash-right-anim', true);
    }

    if (this.currentState == "DOWNWARD_SLASH_LEFT") {
      this.setFlipX(true);
      this.play('warrior-downward-slash-right-anim', true);
    }

    if (this.currentState == "UPWARD_SLASH_FRONT") {
      this.setFlipX(false);
      this.play('warrior-upward-slash-front-anim', true);
    }

    if (this.currentState == "DOWNWARD_SLASH_FRONT") {
      this.setFlipX(false);
      this.play('warrior-downward-slash-front-anim', true);
    }

    if (this.currentState == "UPWARD_SLASH_BACK") {
      this.setFlipX(false);
      this.play('warrior-upward-slash-back-anim', true);
    }

    if (this.currentState == "DOWNWARD_SLASH_BACK") {
      this.setFlipX(false);
      this.play('warrior-downward-slash-back-anim', true);
    }

    if (this.currentState == "DEAD") {
      this.setFlipX(false);
      this.play('dead-anim', true);
    }
  }
}
