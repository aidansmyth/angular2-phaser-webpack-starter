import 'pixi';
import 'p2';
import * as Phaser from 'phaser';

import { GAME_PLAY_STATE } from '../game-play';

/**
 * Game splash screen state name/token.
 */
export const SPLASH_SCREEN_STATE = 'splash-screen';

/**
 * Game splash screen state.
 */
export class SplashScreenState extends Phaser.State {
  /**
   * @inheritdoc
   */
  public preload() { }

  /**
   * @inheritdoc
   */
  public create() {
    const game = this.game;
    const world = game.world;

    game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;

    const splashScreen = game.add.sprite(world.centerX, world.centerY, 'splashScreen');
    splashScreen.anchor.setTo(0.5, 0.5);

    document.body.onclick = () => {
      game.state.start(GAME_PLAY_STATE);
      document.body.onclick = () => {};
    };
  }
}
