import { Genome } from './../Genome';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneModel } from '../shared/models/gene-model';
import { map, timeout } from 'rxjs/operators'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenomService {
  private genomData = [];
  private API_URL = '';
  genes: Array<GeneModel>;

  constructor(private http: HttpClient) {
    this.endpointRegex = environment.regexURL;
    this.endpointPrediction = environment.predictionURL;
  }

  endpointRegex: string;
  endpointPrediction: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getGenes(): Observable<Array<GeneModel>> {
    return this.http.get(this.endpointRegex + 'get') as Observable<Array<GeneModel>>;
    // timeout(60);
  }

  sendFile(selectedFile) {
    const uploadData = new FormData();
    uploadData.append('file', selectedFile, selectedFile.name);
    this.http.post(this.endpointRegex + 'post', uploadData).subscribe();
  }
  sendGene(): Observable<boolean> {
    return of(false);
  }

  getData(): Observable<any[]> {
    return this.http.get<Array<Genome>>(this.API_URL + '/GetAllGenomes');
  }
}
