import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-genes',
  templateUrl: './view-genes.component.html',
  styleUrls: ['./view-genes.component.scss']
})
export class ViewGenesComponent implements OnInit {
  headings = [
    { key: 'name', label: 'Name', width: '25%' },
    { key: 'length', label: 'Length', width: '15%' },
    { key: 'proteinDescription', label: 'Protein description', width: '25%' },
    { key: 'effects', label: 'Effects', width: '15%', link: './view-effects' }
  ];

  dataTable = [
    { name: 'Name 1', length: '92', proteinDescription: 'signam peptidase subunit-12', effects: 'View effects' },
    { name: 'Name 2', length: '169', proteinDescription: 'tpa: protein kinase', effects: 'View effects' },
    { name: 'Name 3', length: '614', proteinDescription: 'protein scai-like', effects: 'View effects' },
    { name: 'Name 4', length: '368', proteinDescription: 'kelc repeat-containing f-box ', effects: 'View effects' },
    { name: 'Name 5', length: '296', proteinDescription: 'homeodomain-like protein', effects: 'View effects' }
  ];

  constructor() {}

  ngOnInit() {}
}
