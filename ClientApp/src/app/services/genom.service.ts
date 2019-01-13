import { Genome } from './../Genome';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneModel } from '../shared/models/gene-model';
import { map, retryWhen, delay } from 'rxjs/operators'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenomService {
  genes: Array<GeneModel>;

  constructor(private http: HttpClient) {
    this.endpointRegex = environment.regexURL;
  }

  endpointRegex: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getGenes(): Observable<Array<GeneModel>> {
    let values = this.http.get(this.endpointRegex + 'get').pipe(retryWhen(errors => errors.pipe(delay(60000))));
    return values as Observable<Array<GeneModel>>;
  }

  // getGenes(fileNumber): Observable<Array<GeneModel>> {
  //   let values = this.http.get(this.endpointRegex + 'get/' + fileNumber).pipe(retryWhen(errors => errors.pipe(delay(60000))));
  //   return values as Observable<Array<GeneModel>>;
  // }

  sendFile(selectedFile) {
    const uploadData = new FormData();
    uploadData.append('file', selectedFile, selectedFile.name);
    this.http.post(this.endpointRegex + 'post', uploadData).subscribe();
  }

}
