import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { RecipesComponent } from './recipes.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [RecipesComponent]
})
export class RecipesModule { }
