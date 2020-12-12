import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SchematicsModule} from '../app/schematics/schematics.module'

const routes: Routes = [
  { path: 'schematics', loadChildren: () =>
  import('./schematics/schematics.module').then((m) => m.SchematicsModule), }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
