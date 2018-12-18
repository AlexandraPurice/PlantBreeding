import { RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from './components/pipes/sort-pipe';

@NgModule({
  declarations: [
    TableComponent,
    SortPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TableComponent
  ],
  providers: [
    SortPipe
  ]
})
export class SharedModule { }
