import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  size = 40;
  font: string = 'Arial';
  color: string = 'red';

  classes = ['green-title', 'small-title']

  underline = 'underline-title';
}
