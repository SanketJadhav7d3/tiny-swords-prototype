
export default function createAnimations(scene) {

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
    key: 'knight-idle-anim',
    frames: scene.anims.generateFrameNumbers('knight-entity', { start: 0, end: 5 }), 
    frameRate: 10,
    repeat: -1
  });

  scene.anims.create({
    key: 'knight-run-anim',
    frames: scene.anims.generateFrameNumbers('knight-entity', { start: 6, end: 11 }), 
    frameRate: 10,
    repeat: -1
  });

  scene.anims.create({
    key: 'knight-downward-slash-right-anim',
    frames: scene.anims.generateFrameNumbers('knight-entity', { start: 12, end: 17 }), 
    frameRate: 10,
    repeat: -1
  });

  scene.anims.create({
    key: 'knight-upward-slash-right-anim',
    frames: scene.anims.generateFrameNumbers('knight-entity', { start: 18, end: 23 }), 
    frameRate: 10,
    repeat: -1
  });

  scene.anims.create({
    key: 'knight-downward-slash-front-anim',
    frames: scene.anims.generateFrameNumbers('knight-entity', { start: 24, end: 29 }), 
    frameRate: 10,
    repeat: -1
  });

  scene.anims.create({
    key: 'knight-upward-slash-front-anim',
    frames: scene.anims.generateFrameNumbers('knight-entity', { start: 30, end: 35 }), 
    frameRate: 10,
    repeat: -1
  });

  scene.anims.create({
    key: 'knight-downward-slash-back-anim',
    frames: scene.anims.generateFrameNumbers('knight-entity', { start: 36, end: 41 }), 
    frameRate: 10,
    repeat: -1
  });

  scene.anims.create({
    key: 'knight-upward-slash-back-anim',
    frames: scene.anims.generateFrameNumbers('knight-entity', { start: 42, end: 47 }), 
    frameRate: 10,
    repeat: -1
  });
}
