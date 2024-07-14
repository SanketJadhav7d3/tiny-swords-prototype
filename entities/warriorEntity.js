
// ▄▄▌ ▐ ▄▌ ▄▄▄· ▄▄▄  ▄▄▄  ▪        ▄▄▄      ▄▄▄ . ▐ ▄ ▄▄▄▄▄▪  ▄▄▄▄▄ ▄· ▄▌
// ██· █▌▐█▐█ ▀█ ▀▄ █·▀▄ █·██ ▪     ▀▄ █·    ▀▄.▀·•█▌▐█•██  ██ •██  ▐█▪██▌
// ██▪▐█▐▐▌▄█▀▀█ ▐▀▀▄ ▐▀▀▄ ▐█· ▄█▀▄ ▐▀▀▄     ▐▀▀▪▄▐█▐▐▌ ▐█.▪▐█· ▐█.▪▐█▌▐█▪
// ▐█▌██▐█▌▐█ ▪▐▌▐█•█▌▐█•█▌▐█▌▐█▌.▐▌▐█•█▌    ▐█▄▄▌██▐█▌ ▐█▌·▐█▌ ▐█▌· ▐█▀·.
//  ▀▀▀▀ ▀▪ ▀  ▀ .▀  ▀.▀  ▀▀▀▀ ▀█▄▀▪.▀  ▀     ▀▀▀ ▀▀ █▪ ▀▀▀ ▀▀▀ ▀▀▀   ▀ •

import Entity from './playerEntity.js'
import { WarriorStates } from './states.js';

export default class Warrior extends Entity {
  constructor(scene, x, y, width, height, pathLayer, finder, grid) {
    super(scene, x, y, width, height, 'warrior-entity', pathLayer, finder);

    this.currentState = WarriorStates.IDLE_RIGHT;
    this.grid = grid;
    this.health = 50;
    this.gettingAttacked = false;

    this.createAttackRange(200);
    this.attackRange.setDepth(4);

    this.isSetOn = false;
  }

  handleAttackOverlapWith(otherEntity) {
    this.scene.physics.add.overlap(this.attackRange, otherEntity, (entity1, entity2) => {this.onAttackOverlap(entity1, entity2)}, 
      null, this.scene);
  }

  onAttackOverlap(entity1, entity2) {
    // Logic to handle overlap between entity1 and entity2
    // 1 - structure
    // 2 - player sprite

    // go to that player and attack

    console.log(this.hasStart, this.hasReached);

    if (this.hasReached) {
      if (this.currentState = "IDLE_LEFT")
        this.transitionStateTo("UPWARD_SLASH_LEFT");
      if (this.currentState = "IDLE_RIGHT")
        this.transitionStateTo("UPWARD_SLASH_RIGHT");
    }

    if (!this.isSetOn) {
      var entity2Pos = entity2.getPosTile();
      console.log(entity2Pos);
      this.moveToTile(entity2Pos[0]-1, entity2Pos[1]-1, this.grid)
    }

    this.isSetOn = true;
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
