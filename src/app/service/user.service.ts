import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class UserService {
  list = [{ type: "Fiat", model: "500", color: "white" }
    , { type: "Fiat", model: "500", color: "white" }];
  url = 'http://dummy.restapiexample.com/api/v1';
  constructor(private http: HttpClient) {
  }


  private errorHandler(error: HttpErrorResponse) {
    if (error) {
      console.log(error);
    }
    return throwError('this is error');
  }
}
