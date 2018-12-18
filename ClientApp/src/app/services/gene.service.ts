import { EffectModel } from './../shared/models/effect-model';
import { Injectable } from '@angular/core';
import { GeneModel } from '../shared/models/gene-model';

@Injectable({
  providedIn: 'root'
})
export class GeneService {

  genes: Array<GeneModel>;
  effects: Array<EffectModel>;
  constructor() { }
}
