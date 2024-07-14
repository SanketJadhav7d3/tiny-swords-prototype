

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

  constructor(scene, x, y, width, height, texture, pathLayer, finder) {
    super(scene, x, y, texture);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.pathLayer = pathLayer;

    this.currentState = null;

    this.finder = finder;

    this.body.setSize(width, height);
    // this.setOffset(offsetX, offsetY);
    // this.setCollideWorldBounds(true);
    // this.body.setCollideWorldBounds(true);

    this.hasStarted = false;
    this.hasReached = false;

    // this.createAttackRange(200);
  }

  createAttackRange(size) {
    const graphics = this.scene.add.graphics();

    graphics.fillStyle(0xFF0000, 0.01); // White color

    // Draw a square
    graphics.fillRect(0, 0, size, size);

    // Generate a texture from the graphics object
    graphics.generateTexture('squareTexture', size, size);

    this.attackRange = this.scene.physics.add.sprite(this.x, this.y, 'squareTexture');

    graphics.destroy();
  }

  transitionStateTo(state) {
    this.currentState = state;
  }

  moveToTile(tileX, tileY, grid) {

    var playerTileX = this.pathLayer.worldToTileX(this.x);
    var playerTileY = this.pathLayer.worldToTileX(this.y);

    var gridClone = grid.clone();

    var path = this.finder.findPath(playerTileX, playerTileY, tileX, tileY, gridClone);

    this.hasStarted = true;
    this.hasReached = false;

    return this.moveAlongPath(path, 0);
  }

  getPosTile() {
    var playerTileX = this.pathLayer.worldToTileX(this.x);
    var playerTileY = this.pathLayer.worldToTileX(this.y);

    return [playerTileX, playerTileY];
  }

  moveAlongPath(path, index) {
    if (index >= path.length) {
      // Stop animation when path is completed
      if (this.currentState == "RUN_RIGHT")
      this.transitionStateTo("IDLE_RIGHT")
      else
      this.transitionStateTo("IDLE_LEFT")

      this.hasStarted = false;
      this.hasReached = true;
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
      targets: [this, this.attackRange],
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
