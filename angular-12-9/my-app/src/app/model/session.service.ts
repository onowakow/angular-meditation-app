import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';
import { Session } from './session.model';

@Injectable()
export class SessionService {
  sessionsUrl = 'http://localhost:3000/api/sessions';

  constructor(private http: HttpClient) {}

  getSessions() {
    return this.http
      .get<Session>(this.sessionsUrl)
      .pipe(retry(3), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }

    return throwError(
      () => new Error('Something bad happened. Try again later.')
    );
  }
}
