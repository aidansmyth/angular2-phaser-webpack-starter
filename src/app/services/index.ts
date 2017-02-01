import { AppStateService } from './app-state';
import { gameConfigProvider, GameService, gameStatesProvider } from './game';

export const APP_PROVIDERS = [
  AppStateService,
  gameConfigProvider,
  GameService,
  gameStatesProvider
];
