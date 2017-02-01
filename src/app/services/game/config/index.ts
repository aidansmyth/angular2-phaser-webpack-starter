import { OpaqueToken } from '@angular/core';
import { GAME_CONFIG as _GAME_CONFIG } from './game.config';

/**
 * Opaque token for game configuration injection.
 */
export const GAME_CONFIG = new OpaqueToken('game.config');

/**
 * Game configuration provider.
 */
export const gameConfigProvider = { provide: GAME_CONFIG, useValue: _GAME_CONFIG };
