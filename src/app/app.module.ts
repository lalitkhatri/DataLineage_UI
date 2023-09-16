import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { TreeModule  } from '@circlon/angular-tree-component'; // Import TreeModule
import { AppComponent } from './app.component';
import { DataSetsComponent } from './data-sets/data-sets.component';
import { DataSetPropertiesComponent } from './data-set-properties/data-set-properties.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    DataSetsComponent,
    DataSetPropertiesComponent,
    FileUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Add HttpClientModule to your imports
    TreeModule, // Add TreeModule to your imports
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
