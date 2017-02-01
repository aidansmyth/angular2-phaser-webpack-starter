import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppStateService } from './services/app-state';
import { GameService, INITIAL_GAME_STATE } from './services/game';

/**
 * Application root component.
 */
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app',
  styleUrls: ['./app.component.scss'],
  template: `<main><router-outlet></router-outlet></main><div id="gameContainer"></div>`
})
export class AppComponent implements OnInit {
  /**
   * Instantiate application component.
   */
  constructor(public appState: AppStateService, public game: GameService) { }

  /**
   * @inheritdoc
   */
  public ngOnInit() {
    this.game.state.start(INITIAL_GAME_STATE);
   }
}
