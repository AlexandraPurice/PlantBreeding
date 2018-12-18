import { GenomService } from './../../services/genom.service';
import { Component, OnInit } from '@angular/core';
import { GeneModel } from 'src/app/shared/models/gene-model';

@Component({
  selector: 'app-view-genes',
  templateUrl: './view-genes.component.html',
  styleUrls: ['./view-genes.component.scss']
})
export class ViewGenesComponent implements OnInit {
  genes: Array<GeneModel>;
  // de pus datele primite aici
  headings = [
    { key: 'id', label: 'Id', width: '25%' },
    { key: 'length', label: 'Length', width: '15%' },
    { key: 'proteinDescription', label: 'Protein description', width: '25%' },
    { key: 'effects', label: 'Effects', width: '15%', link: './view-effects' }
  ];

  dataTable = [
    { id: '1',  length: '92', proteinDescription: 'signam peptidase subunit-12', effects: 'View effects' },
    { id: '2',  length: '169', proteinDescription: 'tpa: protein kinase', effects: 'View effects' },
    { id: '3', length: '614', proteinDescription: 'protein scai-like', effects: 'View effects' },
    { id: '4',  length: '368', proteinDescription: 'kelc repeat-containing f-box ', effects: 'View effects' },
    { id: '5',  length: '296', proteinDescription: 'homeodomain-like protein', effects: 'View effects' }
  ];

  constructor(private _genomService: GenomService) {}

  ngOnInit() {
    this._genomService.getGenes().subscribe(data => {
      this.genes = data;
    });
  }
}
