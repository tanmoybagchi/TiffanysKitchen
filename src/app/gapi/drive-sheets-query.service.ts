import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DriveSheetsQuery {
  constructor(
    private http: HttpClient
  ) { }

  execute(name = '') {
    const searchParams: string[] = [];

    searchParams.push(`mimeType='application/vnd.google-apps.spreadsheet'`);
    if (!String.isNullOrWhitespace(name)) {
      searchParams.push(`name='${name}'`);
    }
    searchParams.push(`trashed=false`);

    const queryParams = `q=${encodeURIComponent(searchParams.join(' and '))}&fields=files(id,name,modifiedTime)`;

    return this.http.get(`https://www.googleapis.com/drive/v3/files?${queryParams}`);
  }
}
