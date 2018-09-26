import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { routes } from './app-routes';
import { AppRootComponent } from './app-root/app-root.component';
import { AppRootModule } from './app-root/app-root.module';
import { CoreModule } from './core/core.module';
import { LogLevel } from './core/logger/logger-config';
import { GapiModule } from './gapi/gapi.module';
import { HomepageModule } from './homepage/homepage.module';
import { RecipesModule } from './recipes/recipes.module';
import { SecurityModule } from './security/security.module';
import { SetupModule } from './setup/setup.module';
import { SharedModule } from './shared/shared.module';
import { environment } from '@env/environment';

@NgModule({
  declarations: [],
  imports: [
    // The first two modules need to be BrowserAnimationsModule and SharedModule.
    BrowserAnimationsModule,
    SharedModule,
    AppRootModule,
    CoreModule.forRoot(
      { keyPrefix: 'TiffanysKitchen' },
      { logLevel: LogLevel.Warn }
    ),
    HomepageModule,
    RouterModule.forRoot(routes),
    SecurityModule,
    RecipesModule,
    SetupModule,
    GapiModule,
  ],
  providers: [],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
