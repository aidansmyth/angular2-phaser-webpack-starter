import { Component, OnInit } from '@angular/core';
import { AppStateService } from '../../services/app-state';

/**
 * About application component.
 */
@Component({
  selector: 'about',
  styleUrls: ['./about.component.scss'],
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  /**
   * Instantiate about component instance.
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
