import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataSetsComponent } from './data-sets/data-sets.component';
import { DataSetPropertiesComponent } from './data-set-properties/data-set-properties.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

const routes: Routes = [
  { path: '', redirectTo: '/data-sets', pathMatch: 'full' }, // Default route
  { path: 'data-sets', component: DataSetsComponent },
  { path: 'data-set-properties/:id', component: DataSetPropertiesComponent },
  { path: 'file-upload', component: FileUploadComponent },
  // Add more routes as needed for other components
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
