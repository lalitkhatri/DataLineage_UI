import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-set-properties',
  templateUrl: './data-set-properties.component.html',
  styleUrls: ['./data-set-properties.component.css']
})
export class DataSetPropertiesComponent {
  @Input() selectedNodeProperties: any; // Input property to receive selected node properties

  constructor() {}
}
