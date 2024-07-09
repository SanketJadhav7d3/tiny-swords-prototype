
//  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ 
// ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
// ▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌ ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ 
// ▐░▌               ▐░▌     ▐░▌       ▐░▌     ▐░▌     ▐░▌          ▐░▌          
// ▐░█▄▄▄▄▄▄▄▄▄      ▐░▌     ▐░█▄▄▄▄▄▄▄█░▌     ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ 
// ▐░░░░░░░░░░░▌     ▐░▌     ▐░░░░░░░░░░░▌     ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
//  ▀▀▀▀▀▀▀▀▀█░▌     ▐░▌     ▐░█▀▀▀▀▀▀▀█░▌     ▐░▌     ▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀█░▌
//           ▐░▌     ▐░▌     ▐░▌       ▐░▌     ▐░▌     ▐░▌                    ▐░▌
//  ▄▄▄▄▄▄▄▄▄█░▌     ▐░▌     ▐░▌       ▐░▌     ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄█░▌
// ▐░░░░░░░░░░░▌     ▐░▌     ▐░▌       ▐░▌     ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
//  ▀▀▀▀▀▀▀▀▀▀▀       ▀       ▀         ▀       ▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀ 
//

export class WarriorStates {
  static IDLE_LEFT = "IDLE_LEFT";
  static IDLE_RIGHT = "IDLE_RIGHT";

  static RUN_RIGHT = "RUN_RIGHT";
  static RUN_LEFT = "RUN_LEFT";

  static UPWARD_SLASH_LEFT = "UPWARD_SLASH_LEFT";
  static UPWARD_SLASH_RIGHT = "UPWARD_SLASH_RIGHT";

  static DOWNWARD_SLASH_LEFT = "DOWNWARD_SLASH_LEFT";
  static DOWNWARD_SLASH_RIGHT = "DOWNWARD_SLASH_RIGHT";

  static UPWARD_SLASH_FRONT = "UPWARD_SLASH_FRONT";
  static DOWNWARD_SLASH_FRONT = "DOWNWARD_SLASH_FRONT";

  static UPWARD_SLASH_BACK = "UPWARD_SLASH_BACK";
  static DOWNWARD_SLASH_BACK = "DOWNWARD_SLASH_BACK";
}

export class GoblinStates {
  static IDLE_LEFT = "IDLE_LEFT";
  static IDLE_RIGHT = "IDLE_RIGHT";

  static ATTACK_LEFT = "ATTACK_LEFT";
  static ATTACK_RIGHT = "ATTACK_RIGHT";

  static RUN_RIGHT = "RUN_RIGHT";
  static RUN_LEFT = "RUN_LEFT";

  static ATTACK_FRONT = "ATTACK_FRONT";
  static ATTACK_BACK = "ATTACK_BACK";
}

export class WorkerStates {
  static IDLE_LEFT = "IDLE_LEFT";
  static IDLE_RIGHT = "IDLE_RIGHT";

  static RUN_RIGHT = "RUN_RIGHT";
  static RUN_LEFT = "RUN_LEFT";

  static CUT_RIGHT = "CUT_RIGHT";
  static CUT_LEFT = "CUT_LEFT";

  static HAMMER_RIGHT = "HAMMER_RIGHT";
  static HAMMER_LEFT = "HAMMER_LEFT";
}
