

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

  constructor(scene, x, y, width, height, texture, pathLayer, finder, grid) {
    super(scene, x, y, texture);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.pathLayer = pathLayer;

    this.currentState = null;

    this.finder = finder;

    this.body.setSize(width, height);

    this.grid = grid;
    
    // this.setOffset(offsetX, offsetY);
    // this.setCollideWorldBounds(true);
    // this.body.setCollideWorldBounds(true);

    this.isFollowing = false;

    this.hasStarted = false;
    this.hasReached = false;

    this.moveTween = null;
    this.toFollow = null;
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

  stopMoving() {
    this.moveTween.stop();
    this.moveTween = null;
  }

  isMoving() {
    if (this.hasStarted && !this.hasReached) return true;
    return false;
  }

  moveToTile(tileX, tileY, grid) {
    // var playerTileX = this.pathLayer.worldToTileX(this.x);
    // var playerTileY = this.pathLayer.worldToTileX(this.y);

    var playerTileX = Math.floor(this.x / 64)
    var playerTileY = Math.floor(this.y / 64)

    var gridClone = grid.clone();

    var path = this.finder.findPath(playerTileX, playerTileY, tileX, tileY, gridClone);

    this.hasStarted = true;
    this.hasReached = false;

    this.moveAlongPath(path, 0);
  }

  getPosTile() {
    // var playerTileX = this.pathLayer.worldToTileX(this.x);
    // var playerTileY = this.pathLayer.worldToTileX(this.y);
    var playerTileX = Math.floor(this.x / 64)
    var playerTileY = Math.floor(this.y / 64)


    return [playerTileX, playerTileY];
  }

  moveAlongPath(path, index) {
    if (index >= path.length) {
      // Stop animation when path is completed
      if (this.currentState == "RUN_RIGHT")
      this.transitionStateTo("IDLE_RIGHT");
      else
      this.transitionStateTo("IDLE_LEFT");

      this.hasStarted = false;
      this.hasReached = true;

      if (this.tween) this.stopMoving();

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
    this.moveTween = this.scene.tweens.add({
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

  follow() {
    // if other entity is moving then update path to that entity
    // else existing path
  
    if (this.toFollow == null) return;

    if (!this.isFollowing) {
      // clear the tween
      var otherEntityPos = this.toFollow.getPosTile();
      console.log(otherEntityPos);
      this.moveToTile(otherEntityPos[0]-1, otherEntityPos[1], this.grid)
      this.isFollowing = true;
    }

    if (this.toFollow.isMoving())
      // clear the tween
      var otherEntityPos = this.toFollow.getPosTile();
      this.moveToTile(otherEntityPos[0]-1, otherEntityPos[1], this.grid)
  }
}
