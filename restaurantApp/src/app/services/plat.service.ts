import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';
import { Plat } from '../models/plat';
import { NgForm } from '@angular/forms';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  form: NgForm;

   url = 'http://localhost:8080/';

  constructor( private http: HttpClient) { }


  getListPlat(): Observable<any> {
    const listPlat = this.http.get(this.url + 'listPlats');
    //.pipe(map((res: any) => res));
    return listPlat;
  }

  savePlat(plat: Plat): Observable<any> {
    const platSave = this.http.post( this.url + 'savePlat', plat);
    //.pipe(map((res: any) => res));
    return platSave;
  }

  deletePlat(id: number): Observable<any> {
    const deletePlat = this.http.delete(this.url + 'deletePlat/' + id);
    //.pipe(map((res: any) => res));
    return deletePlat;
  }

  getPlat(id: number) {
    const getPlat = this.http.get(this.url + 'getPlat/' + id)
    .pipe(map((res: any) => res));
    return getPlat;
  }

  editPlat(plat: Plat) {
    const editPlat = this.http.put(this.url + 'editPlat/' + plat.id, plat);
    //.pipe(map((res: any) => res));
    return editPlat;
  }

  getFiles(id: number): any {
    return this.http.get(this.url + 'getUploadfiles/' + id, { responseType: 'blob' }).pipe(map(
    (res) => {
      console.log(res);
        //return new Blob([res.blob() ], { type: 'image/png' });
    }));
  }


}


