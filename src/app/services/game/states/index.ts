import { OpaqueToken } from '@angular/core';
import { GAME_STATES as _GAME_STATES } from './game.states';
import { BOOT_STATE } from './boot';

/**
 * Initial game state.
 */
export const INITIAL_GAME_STATE = BOOT_STATE;

/**
 * Opaque token for game states injection.
 */
export const GAME_STATES = new OpaqueToken('game.states');

/**
 * Game states provider.
 */
export const gameStatesProvider = { provide: GAME_STATES, useValue: _GAME_STATES };
