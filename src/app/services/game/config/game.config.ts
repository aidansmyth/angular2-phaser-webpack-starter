import 'pixi';
import 'p2';
import * as Phaser from 'phaser';

/**
 * Game configuration.
 */
export const GAME_CONFIG: Phaser.IGameConfig = {
  enableDebug: true,
  width: window.innerWidth,
  height: window.innerHeight,
  renderer: Phaser.WEBGL,
  parent: 'gameContainer',
  transparent: true,
  antialias: true,
//  resolution: number,
//  preserveDrawingBuffer: boolean,
//  physicsConfig: any,
//  seed: string,
//  state: Phaser.State,
//  forceSetTimeOut: boolean,
//  multiTextue: boolean
};
