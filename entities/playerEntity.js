
// ▓█████  ███▄    █ ▄▄▄█████▓ ██▓▄▄▄█████▓ ██▓▓█████   ██████ 
// ▓█   ▀  ██ ▀█   █ ▓  ██▒ ▓▒▓██▒▓  ██▒ ▓▒▓██▒▓█   ▀ ▒██    ▒ 
// ▒███   ▓██  ▀█ ██▒▒ ▓██░ ▒░▒██▒▒ ▓██░ ▒░▒██▒▒███   ░ ▓██▄   
// ▒▓█  ▄ ▓██▒  ▐▌██▒░ ▓██▓ ░ ░██░░ ▓██▓ ░ ░██░▒▓█  ▄   ▒   ██▒
// ░▒████▒▒██░   ▓██░  ▒██▒ ░ ░██░  ▒██▒ ░ ░██░░▒████▒▒██████▒▒
// ░░ ▒░ ░░ ▒░   ▒ ▒   ▒ ░░   ░▓    ▒ ░░   ░▓  ░░ ▒░ ░▒ ▒▓▒ ▒ ░
//  ░ ░  ░░ ░░   ░ ▒░    ░     ▒ ░    ░     ▒ ░ ░ ░  ░░ ░▒  ░ ░
//    ░      ░   ░ ░   ░       ▒ ░  ░       ▒ ░   ░   ░  ░  ░  
//    ░  ░         ░           ░            ░     ░  ░      ░  
//


export default class Entity extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, width, height, texture) {
    super(scene, x, y, texture);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.currentState = null;

    this.body.setSize(width, height);
    // this.setOffset(offsetX, offsetY);
    // this.setCollideWorldBounds(true);
    // this.body.setCollideWorldBounds(true);
  }

  transitionStateTo(state) {
    this.currentState = state;
  }
}

