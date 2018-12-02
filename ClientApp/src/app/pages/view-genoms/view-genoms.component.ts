import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-genoms',
  templateUrl: './view-genoms.component.html',
  styleUrls: ['./view-genoms.component.scss']
})
export class ViewGenomsComponent implements OnInit {
  headings = [
    { key: 'fileName', label: 'File name', width: '50%'},
    { key: 'size', label: 'File size', width: '15%'},
    { key: 'date', label: 'File Upload Date', width: '15%'},
    { key: 'result', label: 'Results', width: '15%' }

  ];

  dataTable = [
    {fileName: 'File1.txt', size: '12 Kb',  date: '10.20.2018', result: 'Result'},
    {fileName: 'File2.txt', size: '20 Kb',  date: '12.20.2018', result: 'Result'},
    {fileName: 'File3.txt', size: '182 Kb',  date: '12.20.2018', result: 'Result'},
    {fileName: 'File4.txt', size: '152 Kb',  date: '11.20.2018', result: 'Result'},
    {fileName: 'File5.txt', size: '122 Kb',  date: '09.20.2018', result: 'Result'},
    {fileName: 'File6.txt', size: '56 Kb',  date: '07.20.2018', result: 'Result'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
