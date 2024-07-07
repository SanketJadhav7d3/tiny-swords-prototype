
import WarriorStates from './states.js';

export default class StateMachine {
  constructor() {
  }

  transitionTo() {
  }
}

class WarriorStateMachine {
  constructor() {
    this.currentState = WarriorStates.IDLE_LEFT;
  }

  transitionTo(state) {
    this.currentState = state;
  }
}
