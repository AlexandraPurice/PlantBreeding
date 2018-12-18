import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-genoms',
  templateUrl: './view-genoms.component.html',
  styleUrls: ['./view-genoms.component.scss']
})
export class ViewGenomsComponent implements OnInit {
  headings = [
    { key: 'fileName', label: 'File name', width: '50%', link: ''},
    { key: 'size', label: 'File size', width: '15%', link: ''},
    { key: 'date', label: 'File Upload Date', width: '15%', link: ''},
    { key: 'result', label: 'Results', width: '15%', link: '/view-genes' }

  ];

  dataTable = [
    {fileName: 'File1.txt', size: '12 Kb',  date: '10.20.2018', result: 'Result'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
