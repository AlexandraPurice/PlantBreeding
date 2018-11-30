import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['../../shared/shared.module.scss',
'./table.component.scss']
})

export class TableComponent implements OnInit {

  @Input() headings;
  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
