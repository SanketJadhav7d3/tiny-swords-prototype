

//     ▄   ▄█ █    █    ██     ▄▀  ▄███▄    
//      █  ██ █    █    █ █  ▄▀    █▀   ▀   
// █     █ ██ █    █    █▄▄█ █ ▀▄  ██▄▄     
//  █    █ ▐█ ███▄ ███▄ █  █ █   █ █▄   ▄▀  
//   █  █   ▐     ▀    ▀   █  ███  ▀███▀    
//    █▐                  █                 
//    ▐                  ▀                  
//    ▄▄▄▄▄   ▄█▄    ▄███▄      ▄   ▄███▄   
//   █     ▀▄ █▀ ▀▄  █▀   ▀      █  █▀   ▀  
// ▄  ▀▀▀▀▄   █   ▀  ██▄▄    ██   █ ██▄▄    
//  ▀▄▄▄▄▀    █▄  ▄▀ █▄   ▄▀ █ █  █ █▄   ▄▀ 
//            ▀███▀  ▀███▀   █  █ █ ▀███▀   
//                           █   ██         

import Entity, { Warrior, Structure } from './entities/playerEntity.js';
import createAnimations from './animations/animations.js';

// let controls;
let cameraSpeed = 10;
var player;
var trees;
var cursors;
var castle;

export default class VillageScene extends Phaser.Scene {
  constructor() {
    super({ key: 'VillageScene' });
  }

  preload() {
    // this means current scence
    this.load.image("water-tiles", "./Tiny Swords/Tiny Swords (Update 010)/Terrain/Water/Water.png");
    this.load.image("land-tiles", "./Tiny Swords/Tiny Swords (Update 010)/Terrain/Ground/Tilemap_Flat.png");
    this.load.image("elevation-tiles", "./Tiny Swords/Tiny Swords (Update 010)/Terrain/Ground/Tilemap_Elevation.png");
    this.load.image("bridge-tiles", "./Tiny Swords/Tiny Swords (Update 010)/Terrain/Bridge/Bridge_All.png");
    this.load.image("castle-tiles", "./Tiny Swords/Tiny Swords (Update 010)/Factions/Knights/Buildings/Castle/Castle_Blue.png");

    // deco
    this.load.image("deco-01-tiles", "./Tiny Swords/Tiny Swords (Update 010)/Deco/01.png");
    this.load.image("deco-16-tiles", "./Tiny Swords/Tiny Swords (Update 010)/Deco/16.png");
    this.load.image("deco-18-tiles", "./Tiny Swords/Tiny Swords (Update 010)/Deco/18.png");
    this.load.image("deco-02-tiles", "./Tiny Swords/Tiny Swords (Update 010)/Deco/02.png");
    this.load.image("deco-08-tiles", "./Tiny Swords/Tiny Swords (Update 010)/Deco/08.png");
    this.load.image("deco-09-tiles", "./Tiny Swords/Tiny Swords (Update 010)/Deco/09.png");
    this.load.image("deco-03-tiles", "./Tiny Swords/Tiny Swords (Update 010)/Deco/03.png");

    this.load.spritesheet("tree", "./Tiny Swords/Tiny Swords (Update 010)/Resources/Trees/Tree.png", 
      { frameWidth: 64 * 3, frameHeight: 64 * 3});
    this.load.spritesheet("water-rock-02", "./Tiny Swords/Tiny Swords (Update 010)/Terrain/Water/Rocks/Rocks_02.png", 
      { frameWidth: 64 * 2, frameHeight: 64 * 2});

    this.load.spritesheet("water-rock-03", "./Tiny Swords/Tiny Swords (Update 010)/Terrain/Water/Rocks/Rocks_03.png", 
      { frameWidth: 64 * 2, frameHeight: 64 * 2});

    this.load.tilemapTiledJSON("map", "./FINAL-MAP-uncompressed.tmj");
    this.load.spritesheet("knight-entity", "./Tiny Swords/Tiny Swords (Update 010)/Factions/Knights/Troops/Warrior/Blue/Warrior_Blue.png", 
      { frameWidth: 64*3, frameHeight: 64*3});

  }

  create() {
    const map = this.make.tilemap({ key: "map"});

    // █    ██  ▀▄    ▄ ▄███▄   █▄▄▄▄   ▄▄▄▄▄   
    // █    █ █   █  █  █▀   ▀  █  ▄▀  █     ▀▄ 
    // █    █▄▄█   ▀█   ██▄▄    █▀▀▌ ▄  ▀▀▀▀▄   
    // ███▄ █  █   █    █▄   ▄▀ █  █  ▀▄▄▄▄▀    
    //     ▀   █ ▄▀     ▀███▀     █             
    //        █                  ▀              
    //       ▀                                  

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

    const decoLayer = map.createLayer("deco", [deco03Tileset, deco01Tileset, deco16Tileset, 
      deco18Tileset, deco02Tileset, deco08Tileset, deco09Tileset], 0, 0);


    // ██      ▄   ▄█ █▀▄▀█ ██     ▄▄▄▄▀ ▄█ ████▄    ▄      ▄▄▄▄▄   
    // █ █      █  ██ █ █ █ █ █ ▀▀▀ █    ██ █   █     █    █     ▀▄ 
    // █▄▄█ ██   █ ██ █ ▄ █ █▄▄█    █    ██ █   █ ██   █ ▄  ▀▀▀▀▄   
    // █  █ █ █  █ ▐█ █   █ █  █   █     ▐█ ▀████ █ █  █  ▀▄▄▄▄▀    
    //    █ █  █ █  ▐    █     █  ▀       ▐       █  █ █            
    //   █  █   ██      ▀     █                   █   ██            
    //  ▀                    ▀                                      

    createAnimations(this);

    // ▄███▄      ▄     ▄▄▄▄▀ ▄█    ▄▄▄▄▀ ▀▄    ▄           
    // █▀   ▀      █ ▀▀▀ █    ██ ▀▀▀ █      █  █            
    // ██▄▄    ██   █    █    ██     █       ▀█             
    // █▄   ▄▀ █ █  █   █     ▐█    █        █              
    // ▀███▀   █  █ █  ▀       ▐   ▀       ▄▀               
    //         █   ██                                       
    //                                                      
    //    ▄▄▄▄▄   █ ▄▄  █▄▄▄▄ ▄█    ▄▄▄▄▀ ▄███▄     ▄▄▄▄▄   
    //   █     ▀▄ █   █ █  ▄▀ ██ ▀▀▀ █    █▀   ▀   █     ▀▄ 
    // ▄  ▀▀▀▀▄   █▀▀▀  █▀▀▌  ██     █    ██▄▄   ▄  ▀▀▀▀▄   
    //  ▀▄▄▄▄▀    █     █  █  ▐█    █     █▄   ▄▀ ▀▄▄▄▄▀    
    //             █      █    ▐   ▀      ▀███▀             
    //              ▀    ▀                                  
    
    // sample player
    // const player = this.physics.add.sprite(1000, 500, 'knight-entity');
    // player.play('knight-downward-slash-back-anim');
    // this.player = new Warrior(this, 1000, 500, 'knight-entity');
    // this.player.play('knight-idle-anim');
    // this.player.setTint(0xff0000);


    // this.input.keyboard.on('keydown-W', () => { this.player.y -= 2});

    // add sprite at position castle

    player = new Warrior(this, 1000, 500, 50, 60, 'knight-entity');

    const castlePoint = map.findObject("castle", obj => obj.name == "castle-point");
    castle = new Structure(this, castlePoint.x, castlePoint.y, 300, 100, 'castle-tiles');

    castle.depth = 1;


    this.physics.add.collider(castle, player);
    castle.handleOverlapWith(player);

    // this.physics.add.overlap(castle, player);

    // this.physics.add.overlap(player, castle, () => { console.log("overlap") }, null, this);

    // trees
    //trees = this.physics.add.staticGroup();
    //const treesPoints = map.getObjectLayer("trees")['objects'];

    //treesPoints.forEach(object => {
      //let obj = trees.create(object.x, object.y, "tree");
      //let delay = Phaser.Math.Between(0, 2000); // Random delay between 0 and 2000 milliseconds
      // obj.setImmovable(true);
      // obj.setOrigin(0.5, 1);

      // var treeHitbox = this.physics.add.sprite(object.x, object.y - 20, 'water');

      // this.physics.add.collider(this.player, treeHitbox);
      // this.physics.add.overlap(this.player, treeHitbox, () => { console.log("overlap") }, null, this);

      // treeHitbox.setSize(10, 10);
      // treeHitbox.setTint(0xff00ff);
      // treeHitbox.setVisible(false); // Make the hitbox invisible

      //this.time.delayedCall(delay, () => {
         //obj.play('wind');
      //}, [], this);
    //});


    // water rocks
    this.rocks02 = this.physics.add.group();
    const waterRockPoints02 = map.getObjectLayer("water-rocks-02")['objects'];

    waterRockPoints02.forEach(object => {
      let obj = this.rocks02.create(object.x, object.y, "water-rock-02");
      let delay = Phaser.Math.Between(0, 2000); // Random delay between 0 and 2000 milliseconds
      this.time.delayedCall(delay, () => {
        obj.play('rock-anim-02');
      }, [], this);
    });

    this.rocks03 = this.physics.add.group();
    const waterRockPoints03 = map.getObjectLayer("water-rocks-03")['objects'];

    waterRockPoints03.forEach(object => {
      let obj = this.rocks03.create(object.x, object.y, "water-rock-03");
      let delay = Phaser.Math.Between(0, 2000); // Random delay between 0 and 2000 milliseconds
      this.time.delayedCall(delay, () => {
        obj.play('rock-anim-03');
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

    // this.player.update();

    if (Math.round(time) % 5 == 0)
      player.setVelocity(0);

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
