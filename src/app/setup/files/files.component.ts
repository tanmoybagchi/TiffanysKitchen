import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventManagerService } from '@app/core/event-sourcing/event-manager.service';
import { Result } from '@app/core/result';
import { LocalStorageService } from '@app/core/storage/local-storage.service';
import { DriveSheetsQuery } from '@app/gapi/drive-sheets-query.service';
import { DriveUploadCommand } from '@app/gapi/drive-upload-command.service';
import { HideThrobberEvent, ShowThrobberEvent } from '@app/shared/throbber/throbber-events';
import { EMPTY } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Component({
  templateUrl: './files.component.html'
})
export class FilesComponent implements OnInit {
  file: File;
  errors: any;
  model: any;
  @ViewChild('newFile') private newFileElRef: ElementRef;

  constructor(
    private eventManagerService: EventManagerService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private route: ActivatedRoute,
    private sheetsQuery: DriveSheetsQuery,
    private uploadCommand: DriveUploadCommand,
  ) { }

  ngOnInit() {
    this.eventManagerService.raise(ShowThrobberEvent);

    this.sheetsQuery.execute().pipe(
      catchError(err => this.onError(err)),
      finalize(() => this.eventManagerService.raise(HideThrobberEvent))
    ).subscribe(model => this.onSheetsQuery(model));
  }

  onAddNewClick() {
    this.newFileElRef.nativeElement.click();
  }

  onNewFileChange($event: Event) {
    $event.stopPropagation();
    $event.preventDefault();

    const files = (<HTMLInputElement>this.newFileElRef.nativeElement).files;
    if (!files.length) {
      return;
    }

    this.file = files[0];

    if (!this.isValidFiletype(this.file)) {
      const result = new Result();
      result.addError('This is not a spreadsheet.');
      this.errors = result.errors;
      return;
    }

    this.eventManagerService.raise(ShowThrobberEvent);

    this.uploadCommand.execute(this.file).pipe(
      catchError(err => this.onError(err)),
      finalize(() => this.eventManagerService.raise(HideThrobberEvent))
    ).subscribe(_ => this.onFileSelect(_));
  }

  onFileSelect(item) {
    this.localStorageService.set('spreadsheetId', item.id);
    this.router.navigate(['sheet'], {relativeTo: this.route});
  }

  private onSheetsQuery(model) {
    this.model = model;
  }

  private isValidFiletype(file: File) {
    return String.isNullOrWhitespace(file.type) ?
      file.name.endsWith('.csv') || file.name.endsWith('.xls') || file.name.endsWith('.xlsx') :
      file.type === 'application/vnd.ms-excel' || file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  }

  private onError(errors) {
    this.errors = errors;
    return EMPTY;
  }
}
