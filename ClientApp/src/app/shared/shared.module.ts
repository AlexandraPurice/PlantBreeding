import { RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from './components/pipes/sort-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TableComponent,
    SortPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    TableComponent
  ],
  providers: [
    SortPipe
  ]
})
export class SharedModule { }
