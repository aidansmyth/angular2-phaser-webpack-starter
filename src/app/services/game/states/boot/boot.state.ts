import 'pixi';
import 'p2';
import * as Phaser from 'phaser';

import { PRELOAD_STATE } from '../preload';

/**
 * Game boot state name/token.
 */
export const BOOT_STATE = 'boot';

/**
 * Game boot state.
 */
export class BootState extends Phaser.State {
  /**
   * @inheritdoc
   */
  public preload() {
    this.game.load.image('loadingBar', 'assets/img/loadingBar.png');
  }

  /**
   * @inheritdoc
   */
  public create() {
    this.game.state.start(PRELOAD_STATE);
  }
}
