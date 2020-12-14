import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeComponent } from './tree/tree.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';

const routes: Routes = [
 {path: 'schematics',
children:[
  {path: "forms", component: FormsComponent},
  {path: "navigation", component: NavigationComponent},
  {path: "table", component: TableComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "tree", component: TreeComponent},
  {path: "dragdrop", component: DragDropComponent},
  {path: '', component: DashboardComponent},
  {path: '**', component: DashboardComponent}



]}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SchematicsRoutingModule { }
