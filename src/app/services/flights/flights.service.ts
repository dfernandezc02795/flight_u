import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  private API_SERVER = "http://localhost:80/flight"

  constructor(private httpClient: HttpClient) { }

  public getAllFlights(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public getFlightNumber(flightNumber: any): Observable<any>{
    console.log("Entro1 " + flightNumber);
    return this.httpClient.get(this.API_SERVER + "/query?flightNumber=" + flightNumber);
  }
}
