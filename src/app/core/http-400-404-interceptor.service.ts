import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Result } from './result';

@Injectable()
export class Http400404Interceptor implements HttpInterceptor {
  private readonly XSSI_PREFIX = /^\)\]\}',?\n/;

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Pass on the cloned request instead of the original request.
    return next.handle(req.clone()).pipe(
      catchError(err => {
        if (!(err instanceof HttpErrorResponse)) {
          return throwError(err);
        }

        if (err.status !== 400 && err.status !== 404) {
          return throwError(err);
        }

        if (err.status === 404) {
          const res = new Result();
          res.addError('NotFound');
          return throwError(res);
        }

        return throwError(err.error);
      })
    );
  }
}
