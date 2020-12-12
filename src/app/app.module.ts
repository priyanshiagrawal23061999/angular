import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import {SchematicsModule } from '../app/schematics/schematics.module'
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
   
    SchematicsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
