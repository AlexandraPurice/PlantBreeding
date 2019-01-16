import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EffectModel } from './../shared/models/effect-model';
import { Injectable } from '@angular/core';
import { GeneModel } from '../shared/models/gene-model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneService {

  effects: Array<EffectModel> = new Array();

  constructor(private http: HttpClient) {
    this.endpointPrediction = environment.predictionURL;
  }

  endpointPrediction: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getEffects(gene): Observable<Array<EffectModel>>  {
    const uploadData = new FormData();
    uploadData.append('gene', gene);
    this.http.post(this.endpointPrediction + 'effects', uploadData).subscribe(z => {
      for (var i = 0; i < z.length; i++){
        this.effects.push({importance: z[i][0], effect: z[i][1]});
        console.log(z[i]);
      }
      console.log(this.effects);
    });
    return of(this.effects) as Observable<Array<EffectModel>>;
  }
}
