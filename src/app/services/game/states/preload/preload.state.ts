import 'pixi';
import 'p2';
import * as Phaser from 'phaser';

import { SPLASH_SCREEN_STATE } from '../splash-screen';
import { GameService } from '../../game.service';

/**
 * Game preload state name/token.
 */
export const PRELOAD_STATE = 'preload';

/**
 * Game preload state.
 */
export class PreloadState extends Phaser.State {
  /**
   * @inheritdoc
   */
  public preload() {
    const game = this.game;
    const world = game.world;
    const load = game.load;

    game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;

    const loadingBar = game.add.sprite(world.centerX, world.centerY, 'loadingBar');
    loadingBar.anchor.setTo(0.5, 0.5);

    game.load.setPreloadSprite(loadingBar);

    // Asset load event handlers.
    load.onLoadStart.add(this.onLoadStart, this);
    load.onFileComplete.add(this.onFileComplete, this);
    load.onLoadComplete.add(this.onLoadComplete, this);

    // Load images.
    load.image('splashScreen', 'assets/img/splashScreen.png');
  }

  /**
   * @inheritdoc
   */
  public create() {
    this.game.state.start(SPLASH_SCREEN_STATE);
  }

  /**
   * Invoked when asset loading starts.
   */
  public onLoadStart() {
    console.log('Loading... 0%');
  }

  /**
   * Invoked when asset has loaded.
   */
  public onFileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
    console.log('Loading... ' + progress + '%');
  }

  /**
   * Invoked when all assets have loaded.
   */
  public onLoadComplete() {
    console.log('Loading complete!');
  }
}
