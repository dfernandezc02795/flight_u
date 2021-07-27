import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassengersService {

  private API_SERVER = "http://localhost:80/passenger";

  constructor(private httpClient: HttpClient) { }

  public getAllPassengers(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

  public savePassenger(passenger: any): Observable<any>{
    return this.httpClient.post(this.API_SERVER, passenger);
  }

  public editPassenger(passenger: any): Observable<any> {
    return this.httpClient.put(this.API_SERVER +"/" + passenger.idPassenger, passenger);
  }
  
  public deletePassenger(id:any):Observable<any>{
    return this.httpClient.delete(this.API_SERVER +"/"+ id );
  }

  public searchPassenger(numberDocument: any): Observable<any> {
    return this.httpClient.get(this.API_SERVER + "/query?document=" + numberDocument );
  }
}
