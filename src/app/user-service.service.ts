import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private endpoint = "http://192.168.0.137:8080"

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get(this.endpoint + "/users")
  }  

}
