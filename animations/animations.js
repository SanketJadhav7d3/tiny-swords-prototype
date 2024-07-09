
export function loadEntitySpriteSheet(scene) {
  scene.load.spritesheet("water-rock-02", "./Tiny Swords/Tiny Swords (Update 010)/Terrain/Water/Rocks/Rocks_02.png", 
    { frameWidth: 64 * 2, frameHeight: 64 * 2 });

  scene.load.spritesheet("water-rock-03", "./Tiny Swords/Tiny Swords (Update 010)/Terrain/Water/Rocks/Rocks_03.png", 
    { frameWidth: 64 * 2, frameHeight: 64 * 2 });

  scene.load.tilemapTiledJSON("map", "./FINAL-MAP-uncompressed.tmj");

  scene.load.spritesheet("warrior-entity", "./Tiny Swords/Tiny Swords (Update 010)/Factions/Knights/Troops/Warrior/Blue/Warrior_Blue.png", 
    { frameWidth: 64*3, frameHeight: 64*3 });

  scene.load.spritesheet("goblin-entity", "./Tiny Swords/Tiny Swords (Update 010)/Factions/Goblins/Troops/Torch/Blue/Torch_Blue.png", 
    { frameWidth: 64*3, frameHeight: 64*3 });

  scene.load.spritesheet("worker-entity", "./Tiny Swords/Tiny Swords (Update 010)/Factions/Knights/Troops/Pawn/Blue/Pawn_Blue.png", 
    { frameWidth: 64*3, frameHeight: 64*3 });

  scene.load.spritesheet("archer-entity", "./Tiny Swords/Tiny Swords (Update 010)/Factions/Knights/Troops/Archer/Archer + Bow/Archer_Blue_(NoArms).png", 
    { frameWidth: 64*3, frameHeight: 64*3 });

  scene.load.spritesheet("bomber-entity", "./Tiny Swords/Tiny Swords (Update 010)/Factions/Goblins/Troops/TNT/Blue/TNT_Blue.png", 
    { frameWidth: 64*3, frameHeight: 64*3 });

  scene.load.spritesheet("dead-entity", "./Tiny Swords/Tiny Swords (Update 010)/Factions/Knights/Troops/Dead/Dead.png", 
    { frameWidth: 64*2, frameHeight: 64*2 });


}

export function createAnimations(scene) {

  scene.anims.create({
    key: 'wind',
    frames: scene.anims.generateFrameNumbers('tree', { start: 0, end: 3 }), 
    frameRate: 7,
    repeat: -1
  });

  scene.anims.create({
    key: 'rock-anim-02',
    frames: scene.anims.generateFrameNumbers('water-rock-02', { start: 0, end: 7 }), 
    frameRate: 7,
    repeat: -1
  });

  scene.anims.create({
    key: 'rock-anim-03',
    frames: scene.anims.generateFrameNumbers('water-rock-03', { start: 0, end: 7 }), 
    frameRate: 7,
    repeat: -1
  });

  //  █     █░ ▄▄▄       ██▀███   ██▀███   ██▓ ▒█████   ██▀███  
  // ▓█░ █ ░█░▒████▄    ▓██ ▒ ██▒▓██ ▒ ██▒▓██▒▒██▒  ██▒▓██ ▒ ██▒
  // ▒█░ █ ░█ ▒██  ▀█▄  ▓██ ░▄█ ▒▓██ ░▄█ ▒▒██▒▒██░  ██▒▓██ ░▄█ ▒
  // ░█░ █ ░█ ░██▄▄▄▄██ ▒██▀▀█▄  ▒██▀▀█▄  ░██░▒██   ██░▒██▀▀█▄  
  // ░░██▒██▓  ▓█   ▓██▒░██▓ ▒██▒░██▓ ▒██▒░██░░ ████▓▒░░██▓ ▒██▒
  // ░ ▓░▒ ▒   ▒▒   ▓▒█░░ ▒▓ ░▒▓░░ ▒▓ ░▒▓░░▓  ░ ▒░▒░▒░ ░ ▒▓ ░▒▓░
  //   ▒ ░ ░    ▒   ▒▒ ░  ░▒ ░ ▒░  ░▒ ░ ▒░ ▒ ░  ░ ▒ ▒░   ░▒ ░ ▒░
  //   ░   ░    ░   ▒     ░░   ░   ░░   ░  ▒ ░░ ░ ░ ▒    ░░   ░ 
  //     ░          ░  ░   ░        ░      ░      ░ ░     ░     
  //                                                            

  scene.anims.create({
    key: 'warrior-idle-anim',
    frames: scene.anims.generateFrameNumbers('warrior-entity', { start: 0, end: 5 }), 
    frameRate: 10,
    repeat: -1
  });

  scene.anims.create({
    key: 'warrior-run-anim',
    frames: scene.anims.generateFrameNumbers('warrior-entity', { start: 6, end: 11 }), 
    frameRate: 10,
    repeat: -1
  });

  scene.anims.create({
    key: 'warrior-downward-slash-right-anim',
    frames: scene.anims.generateFrameNumbers('warrior-entity', { start: 12, end: 17 }), 
    frameRate: 10,
    repeat: -1
  });

  scene.anims.create({
    key: 'warrior-upward-slash-right-anim',
    frames: scene.anims.generateFrameNumbers('warrior-entity', { start: 18, end: 23 }), 
    frameRate: 10,
    repeat: -1
  });

  scene.anims.create({
    key: 'warrior-downward-slash-front-anim',
    frames: scene.anims.generateFrameNumbers('warrior-entity', { start: 24, end: 29 }), 
    frameRate: 10,
    repeat: -1
  });

  scene.anims.create({
    key: 'warrior-upward-slash-front-anim',
    frames: scene.anims.generateFrameNumbers('warrior-entity', { start: 30, end: 35 }), 
    frameRate: 10,
    repeat: -1
  });

  scene.anims.create({
    key: 'warrior-downward-slash-back-anim',
    frames: scene.anims.generateFrameNumbers('warrior-entity', { start: 36, end: 41 }), 
    frameRate: 10,
    repeat: -1
  });

  scene.anims.create({
    key: 'warrior-upward-slash-back-anim',
    frames: scene.anims.generateFrameNumbers('warrior-entity', { start: 42, end: 47 }), 
    frameRate: 10,
    repeat: -1
  });

  //   ▄▀  ████▄ ███   █    ▄█    ▄   
  // ▄▀    █   █ █  █  █    ██     █  
  // █ ▀▄  █   █ █ ▀ ▄ █    ██ ██   █ 
  // █   █ ▀████ █  ▄▀ ███▄ ▐█ █ █  █ 
  //  ███        ███       ▀ ▐ █  █ █ 
  //                           █   ██ 
  //                                  

  scene.anims.create({
    key: 'goblin-idle-anim',
    frames: scene.anims.generateFrameNumbers('goblin-entity', { start: 0, end: 6 }), 
    frameRate: 10,
    repeat: -1
  });

  scene.anims.create({
    key: 'goblin-run-anim',
    frames: scene.anims.generateFrameNumbers('goblin-entity', { start: 7, end: 12 }), 
    frameRate: 10,
    repeat: -1
  });

  scene.anims.create({
    key: 'goblin-attack-right-anim',
    frames: scene.anims.generateFrameNumbers('goblin-entity', { start: 14, end: 19 }), 
    frameRate: 10,
    repeat: 0
  });

  scene.anims.create({
    key: 'goblin-attack-front-anim',
    frames: scene.anims.generateFrameNumbers('goblin-entity', { start: 20, end: 26 }), 
    frameRate: 10,
    repeat: 0
  });

  scene.anims.create({
    key: 'goblin-attack-back-anim',
    frames: scene.anims.generateFrameNumbers('goblin-entity', { start: 28, end: 33 }), 
    frameRate: 10,
    repeat: 0 
  });

  // ____    __    ____  ______   .______       __  ___  _______ .______      
  // \   \  /  \  /   / /  __  \  |   _  \     |  |/  / |   ____||   _  \     
  //  \   \/    \/   / |  |  |  | |  |_)  |    |  '  /  |  |__   |  |_)  |    
  //   \            /  |  |  |  | |      /     |    <   |   __|  |      /     
  //    \    /\    /   |  `--'  | |  |\  \----.|  .  \  |  |____ |  |\  \----.
  //     \__/  \__/     \______/  | _| `._____||__|\__\ |_______|| _| `._____|
  //                                                                          

  scene.anims.create({
    key: 'worker-idle-anim',
    frames: scene.anims.generateFrameNumbers('worker-entity', { start: 0, end: 5 }), 
    frameRate: 10,
    repeat: 0 
  });

  scene.anims.create({
    key: 'worker-run-anim',
    frames: scene.anims.generateFrameNumbers('worker-entity', { start: 6, end: 11 }), 
    frameRate: 10,
    repeat: 0 
  });

  scene.anims.create({
    key: 'worker-hammer-anim',
    frames: scene.anims.generateFrameNumbers('worker-entity', { start: 12, end: 17 }), 
    frameRate: 10,
    repeat: 0 
  });

  scene.anims.create({
    key: 'worker-cut-anim',
    frames: scene.anims.generateFrameNumbers('worker-entity', { start: 18, end: 23 }), 
    frameRate: 10,
    repeat: 0 
  });

  scene.anims.create({
    key: 'worker-pick-gold-anim',
    frames: scene.anims.generateFrameNumbers('worker-entity', { start: 24, end: 29 }), 
    frameRate: 10,
    repeat: 0 
  });

  scene.anims.create({
    key: 'worker-pick-wood-anim',
    frames: scene.anims.generateFrameNumbers('worker-entity', { start: 30, end: 35 }), 
    frameRate: 10,
    repeat: 0 
  });

  //      ___      .______        ______  __    __   _______ .______      
  //     /   \     |   _  \      /      ||  |  |  | |   ____||   _  \     
  //    /  ^  \    |  |_)  |    |  ,----'|  |__|  | |  |__   |  |_)  |    
  //   /  /_\  \   |      /     |  |     |   __   | |   __|  |      /     
  //  /  _____  \  |  |\  \----.|  `----.|  |  |  | |  |____ |  |\  \----.
  // /__/     \__\ | _| `._____| \______||__|  |__| |_______|| _| `._____|
  //                                                                      


  scene.anims.create({
    key: 'archer-idle-anim',
    frames: scene.anims.generateFrameNumbers('archer-entity', { start: 0, end: 5 }), 
    frameRate: 10,
    repeat: 0 
  });

  scene.anims.create({
    key: 'archer-run-anim',
    frames: scene.anims.generateFrameNumbers('archer-entity', { start: 6, end: 11 }), 
    frameRate: 10,
    repeat: 0 
  });

  // ███   ████▄ █▀▄▀█ ███   ▄███▄   █▄▄▄▄ 
  // █  █  █   █ █ █ █ █  █  █▀   ▀  █  ▄▀ 
  // █ ▀ ▄ █   █ █ ▄ █ █ ▀ ▄ ██▄▄    █▀▀▌  
  // █  ▄▀ ▀████ █   █ █  ▄▀ █▄   ▄▀ █  █  
  // ███            █  ███   ▀███▀     █   
  //               ▀                  ▀    
  
  scene.anims.create({
    key: 'bomber-idle-anim',
    frames: scene.anims.generateFrameNumbers('bomber-entity', { start: 0, end: 5 }), 
    frameRate: 10,
    repeat: 0 
  });
  
  scene.anims.create({
    key: 'bomber-run-anim',
    frames: scene.anims.generateFrameNumbers('bomber-entity', { start: 7, end: 12 }), 
    frameRate: 10,
    repeat: 0 
  });

  scene.anims.create({
    key: 'bomber-throw-anim',
    frames: scene.anims.generateFrameNumbers('bomber-entity', { start: 14, end: 20 }), 
    frameRate: 10,
    repeat: 0 
  });

  // ▓█████▄  ██▓▓█████ 
  // ▒██▀ ██▌▓██▒▓█   ▀ 
  // ░██   █▌▒██▒▒███   
  // ░▓█▄   ▌░██░▒▓█  ▄ 
  // ░▒████▓ ░██░░▒████▒
  //  ▒▒▓  ▒ ░▓  ░░ ▒░ ░
  //  ░ ▒  ▒  ▒ ░ ░ ░  ░
  //  ░ ░  ░  ▒ ░   ░   
  //    ░     ░     ░  ░
  //  ░                 

  scene.anims.create({
    key: 'dead-anim',
    frames: scene.anims.generateFrameNumbers('dead-entity', { start: 0, end: 13 }), 
    frameRate: 10,
    repeat: 0 
  });
}
