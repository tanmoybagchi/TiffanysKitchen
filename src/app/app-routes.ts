import { Routes } from '@angular/router';
import { HomepageComponent } from '@app/homepage/homepage.component';
import { RecipesComponent } from '@app/recipes/recipes.component';
import { SignInComponent } from '@app/security/sign-in/sign-in.component';
import { ServerErrorComponent } from '@app/server-error/server-error.component';
import { FilesComponent } from '@app/setup/files/files.component';
import { SheetComponent } from '@app/setup/sheet/sheet.component';

export const routes: Routes = [
  { path: 'error', component: ServerErrorComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'setup', component: FilesComponent },
  { path: 'setup/sheet', component: SheetComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: '', component: HomepageComponent, pathMatch: 'full' },
];
