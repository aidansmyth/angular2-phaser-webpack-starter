import 'pixi';
import 'p2';
import * as Phaser from 'phaser';

import { BootState, BOOT_STATE } from './boot';
import { GamePlayState, GAME_PLAY_STATE } from './game-play';
import { PreloadState, PRELOAD_STATE } from './preload';
import { SplashScreenState, SPLASH_SCREEN_STATE } from './splash-screen';

/**
 * Game state configuration interface.
 */
export interface GameStateConfigInterface {
  state: string;
  class: Phaser.State;
}

/**
 * Array of game state configurations.
 */
export const GAME_STATES = [
  { state: BOOT_STATE, class: BootState },
  { state: GAME_PLAY_STATE, class: GamePlayState },
  { state: PRELOAD_STATE, class: PreloadState },
  { state: SPLASH_SCREEN_STATE, class: SplashScreenState }
];
