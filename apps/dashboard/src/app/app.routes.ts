import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'first',
    loadChildren: () =>
      loadRemoteModule('first', './Module').then((m) => m.RemoteEntryModule),
  },
];
