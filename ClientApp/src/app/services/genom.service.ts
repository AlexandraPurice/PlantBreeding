import { Genome } from './../Genome';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GeneModel } from '../shared/models/gene-model';

@Injectable({
  providedIn: 'root'
})
export class GenomService {

  private genomData = [];
  private API_URL = '';


  constructor(private http: HttpClient) {
   }

  sendFile($file): Observable<boolean> {
      return of(false);
  }

  getData(): Observable<any[]> {
      return this.http.get<Array<Genome>>(this.API_URL + '/GetAllGenomes');
  }

}
