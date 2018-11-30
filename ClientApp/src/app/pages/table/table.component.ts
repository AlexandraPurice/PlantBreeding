import { Component, OnInit } from '@angular/core';
import { Field } from './field';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  fields = [
    new Field( 1, 'File1', '2', '22.10.2018', 'result'),
    new Field( 2, 'File2', '2', '22.10.2018', 'result'),
    new Field( 3, 'File3', '2', '22.10.2018', 'result'),
    new Field( 4, 'File4', '2', '22.10.2018', 'result'),
    new Field( 5, 'File5', '2', '22.10.2018', 'result'),
  ];

  header = ['No.', 'File', 'Size', 'File Upload Date', 'Result'];

  constructor() { }

  ngOnInit() {
  }

}
