import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirportsService {

  private API_SERVER = "http://localhost:80/airport"

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllAirports(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }
}
