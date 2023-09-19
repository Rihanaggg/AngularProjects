import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cycle } from './cycle';

@Injectable({
  providedIn: 'root'
})
export class CycleserviceService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private _http:HttpClient) { }

  getData(){
    return this._http.get('http://localhost:8080/api/list');
  }

  public save(cycle:Cycle): Observable<Cycle> {
    // console.log(cycle);
    return this._http.post<Cycle>(`http://localhost:8080/api/addCycle`, cycle, this.httpOptions);
  }

}
