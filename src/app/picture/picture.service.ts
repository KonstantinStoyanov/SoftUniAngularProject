import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PictureService {
  constructor(public http: HttpClient) { }

  mapArr(arr: any) {
    const ids = Object.keys(arr);
    const mappedArr: any = [];
    ids.forEach(id => {
      mappedArr.push({ id, ...arr[id] });
    });

    return mappedArr;
  }

  loadPicture(): Observable<any> {
    const url = 'https://gaeva-2-default-rtdb.firebaseio.com/picture.json'

    return this.http.get<any>(url).pipe(map(x => this.mapArr(x)))
  }

}

