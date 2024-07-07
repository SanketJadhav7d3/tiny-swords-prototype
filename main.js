
import VillageScene from './villageScene.js';


var config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true
    }
  },
  scene: [VillageScene]
};


var game = new Phaser.Game(config);
