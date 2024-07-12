
//      ▄████  ▒█████   ▄▄▄▄    ██▓     ██▓ ███▄    █ 
//     ██▒ ▀█▒▒██▒  ██▒▓█████▄ ▓██▒    ▓██▒ ██ ▀█   █ 
//    ▒██░▄▄▄░▒██░  ██▒▒██▒ ▄██▒██░    ▒██▒▓██  ▀█ ██▒
//    ░▓█  ██▓▒██   ██░▒██░█▀  ▒██░    ░██░▓██▒  ▐▌██▒
//    ░▒▓███▀▒░ ████▓▒░░▓█  ▀█▓░██████▒░██░▒██░   ▓██░
//     ░▒   ▒ ░ ▒░▒░▒░ ░▒▓███▀▒░ ▒░▓  ░░▓  ░ ▒░   ▒ ▒ 
//      ░   ░   ░ ▒ ▒░ ▒░▒   ░ ░ ░ ▒  ░ ▒ ░░ ░░   ░ ▒░
//    ░ ░   ░ ░ ░ ░ ▒   ░    ░   ░ ░    ▒ ░   ░   ░ ░ 
//          ░     ░ ░   ░          ░  ░ ░           ░ 
//                           ░                        
// ▓█████  ███▄    █ ▄▄▄█████▓ ██▓▄▄▄█████▓▓██   ██▓  
// ▓█   ▀  ██ ▀█   █ ▓  ██▒ ▓▒▓██▒▓  ██▒ ▓▒ ▒██  ██▒  
// ▒███   ▓██  ▀█ ██▒▒ ▓██░ ▒░▒██▒▒ ▓██░ ▒░  ▒██ ██░  
// ▒▓█  ▄ ▓██▒  ▐▌██▒░ ▓██▓ ░ ░██░░ ▓██▓ ░   ░ ▐██▓░  
// ░▒████▒▒██░   ▓██░  ▒██▒ ░ ░██░  ▒██▒ ░   ░ ██▒▓░  
// ░░ ▒░ ░░ ▒░   ▒ ▒   ▒ ░░   ░▓    ▒ ░░      ██▒▒▒   
//  ░ ░  ░░ ░░   ░ ▒░    ░     ▒ ░    ░     ▓██ ░▒░   
//    ░      ░   ░ ░   ░       ▒ ░  ░       ▒ ▒ ░░    
//    ░  ░         ░           ░            ░ ░       
//                                          ░ ░

import Entity from './playerEntity.js'
import { GoblinStates } from './states.js';

export default class Goblin extends Entity {
  constructor(scene, x, y, width, height, texture, pathLayer) {
    super(scene, x, y, width, height, texture, pathLayer);

    this.currentState = GoblinStates.IDLE_LEFT;

    this.scene.input.keyboard.on('keydown-W', () => { 
      this.setVelocityY(-300);
      this.transitionStateTo(GoblinStates.RUN_RIGHT);
    });

    this.scene.input.keyboard.on('keydown-S', () => {
      this.setVelocityY(300);
      this.transitionStateTo(GoblinStates.RUN_RIGHT);
    });

    this.scene.input.keyboard.on('keydown-A', () => { 
      this.setVelocityX(-300);
      this.transitionStateTo(GoblinStates.RUN_LEFT);
    });

    this.scene.input.keyboard.on('keydown-D', () => { 
      this.setVelocityX(300);
      this.transitionStateTo(GoblinStates.RUN_RIGHT);
    });

    this.scene.input.keyboard.on('keyup-W', () => { 
      this.setVelocityY(0);
      this.transitionStateTo(GoblinStates.IDLE_LEFT);
    });

    this.scene.input.keyboard.on('keyup-S', () => {
      this.setVelocityY(0);
      this.transitionStateTo(GoblinStates.IDLE_LEFT);
    });

    this.scene.input.keyboard.on('keyup-A', () => { 
      this.setVelocityX(0);
      this.transitionStateTo(GoblinStates.IDLE_LEFT);
    });

    this.scene.input.keyboard.on('keyup-D', () => { 
      this.setVelocityX(0);
      this.transitionStateTo(GoblinStates.IDLE_RIGHT);
    });

    this.scene.input.keyboard.on('keydown-F', () => { 
      this.setVelocityX(0);
      this.transitionStateTo(GoblinStates.ATTACK_RIGHT);
    });
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
