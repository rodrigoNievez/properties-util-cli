import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileSelectDirective, FileDropDirective} from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { MergeComponent } from './modules/merge/merge.component';

import { RoutesModule } from './app.routes';
 
@NgModule({
  declarations: [
    AppComponent,
    MergeComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
