import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-effects',
  templateUrl: './view-effects.component.html',
  styleUrls: ['./view-effects.component.scss']
})
export class ViewEffectsComponent implements OnInit {

  gene = {
    name: 'BnaA01g00030D',
    chr: 'A01',
    startN: '2665',
    stopN: '5455',
    description: 'protein scai-like',
    effect: 'P: termination of F-protein coupled receptor signaling pathway'
  };

  constructor() { }

  ngOnInit() {
  }

}
