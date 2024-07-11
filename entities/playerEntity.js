
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
  constructor(scene, x, y, width, height, texture, pathLayer) {
    super(scene, x, y, texture);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.pathLayer = pathLayer;

    this.currentState = null;

    this.body.setSize(width, height);
    // this.setOffset(offsetX, offsetY);
    // this.setCollideWorldBounds(true);
    // this.body.setCollideWorldBounds(true);
  }

  transitionStateTo(state) {
    this.currentState = state;
  }

  moveAlongPath(path, index) {
    if (index >= path.length) {
      // Stop animation when path is completed
      if (this.currentState == "RUN_RIGHT")
      this.transitionStateTo("IDLE_RIGHT")
      else
      this.transitionStateTo("IDLE_LEFT")
      return;
    }
    var tileX = path[index][0];
    var tileY = path[index][1];

    const tile = this.pathLayer.getTileAt(tileX, tileY);

    // Convert tile coordinates to world coordinates
    const worldX = tile.getCenterX();
    const worldY = tile.getCenterY();


    // Play walking animation
    if (worldX > this.x)
      this.transitionStateTo('RUN_RIGHT');
    else
      this.transitionStateTo('RUN_LEFT');

    // Create tween to move the sprite to the next tile
    this.scene.tweens.add({
      targets: this,
      x: worldX,
      y: worldY,
      duration: 300, // Adjust duration as needed
      onComplete: () => {
        // Move to the next tile in the path
        this.moveAlongPath(path, index + 1);
      }
    });
  }
}
