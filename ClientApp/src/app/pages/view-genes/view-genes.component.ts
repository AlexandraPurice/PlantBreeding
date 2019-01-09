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
    { key: 'start', label: 'Start', width: '25%' },
    { key: 'stop', label: 'Stop', width: '15%' },
    { key: 'gene', label: 'Effects', width: '15%', link: './view-effects' }
  ];

  dataTable: Array<GeneModel>;

  model: string = null;
  filter = '';
  filteredArray = this.dataTable;

  constructor(private _genomService: GenomService) {}

  ngOnInit() {
    this._genomService.getGenes().subscribe(data => {
      this.genes = data;
      this.dataTable = this.genes;
    });
  }

  orderBy(field: string) {
    let data = [];
    data = this.filteredArray;
    if (field === 'idAsc') {
      return data.sort((a, b) => a[field] > b[field] ? 1 : a[field] === b[field] ? 0 : -1);
    }
    if (field === 'idDesc') {
      return data.sort((a, b) => a[field] < b[field] ? 1 : a[field] === b[field] ? -1 : 0);
    }
    if (field === 'lengthAsc') {
      return data.sort((a, b) => a[field] > b[field] ? 1 : a[field] === b[field] ? 0 : -1);
    }
    if (field === 'lengthDesc') {
      return data.sort((a, b) => a[field] < b[field] ? 1 : a[field] === b[field] ? -1 : 0);
    }
    if (field === 'proteinAsc') {
      return data.sort((a, b) => a[field] > b[field] ? 1 : a[field] === b[field] ? 0 : -1);
    }
    if (field === 'proteinDesc') {
      return data.sort((a, b) => a[field] < b[field] ? 1 : a[field] === b[field] ? -1 : 0);
    }
    return data;
  }


  filterNow() {
    this.filteredArray = [];
    if (this.filter === '') {
      this.filteredArray = this.dataTable;
    } else {
      for (let value of this.dataTable) {
        if (value.id.indexOf(this.filter) > -1) {
          this.filteredArray.push(value);
        }
      }
    }
  }

  changeFilter(value: string) {
    this.filter = value;
    this.filterNow();
  }
}
