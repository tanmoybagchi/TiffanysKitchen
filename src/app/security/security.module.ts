import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { Http401InterceptorService } from './http-401-interceptor.service';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    SignInComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Http401InterceptorService, multi: true, },
  ]
})
export class SecurityModule { }
