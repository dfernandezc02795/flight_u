import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservesService {

  private API_SERVER = "http://localhost:80/reserve";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllReserves(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }
}
