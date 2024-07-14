
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
    this.createAttackRange(200);
  }

  handleAttackOverlapWith(otherEntity) {
    // this.scene.physics.add.overlap(this.attackRange, otherEntity, (entity1, entity2) => {this.onAttackOverlap(entity1, entity2)}, 
      // null, this.scene);
  }

  onAttackOverlap(entity1, entity2) {
  }

  update() {
    if (this.currentState == "RUN_RIGHT") {
      // this.flipX = false;
      this.setFlipX(false);
      this.play('goblin-run-anim', true);
    }

    if (this.currentState == "RUN_LEFT") {
      // this.flipX = true;
      this.setFlipX(true);
      this.play('goblin-run-anim', true);
    }

    if (this.currentState == "IDLE_LEFT") {
      this.setFlipX(true);
      this.play('goblin-idle-anim', true);
    }

    if (this.currentState == "IDLE_RIGHT") {
      this.setFlipX(false);
      this.play('goblin-idle-anim', true);
    }

    if (this.currentState == "ATTACK_LEFT") {
      this.setFlipX(true);
      this.play('goblin-attack-right-anim', true);
    }

    if (this.currentState == "ATTACK_RIGHT") {
      this.setFlipX(false);
      this.play('goblin-attack-right-anim', true);
    }
  }
}
