import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventManagerService } from '@app/core/event-sourcing/event-manager.service';
import { LocalStorageService } from '@app/core/storage/local-storage.service';
import { SheetQuery } from '@app/gapi/sheet-query.service';
import { HideThrobberEvent, ShowThrobberEvent } from '@app/shared/throbber/throbber-events';
import { EMPTY } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Component({
  templateUrl: './sheet.component.html'
})
export class SheetComponent implements OnInit {
  errors: any;
  model: any;

  constructor(
    private eventManagerService: EventManagerService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private sheetQuery: SheetQuery,
  ) { }

  ngOnInit() {
    this.eventManagerService.raise(ShowThrobberEvent);

    this.sheetQuery.execute(this.localStorageService.get('spreadsheetId'), '', 'sheets/properties(title)').pipe(
      catchError(err => this.onError(err)),
      finalize(() => this.eventManagerService.raise(HideThrobberEvent))
    ).subscribe(model => this.onSheetQuery(model));
  }

  onSelect(item) {
    this.localStorageService.set('sheetId', item.properties.title);
    this.router.navigate(['/recipes']);
  }

  private onSheetQuery(model) {
    this.model = model;
  }

  private onError(errors) {
    this.errors = errors;
    return EMPTY;
  }
}
