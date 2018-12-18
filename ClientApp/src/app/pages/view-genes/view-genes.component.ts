import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-genes',
  templateUrl: './view-genes.component.html',
  styleUrls: ['./view-genes.component.scss']
})
export class ViewGenesComponent implements OnInit {
  headings = [
    { key: 'id', label: 'Id', width: '25%' },
    { key: 'name', label: 'Name', width: '25%' },
    { key: 'length', label: 'Length', width: '15%' },
    { key: 'proteinDescription', label: 'Protein description', width: '25%' },
    { key: 'effects', label: 'Effects', width: '15%', link: './view-effects' }
  ];

  dataTable = [
    { id: '1', name: 'Name 1', length: '92', proteinDescription: 'signam peptidase subunit-12', effects: 'View effects' },
    { id: '2', name: 'Name 2', length: '169', proteinDescription: 'tpa: protein kinase', effects: 'View effects' },
    { id: '3', name: 'Name 3', length: '614', proteinDescription: 'protein scai-like', effects: 'View effects' },
    { id: '4', name: 'Name 4', length: '368', proteinDescription: 'kelc repeat-containing f-box ', effects: 'View effects' },
    { id: '5', name: 'Name 5', length: '296', proteinDescription: 'homeodomain-like protein', effects: 'View effects' }
  ];

  constructor() {}

  ngOnInit() {}
}
