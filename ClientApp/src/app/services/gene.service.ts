import { EffectModel } from './../shared/models/effect-model';
import { Injectable } from '@angular/core';
import { GeneModel } from '../shared/models/gene-model';

@Injectable({
  providedIn: 'root'
})
export class GeneService {

  effects: Array<EffectModel>;
  constructor() { }
}
