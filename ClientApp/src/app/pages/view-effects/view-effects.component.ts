import { GeneService } from './../../services/gene.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EffectModel } from 'src/app/shared/models/effect-model';

@Component({
  selector: 'app-view-effects',
  templateUrl: './view-effects.component.html',
  styleUrls: ['./view-effects.component.scss']
})
export class ViewEffectsComponent implements OnInit {
  effects: Array<EffectModel>;
  gene = {
    name: 'BnaA01g00030D',
    chr: 'A01',
    startN: '2665',
    stopN: '5455',
    description: 'protein scai-like',
    effect: 'P: termination of F-protein coupled receptor signaling pathway'
  };

  constructor(private _router: ActivatedRoute,
    private _geneService: GeneService) { }

  ngOnInit() {
    this._router.params.subscribe(params => {
      console.log(params['id']);
      // for geneId
    });

    this._geneService.getEffects().subscribe(data => {
      this.effects = data;
      console.log(data);
    });

  }

}
