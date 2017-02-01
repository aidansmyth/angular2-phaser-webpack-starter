import { Injectable, Inject } from '@angular/core';

import 'pixi';
import 'p2';
import * as Phaser from 'phaser';

import { GAME_STATES } from './states';
import { GAME_CONFIG } from './config';
import { GameStateConfigInterface } from './states/game.states';

import { AppStateService } from '../app-state';

/**
 * Game service.
 */
@Injectable()
export class GameService extends Phaser.Game {
  /**
   * Instantiate game service instance.
   */
  constructor(
    @Inject(GAME_CONFIG) public config: Phaser.IGameConfig,
    @Inject(GAME_STATES) public states: GameStateConfigInterface[],
    public appState: AppStateService
  ) {
    // Load game configuration.
    super(config);

    // Load game states.
    states.forEach((value: GameStateConfigInterface) => {
      this.state.add(value.state, value.class);
    });
  }
}
