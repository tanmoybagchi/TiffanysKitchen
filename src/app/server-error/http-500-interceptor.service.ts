import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class Http500Interceptor implements HttpInterceptor {
  constructor(
    private router: Router,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Pass on the cloned request instead of the original request.
    return next.handle(req.clone()).pipe(
      catchError(err => {
        if (!(err instanceof HttpErrorResponse)) {
          return Observable.throw(err);
        }

        if (err.status !== 500) {
          return Observable.throw(err);
        }

        this.router.navigate(['/error']);
        return EMPTY;
      })
    );
  }
}
