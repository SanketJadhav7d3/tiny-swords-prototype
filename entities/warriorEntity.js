
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
    this.isSetOn = false;

    this.context = {
      isEnemyInRange: false,
      enemy: null, 
    }
  }

  handleAttackOverlapWith(otherEntity) {
  }

  onAttackOverlap(entity1, entity2) {
  }

  decide() {
  }

  protectEntity(entity) {
    // go to the entity
    var entityPos = entity.getPosTile();
    this.moveToTile(entityPos[0], entityPos[1] - 1, this.grid);
  }

  attackEnemy() {
    // go to the warrior
    // attack it

    if (this.hasReached) {
      this.transitionStateTo("UPWARD_SLASH_LEFT");
      return;
    }

    if (!this.isMoving()) {
      var enemyPos = this.context.enemy.getPosTile();
      this.moveToTile(enemyPos[0], enemyPos[1], this.grid);
    }
  }

  update() {

    this.decide();


    switch (this.currentState) {

      case 'RUN_RIGHT':
        this.setFlipX(false);
        this.play('warrior-run-anim', true);
        break;

      case 'RUN_RIGHT':
        this.setFlipX(true);
        this.play('warrior-run-anim', true);
        break;

      case 'IDLE_LEFT':
        this.setFlipX(true);
        this.play('warrior-idle-anim', true);
        break;

      case 'IDLE_RIGHT':
        this.setFlipX(false);
        this.play('warrior-idle-anim', true);
        break;

      case 'UPWARD_SLASH_LEFT':
        this.setFlipX(true);
        this.play('warrior-upward-slash-right-anim', true);
        break;

      case 'UPWARD_SLASH_RIGHT':
        this.setFlipX(false);
        this.play('warrior-upward-slash-right-anim', true);
        break;

      case 'DOWNWARD_SLASH_RIGHT':
        this.setFlipX(false);
        this.play('warrior-downward-slash-right-anim', true);
        break;

      case 'DOWNWARD_SLASH_LEFT':
        this.setFlipX(true);
        this.play('warrior-downward-slash-right-anim', true);
        break;

      case 'UPWARD_SLASH_FRONT':
        this.setFlipX(false);
        this.play('warrior-upward-slash-front-anim', true);
        break;

      case 'DOWNWARD_SLASH_FRONT':
        this.setFlipX(false);
        this.play('warrior-downward-slash-front-anim', true);
        break;

      case 'UPWARD_SLASH_BACK':
        this.setFlipX(false);
        this.play('warrior-upward-slash-back-anim', true);
        break;
      case 'DOWNWARD_SLASH_BACK':
        this.setFlipX(false);
        this.play('warrior-downward-slash-back-anim', true);
        break;
      case 'DEAD':
        this.setFlipX(false);
        this.play('dead-anim', true);
        break;
    }
  }
}
