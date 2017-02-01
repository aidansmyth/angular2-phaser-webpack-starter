import { Routes } from '@angular/router';
import { GameComponent } from './pages/game';
import { AboutComponent } from './pages/about';
import { NoContentComponent } from './pages/no-content';

export const ROUTES: Routes = [
  { path: '', component: GameComponent },
  { path: 'about', component: AboutComponent },
  { path: 'help', loadChildren: './pages/+help#HelpModule'},
  { path: '**', component: NoContentComponent },
];
