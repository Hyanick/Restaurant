import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { DBFile } from '../models/DBFile';
import { map } from 'rxjs/operators';
import { Observable } from '.../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbFileService {
  url = 'http://localhost:8080/';
  //dbFile: DBFile;

  constructor(private http: HttpClient) { }

  public savePhoto(file: File) {
   /* const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'multipart/form-data',
        'boundary': 'simple-text'

      })
    };*/


    const formData = new FormData();
    formData.append('Image', file);

    const endpoint = (this.url + 'uploadFile');
   /* const req = new HttpRequest('POST', endpoint, formData, {
      reportProgress: true,
      responseType: 'text'
    });*/
    return  this.http.post(endpoint, formData)
    .pipe(map((res: any) => res));
    }


    public save1(formData: FormData): Observable<any> {
      return this.http.post('http://localhost:8080/uploadFile', formData);

    }



}
