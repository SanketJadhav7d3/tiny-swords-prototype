
// let controls;
let cameraSpeed = 10;
let trees;

export default class VillageScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainMenuScene' });
  }

  preload() {
    // this means current scence
    this.load.image("water-tiles", "./../Tiny Swords/Tiny Swords (Update 010)/Terrain/Water/Water.png");
    this.load.image("land-tiles", "./../Tiny Swords/Tiny Swords (Update 010)/Terrain/Ground/Tilemap_Flat.png");
    this.load.image("elevation-tiles", "./../Tiny Swords/Tiny Swords (Update 010)/Terrain/Ground/Tilemap_Elevation.png");
    this.load.image("bridge-tiles", "./../Tiny Swords/Tiny Swords (Update 010)/Terrain/Bridge/Bridge_All.png");
    this.load.image("castle-tiles", "./../Tiny Swords/Tiny Swords (Update 010)/Factions/Knights/Buildings/Castle/Castle_Blue.png");

    // deco
    this.load.image("deco-01-tiles", "./../Tiny Swords/Tiny Swords (Update 010)/Deco/01.png");
    this.load.image("deco-16-tiles", "./../Tiny Swords/Tiny Swords (Update 010)/Deco/16.png");
    this.load.image("deco-18-tiles", "./../Tiny Swords/Tiny Swords (Update 010)/Deco/18.png");
    this.load.image("deco-02-tiles", "./../Tiny Swords/Tiny Swords (Update 010)/Deco/02.png");
    this.load.image("deco-08-tiles", "./../Tiny Swords/Tiny Swords (Update 010)/Deco/08.png");
    this.load.image("deco-09-tiles", "./../Tiny Swords/Tiny Swords (Update 010)/Deco/09.png");
    this.load.image("deco-03-tiles", "./../Tiny Swords/Tiny Swords (Update 010)/Deco/03.png");

    this.load.spritesheet("tree", "./../Tiny Swords/Tiny Swords (Update 010)/Resources/Trees/Tree.png", { frameWidth: 64 * 3, frameHeight: 64 * 3});

    this.load.tilemapTiledJSON("map", "./../FINAL-MAP-uncompressed.tmj");
  }

  create() {
    const map = this.make.tilemap({ key: "map"});

    // parameters -- phaser tileset name (used in Tiled), image key in phaser cache
    const waterTileset = map.addTilesetImage("water", "water-tiles");
    const landTileset = map.addTilesetImage("land", "land-tiles");
    const eleviationTileset = map.addTilesetImage("elevation", "elevation-tiles");
    const bridgeTileset = map.addTilesetImage("bridge", "bridge-tiles");

    const deco01Tileset = map.addTilesetImage("deco-01", "deco-01-tiles");
    const deco16Tileset = map.addTilesetImage("deco-16", "deco-16-tiles");
    const deco18Tileset = map.addTilesetImage("deco-18", "deco-18-tiles");
    const deco02Tileset = map.addTilesetImage("deco-2", "deco-02-tiles");
    const deco08Tileset = map.addTilesetImage("deco-8", "deco-08-tiles");
    const deco09Tileset = map.addTilesetImage("deco-9", "deco-09-tiles");
    const deco03Tileset = map.addTilesetImage("deco-3", "deco-03-tiles");

    // layername, tileset, pos
    const waterLayer = map.createLayer("water", waterTileset, 0, 0);
    const sandLayer = map.createLayer("sand", landTileset, 0, 0);
    const elevationLayer1 = map.createLayer("elivation 1", eleviationTileset, 0, 0);
    const grassLayer1 = map.createLayer("grass 1", landTileset, 0, 0);
    const grassVariationLayer1 = map.createLayer("grass variation 2", landTileset, 0, 0);
    const elevationLayer2 = map.createLayer("elivation 2", eleviationTileset, 0, 0);
    const grassLayer2 = map.createLayer("grass 2", landTileset, 0, 0);
    const bridgeLayer = map.createLayer("bridge", bridgeTileset, 0, 0);

    const decoLayer = map.createLayer("deco", [deco03Tileset, deco01Tileset, deco16Tileset, deco18Tileset, deco02Tileset, deco08Tileset, deco09Tileset], 0, 0);

    // add sprite at position castle
    const castlePoint = map.findObject("castle", obj => obj.name == "castle-point");
    const castle = this.physics.add.sprite(castlePoint.x, castlePoint.y, 'castle-tiles');

    // trees
    this.trees = this.physics.add.group();
    const treesPoints = map.getObjectLayer("trees")['objects'];

    this.anims.create({
      key: 'wind',
      frames: this.anims.generateFrameNumbers('tree', { start: 0, end: 3 }), // Assuming 6 frames in the spritesheet
      frameRate: 7,
      repeat: -1
    });

    treesPoints.forEach(object => {
      let obj = this.trees.create(object.x, object.y, "tree");
      let delay = Phaser.Math.Between(0, 2000); // Random delay between 0 and 2000 milliseconds
      obj.setOrigin(0.5, 1);
      this.time.delayedCall(delay, () => {
        obj.play('wind');
      }, [], this);
    });

    const camera = this.cameras.main;

    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    // Set up the arrows to control the camera
    const cursors = this.input.keyboard.createCursorKeys();

    this.controls = new Phaser.Cameras.Controls.FixedKeyControl({
      camera: camera,
      left: cursors.left,
      right: cursors.right,
      up: cursors.up,
      down: cursors.down,
      speed: 0.5
    });

    // this.input.on('pointermove', handlePointerMove, this);

    // Help text that has a "fixed" position on the screen
    this.add
      .text(16, 16, "Arrow keys to scroll", {
        font: "18px monospace",
        fill: "#ffffff",
        padding: { x: 20, y: 10 },
        backgroundColor: "#000000"
      }).setScrollFactor(0);

    this.prevPointer = this.input.activePointer.position.clone();
  }

  update(time, delta) {
    this.controls.update(delta);

    // Edge scrolling with pointer position
    const scrollMargin = 200; // Adjust as needed
    const x = this.input.mousePointer.x;
    const y = this.input.mousePointer.y;

    if (x < scrollMargin) {
      // this.cameras.main.pan(this.cameras.main.scrollX+cameraSpeed, this.cameras.main.scrollY);
      this.cameras.main.scrollX -= cameraSpeed;
    } else if (x > this.cameras.main.width - scrollMargin) {
      this.cameras.main.scrollX += cameraSpeed;
      // this.cameras.main.pan(this.cameras.main.scrollX-cameraSpeed, this.cameras.main.scrollY);
    }
    if (y < scrollMargin) {
      this.cameras.main.scrollY -= cameraSpeed;
    } else if (y > this.cameras.main.height - scrollMargin) {
      this.cameras.main.scrollY += cameraSpeed;
    }
  }
}
