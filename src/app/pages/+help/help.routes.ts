import { HelpComponent } from './help.component';

export const routes = [
  {
    path: '',
    children: [
      { path: '', component: HelpComponent }
    ]
  }
];
