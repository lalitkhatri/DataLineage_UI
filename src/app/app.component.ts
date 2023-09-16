import { Component } from '@angular/core';
import { DataSetsComponent } from './data-sets/data-sets.component';
import { DataSetPropertiesComponent } from './data-set-properties/data-set-properties.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lineage-ui';
}
