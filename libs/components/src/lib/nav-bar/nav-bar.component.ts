import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

export interface Link {
  path: string;
  label: string;
}

@Component({
  selector: 'ng-microfrontend-studycase-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  @Input() links!: Link[];

  @ContentChild(TemplateRef) linkTemplateRef!: TemplateRef<unknown>;
}
