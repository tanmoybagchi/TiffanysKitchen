import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatCardModule, MatChipsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatProgressSpinnerModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { BytesPipe } from './bytes.pipe';
import { GeneralErrorComponent } from './general-error/general-error.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { InputTextComponent } from './input-text/input-text.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { ThrobberComponent } from './throbber/throbber.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    RouterModule,
    /* MatButtonToggleModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule, */
  ],
  declarations: [
    BytesPipe,
    GeneralErrorComponent,
    InputIntegerComponent,
    InputSearchComponent,
    InputTextComponent,
    PageTitleComponent,
    ThrobberComponent,
  ],
  entryComponents: [],
  exports: [
    BytesPipe,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    GeneralErrorComponent,
    InputIntegerComponent,
    InputSearchComponent,
    InputSearchComponent,
    InputTextComponent,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    PageTitleComponent,
    RouterModule,
    ThrobberComponent,
    /* MatButtonToggleModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule, */
  ],
  providers: []
})
export class SharedModule {
  constructor() { }
}
