import 'pixi';
import 'p2';
import * as Phaser from 'phaser';

/**
 * Game play state name/token.
 */
export const GAME_PLAY_STATE = 'game-play';

/**
 * Game play state.
 */
export class GamePlayState extends Phaser.State {
  /**
   * @inheritdoc
   */
  public preload() { }

  /**
   * @inheritdoc
   */
  public create() {
    console.log('Play Game!');
   }
}
