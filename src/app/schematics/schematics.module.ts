import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms/forms.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { SchematicsRoutingModule } from './schematics-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { TreeComponent } from './tree/tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    FormsComponent,
    NavigationComponent,
    TableComponent,
    DashboardComponent,
    TreeComponent,
    DragDropComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    SchematicsRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    DragDropModule,
  ]
})
export class SchematicsModule { }
