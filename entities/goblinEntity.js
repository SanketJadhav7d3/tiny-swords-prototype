
//      ▄████  ▒█████   ▄▄▄▄    ██▓     ██▓ ███▄    █ 
//     ██▒ ▀█▒▒██▒  ██▒▓█████▄ ▓██▒    ▓██▒ ██ ▀█   █ 
//    ▒██░▄▄▄░▒██░  ██▒▒██▒ ▄██▒██░    ▒██▒▓██  ▀█ ██▒
//    ░▓█  ██▓▒██   ██░▒██░█▀  ▒██░    ░██░▓██▒  ▐▌██▒
//    ░▒▓███▀▒░ ████▓▒░░▓█  ▀█▓░██████▒░██░▒██░   ▓██░
//     ░▒   ▒ ░ ▒░▒░▒░ ░▒▓███▀▒░ ▒░▓  ░░▓  ░ ▒░   ▒ ▒ 
//      ░   ░   ░ ▒ ▒░ ▒░▒   ░ ░ ░ ▒  ░ ▒ ░░ ░░   ░ ▒░
//    ░ ░   ░ ░ ░ ░ ▒   ░    ░   ░ ░    ▒ ░   ░   ░ ░ 
//          ░     ░ ░   ░          ░  ░ ░           ░ 

import Entity from './playerEntity.js'
import { GoblinStates } from './states.js';

export default class Goblin extends Entity {

  constructor(scene, x, y, width, height, pathLayer, finder, grid) {
    super(scene, x, y, width, height, 'goblin-entity', pathLayer, finder, grid);

    this.grid = grid;

    this.currentState = GoblinStates.IDLE_LEFT;
    this.health = 40;

    this.createAttackRange(100);
    this.createRange(500);

    // killing warrior has higher priority than destroying tower
    this.context = {
      isWarriorInRange: false,
      isWarriorInAttackRange: false,
      isTowerInRange: false,
      isTowerInAttackRange: false,
      warrior: null, 
      tower: null
    }
  }

  handleAttackOverlapWith(otherEntity) {
    //this.scene.physics.add.overlap(this.attackRange, otherEntity, 
      //(entity1, entity2) => { this.onAttackOverlap(entity1, entity2) }, null, this.scene);

    //this.scene.physics.add.overlap(this, otherEntity, 
      //() => { this.setAlpha(0.5) }, null, this.scene);
  }

  onAttackOverlap(entity1, entity2) {

    if (entity2.texture.key == "warrior-entity" && !this.context.isWarriorInRange) {
      this.context.isWarriorInRange = true;
      this.context.warrior = entity2;
      // attack the warrior
    }

    else if (entity2.texture.key == "tower-entity" && !this.context.isTowerInRange) {
      this.context.isTowerInRange = true;
      this.context.tower = entity2;
    }
  }

  attackWarrior() {
    // go to the warrior
    // attack it

    this.stopMoving();

    this.transitionStateTo("ATTACK_LEFT");

    // var warriorPos = this.context.warrior.getPosTile();
    // this.followEntity(this.context.warrior);
  }

  attackTower(tower) {
    // to the tower
    // attack it
    var toweraPos = this.context.tower.getPosTile();
    // this.moveToTile(towerPos[0], towerPos[1], this.grid);
  }

  isInAttackRange(child) {
    return this.scene.physics.world.overlap(this.attackRange, child);
  }

  isInRange(enemy) {
    return this.scene.physics.world.overlap(this.range, enemy);
  }

  updateContext(enemy) {

    if (this.context.warrior != null) {
      // is contextual warrior in attack range
      if (!this.isInAttackRange(this.context.warrior)) {
        // is not in attack range
        this.context.isWarriorInAttackRange = false;
        console.log('contextual enemy not in attack range');

        if (!this.isInRange(this.context.warrior)) {
          // is not in range and by default not in attack range
          console.log('contextual enemy not in range');
          this.context.isWarriorInRange = false;
          this.context.warrior = null;
        } else {
          // is in range and not in attack range
          console.log('contextual enemy in range');
          this.context.isWarriorInRange = true;
          // idotic
          // this.context.warrior = enemy;
        }
      } else {
        this.context.isWarriorInAttackRange = true;
        this.context.isWarriorInRange = true;
        // this.context.warrior = enemy;
      }
    } else {
      // make the enemy the contextual warrior
      if (this.isInRange(enemy)) {
        console.log('new enemy detected in range');
        this.context.isWarriorInRange = true;
        this.context.warrior = enemy;
        if (this.isInAttackRange(enemy)) {
          console.log('new enemy detected in attack range');
          this.context.isWarriorInAttackRange = true;
        }
      }
    } 
  }

  decide() {
    if (this.context.isWarriorInAttackRange) {
      this.attackWarrior();
    } else if (this.context.isWarriorInRange && !this.context.isWarriorInAttackRange) {
      this.followEntity(this.context.warrior);
    } else {
      this.currentState = "IDLE_LEFT";
    }
  }

  update(playerArmy) {
    playerArmy.warriors.children.iterate((child) => {
      // if there is overlap between the goblin and the warrior
      // check if there is already any warrior in range
      // if yes then don't update unless if the new warrior is not attacking the goblin
      this.updateContext(child);
    });

    this.decide();

    switch (this.currentState) {
      case "RUN_RIGHT": 
        // this.flipX = false;
        this.setFlipX(false);
        this.play('goblin-run-anim', true);
        break;

      case "RUN_LEFT":
        // this.flipX = true;
        this.setFlipX(true);
        this.play('goblin-run-anim', true);
        break;

      case "IDLE_LEFT":
        this.setFlipX(true);
        this.play('goblin-idle-anim', true);
        break;

      case "IDLE_RIGHT":
        this.setFlipX(false);
        this.play('goblin-idle-anim', true);
        break; 

      case "ATTACK_LEFT":
        this.setFlipX(true);
        this.play('goblin-attack-right-anim', true);
        break;

      case "ATTACK_RIGHT":
        this.setFlipX(false);
        this.play('goblin-attack-right-anim', true);
        break;

    }
  }
}
