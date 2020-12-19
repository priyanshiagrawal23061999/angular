import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {SchematicsModule } from '../app/schematics/schematics.module';
import { HighlightDirective } from './highlight.directive';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import {AuthModule} from './auth/auth.module';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons'
 
@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
   
    SchematicsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,

    AuthModule,

    NbThemeModule.forRoot({ name: 'dark' }),

    NbLayoutModule,

    NbEvaIconsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
