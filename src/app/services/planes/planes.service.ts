import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  private API_SERVER = "http://localhost:80/plane";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllPlanes(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }
}
