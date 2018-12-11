import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-genes',
  templateUrl: './view-genes.component.html',
  styleUrls: ['./view-genes.component.scss']
})
export class ViewGenesComponent implements OnInit {
  headings = [
    { key: 'name', label: 'Name', width: '25%'},
    { key: 'length', label: 'Length', width: '15%'},
    { key: 'proteinDescription', label: 'Protein description', width: '25%'},
    { key: 'graph', label: 'Graph', width: '15%' },
    { key: 'effects', label: 'Effects', width: '15%' }

  ];

  dataTable = [
    {name: 'Name 1', length: '92',  proteinDescription: 'signam peptidase subunit-12', graph: 'View graph', effects: 'View effects'},
    {name: 'Name 2', length: '169',  proteinDescription: 'tpa: protein kinase', graph: 'View graph', effects: 'View effects'},
    {name: 'Name 3', length: '614',  proteinDescription: 'protein scai-like', graph: 'View graph', effects: 'View effects'},
    {name: 'Name 4', length: '368',  proteinDescription: 'kelc repeat-containing f-box ', graph: 'View graph', effects: 'View effects'},
    {name: 'Name 5', length: '296',  proteinDescription: 'homeodomain-like protein', graph: 'View graph', effects: 'View effects'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
