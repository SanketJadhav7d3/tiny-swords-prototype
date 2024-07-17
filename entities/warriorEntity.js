
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

    this.createAttackRange(100);
    this.createRange(500);

    // attack enemy
    this.context = {
      isEnemyInRange: false,
      isEnemyInAttackRange: false,
      enemy: null, 
    }
  }


  updateContext(enemy) {
    if (this.context.enemy != null) {
      // is contextual enemy in attack range
      if (!this.isInAttackRange(this.context.enemy)) {
        // is not in attack range
        this.context.isEnemyInAttackRange = false;
        if (!this.isInRange(this.context.enemy)) {
          // is not in range and by default not in attack range
          this.context.isEnemyInRange = false;
          this.context.enemy = null;
        } else {
          // is in range and not in attack range
          this.context.isEnemyInRange = true;
        }
      } else {
        this.context.isEnemyInRange = true;
        this.context.isEnemyInAttackRange = true;
      }
    } else {
      // make the enemy the contextual enemy
      if (this.isInRange(enemy)) {
        this.context.isEnemyInRange = true;
        this.context.enemy = enemy;
        if (this.isInAttackRange(enemy)) {
          this.context.isEnemyInAttackRange = true;
        }
      }
    } 
  }

  attackEnemy() {
    this.stopMoving();
    // which side enemy is at
    this.transitionStateTo("UPWARD_SLASH_LEFT");
  }

  decide() {
    if (this.context.isEnemyInAttackRange) {
      this.attackEnemy();
    } else if (this.context.isEnemyInRange && !this.context.isEnemyInAttackRange) {
      this.followEntity(this.context.enemy);
    } else {
      this.currentState = "IDLE_LEFT";
    }
  }

  protectEntity(entity) {
    // go to the entity
    var entityPos = entity.getPosTile();
    this.moveToTile(entityPos[0], entityPos[1] - 1, this.grid);
  }

  attackEnemy() {
    // go to the enemy
    // attack it
    if (this.hasReached) {
      this.transitionStateTo("UPWARD_SLASH_RIGHT");
      return;
    }

    if (!this.isMoving()) {
      var enemyPos = this.context.enemy.getPosTile();
      this.moveToTile(enemyPos[0], enemyPos[1], this.grid);
    }
  }

  update(enemyArmy) {

    enemyArmy.goblins.children.iterate((child) => {
      this.updateContext(child);
    });

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
        this.setFlipX(false);
        this.play('warrior-upward-slash-anim', true);
        break;

      case 'UPWARD_SLASH_RIGHT':
        this.setFlipX(true);
        this.play('warrior-upward-slash-anim', true);
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
