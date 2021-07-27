import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItinerariesService {

  private API_SERVER = "http://localhost:80/itinerary";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllItineraries(): Observable<any>{
    return this.httpClient.get(this.API_SERVER)
  }
}
