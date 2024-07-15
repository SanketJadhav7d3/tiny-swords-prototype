
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
    this.createAttackRange(500);

    // killing warrior has higher priority than destroying tower
    this.context = {
      isWarriorInRange: false,
      isTowerInRange: false,
      warrior: null, 
      tower: null
    }
  }

  handleAttackOverlapWith(otherEntity) {
    this.scene.physics.add.overlap(this.attackRange, otherEntity, 
      (entity1, entity2) => {this.onAttackOverlap(entity1, entity2)}, null, this.scene);

    this.scene.physics.add.overlap(this, otherEntity, 
      () => { this.setAlpha(0.5) }, null, this.scene);

  }

  onAttackOverlap(entity1, entity2) {
    if (entity2.texture.key == "warrior-entity" && !this.context.isWarriorInRange) {
      console.log("warrior")
      this.context.isWarriorInRange = true;
      this.context.warrior = entity2;
      // attack the warrior
    }
    else if (entity2.texture.key == "tower-entity" && !this.context.isTowerInRange) {
      console.log("tower")
      this.context.isTowerInRange = true;
      this.context.tower = entity2;
    }
  }

  attackWarrior() {
    // go to the warrior
    // attack it

    if (this.hasReached) {
      this.transitionStateTo("ATTACK_LEFT");
      return;
    }

    if (!this.isMoving()) {
      var warriorPos = this.context.warrior.getPosTile();
      this.moveToTile(warriorPos[0], warriorPos[1], this.grid);
    }
  }

  attackTower(tower) {
    // to the tower
    // attack it
    var toweraPos = this.context.tower.getPosTile();
    this.moveToTile(towerPos[0], towerPos[1], this.grid);
  }

  decide() {
    if (this.context.isWarriorInRange) {
      console.log('attack warrior');
      this.attackWarrior();
    } else if (!this.context.isWarriorInRange && this.context.isTowerInRange) {
      console.log('attack tower');
      this.attackTower()
    } else {
      console.log('stay idle');
      this.currentState = "IDLE_LEFT";
    }
  }

  update() {
    // decide 

    this.decide();
    
    console.log(this.hasReached);

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
