import { ErrorHandler, Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private endpoint = "http://192.168.0.195:8080"

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get(this.endpoint + "/users")
  }

  public findById(id: Number): Observable<any> {
    return this.http.get(this.endpoint + `/users/${id}`).pipe(
    )
  }

  public create(data: any): Observable<any> {
    return this.http.post(this.endpoint + "/users", data, { headers: new HttpHeaders({ "Content-Type": "application/json" }) })
  }

  public update(id: Number, data: any): Observable<any> {
    return this.http.put(this.endpoint + `/users/${id}`, data, { headers: new HttpHeaders({ 'Content-Type': "application/json" }) })
  }

  public delete(id: number): Observable<any> {
    console.log(`Trying to delete user with id: ${id}`)
    return this.http.delete(this.endpoint + `/users/${id}`).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 0) {
      console.log(`An error occurred: ${error.error}`)
    } else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`)
    }
    
    return throwError(() => new Error("Something goes wrong!"))
  }

}
