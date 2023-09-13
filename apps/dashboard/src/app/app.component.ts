import { Component } from '@angular/core';
import { Link } from '@ng-microfrontend-studycase/components';

@Component({
  selector: 'ng-microfrontend-studycase-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dashboard';
  links: Link[] = [
    { path: '/', label: 'Home' },
    { path: '/first', label: 'First' },
    { path: '/second', label: 'Second' },
  ];
}
