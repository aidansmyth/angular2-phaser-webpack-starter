import { Component, OnInit } from '@angular/core';
import { AppStateService } from '../../services/app-state';

@Component({
  selector: 'help',
  styleUrls: ['help.component.scss'],
  templateUrl: './help.component.html',
})
export class HelpComponent implements OnInit {
  /**
   * Instantiate game component.
   */
  constructor(public appState: AppStateService) { }

  /**
   * @inheritdoc
   */
  public ngOnInit() {
    const gameContainer = document.getElementById('gameContainer');

    if (gameContainer) {
      gameContainer.style.visibility = 'hidden';
      gameContainer.style.height = '1px';
    }
  }
}
