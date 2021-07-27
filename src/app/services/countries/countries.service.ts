import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private API_SERVER = "http://localhost:80/country";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllCountries(): Observable<any>{
    return this.httpClient.get(this.API_SERVER)
  }
}
