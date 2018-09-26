import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DriveFileQuery {
  constructor(
    private http: HttpClient
  ) { }

  execute(fileId: string) {
    return this.http.get(`https://www.googleapis.com/drive/v3/files/${fileId}?fields=modifiedTime`);
  }
}
