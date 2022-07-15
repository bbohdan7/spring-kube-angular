import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { map } from 'rxjs/operators'
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private endpoint = "http://192.168.0.137:8080"

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get(this.endpoint + "/users")
  }

  public findById(id: Number): Observable<any> {
    return this.http.get(this.endpoint + `/users/${id}`)
  }

  public create(data: any): Observable<any> {
    return this.http.post(this.endpoint + "/users", data, { headers: new HttpHeaders({ "Content-Type": "application/json" }) })
  }

  public update(id: Number, data: any): Observable<any> {
    return this.http.put(this.endpoint + `/users/${id}`, data, { headers: new HttpHeaders({ 'Content-Type': "application/json" }) })
  }

}
