import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EffectModel } from './../shared/models/effect-model';
import { Injectable } from '@angular/core';
import { GeneModel } from '../shared/models/gene-model';

@Injectable({
  providedIn: 'root'
})
export class GeneService {

  effects: Array<EffectModel> = [
      {
        goId: 'GO:0042988',
        effect: 'X11-like protein binding'
      },
      {
        goId: 'GO:0032182',
        effect: 'ubiquitin-like protein binding'
      },
      {
        goId: 'GO:0010408',
        effect: 'fasciclin-like arabinogalactan protein metabolic process'
      },
      {
        goId: 'GO:0019787',
        effect: 'ubiquitin-like protein transferase activity'
      },
      {
        goId: 'GO:0042153',
        effect: 'obsolete RPTP-like protein binding'
      },
      {
        goId: 'GO:0061659',
        effect: 'ubiquitin-like protein ligase activity'
      },
      {
        goId: 'GO:0120114',
        effect: 'Sm-like protein family complex'
      },
      {
        goId: 'GO:0044389',
        effect: 'ubiquitin-like protein ligase binding'
      },
      {
        goId: 'GO:0017052',
        effect: 'obsolete insulin-like growth factor binding protein'
      },
      {
        goId: 'GO:0019783',
        effect: 'ubiquitin-like protein-specific protease activity'
      },
      {
        goId: 'GO:0016942',
        effect: 'insulin-like growth factor binding protein complex'
      },
      {
        goId: 'GO:0070137',
        effect: 'ubiquitin-like protein-specific endopeptidase activity'
      },
      {
        goId: 'GO:0070138',
        effect: 'ubiquitin-like protein-specific isopeptidase activity'
      },
      {
        goId: 'GO:0061650',
        effect: 'ubiquitin-like protein conjugating enzyme activity'
      },
      {
        goId: 'GO:0140035',
        effect: 'ubiquitination-like modification-dependent protein binding'
      },
      {
        goId: 'GO:0044390',
        effect: 'ubiquitin-like protein conjugating enzyme binding'
      },
      {
        goId: 'GO:0031386',
        effect: 'protein tag'
      },
      {
        goId: 'GO:0035354',
        effect: 'Toll-like receptor 1-Toll-like receptor 2 protein complex'
      },
      {
        goId: 'GO:0035355',
        effect: 'Toll-like receptor 2-Toll-like receptor 6 protein complex'
      },
      {
        goId: 'GO:0001627',
        effect: 'obsolete leucine-rich G-protein receptor-like receptor activity'
      },
      {
        goId: 'GO:0001629',
        effect: 'obsolete G-protein receptor 45-like receptor activity'
      },
      {
        goId: 'GO:1990121',
        effect: 'H-NS complex'
      },
      {
        goId: 'GO:0061735',
        effect: 'DNM1L-mediated stimulation of mitophagy in response to mitochondrial depolarization'
      },
      {
        goId: 'GO:0001584',
        effect: 'obsolete rhodopsin-like receptor activity'
      },
      {
        goId: 'GO:0001633',
        effect: 'obsolete secretin-like receptor activity'
      }
    ];
  constructor(private _http: HttpClient) { }

  getEffects(): Observable<Array<EffectModel>>  {
    return of(this.effects);
  }


}
