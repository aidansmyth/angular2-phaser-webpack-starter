import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppStateService } from '../../services/app-state';
import { GameService } from '../../services/game';

/**
 * Game component for the application.
 */
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'game',
  styleUrls: ['./game.component.scss'],
  templateUrl: './game.component.html'
})
export class GameComponent implements OnInit {
  /**
   * Instantiate game component.
   */
  constructor(public appState: AppStateService, public game: GameService) { }

  /**
   * @inheritdoc
   */
  public ngOnInit() {
    document.getElementById('gameContainer').style.visibility = 'visible';
    document.getElementById('gameContainer').style.height = window.innerHeight + 'px';
  }
}
