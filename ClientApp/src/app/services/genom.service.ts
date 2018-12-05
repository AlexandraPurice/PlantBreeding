import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GenomService {

  private genomData = [];

  constructor() { }

  sendFile($file): Observable<boolean> {
      return of(false);
  }

  getData(): Observable<any[]> {
      return of(this.genomData);
  }

}
