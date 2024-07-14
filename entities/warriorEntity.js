
// ▄▄▌ ▐ ▄▌ ▄▄▄· ▄▄▄  ▄▄▄  ▪        ▄▄▄      ▄▄▄ . ▐ ▄ ▄▄▄▄▄▪  ▄▄▄▄▄ ▄· ▄▌
// ██· █▌▐█▐█ ▀█ ▀▄ █·▀▄ █·██ ▪     ▀▄ █·    ▀▄.▀·•█▌▐█•██  ██ •██  ▐█▪██▌
// ██▪▐█▐▐▌▄█▀▀█ ▐▀▀▄ ▐▀▀▄ ▐█· ▄█▀▄ ▐▀▀▄     ▐▀▀▪▄▐█▐▐▌ ▐█.▪▐█· ▐█.▪▐█▌▐█▪
// ▐█▌██▐█▌▐█ ▪▐▌▐█•█▌▐█•█▌▐█▌▐█▌.▐▌▐█•█▌    ▐█▄▄▌██▐█▌ ▐█▌·▐█▌ ▐█▌· ▐█▀·.
//  ▀▀▀▀ ▀▪ ▀  ▀ .▀  ▀.▀  ▀▀▀▀ ▀█▄▀▪.▀  ▀     ▀▀▀ ▀▀ █▪ ▀▀▀ ▀▀▀ ▀▀▀   ▀ •

import Entity from './playerEntity.js'
import { WarriorStates } from './states.js';

export default class Warrior extends Entity {
  constructor(scene, x, y, width, height, pathLayer, finder, grid) {
    super(scene, x, y, width, height, 'warrior-entity', pathLayer, finder, grid);

    this.currentState = WarriorStates.IDLE_RIGHT;
    this.health = 50;
    this.gettingAttacked = false;

    this.createAttackRange(500);
    this.attackRange.setDepth(4);

    this.isSetOn = false;
  }

  handleAttackOverlapWith(otherEntity) {
    //this.scene.physics.add.overlap(this.attackRange, otherEntity, (entity1, entity2) => {this.onAttackOverlap(entity1, entity2)}, 
      //null, this.scene);
  }

  onAttackOverlap(entity1, entity2) {
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
