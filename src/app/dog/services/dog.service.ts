import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { DogModel, IDog } from '../models';

@Injectable()
export class DogService {

  constructor(public http: HttpClient) {
  }

  public getAllDogs(): Observable<DogModel> {
    return this.http.get('/api/dogs').pipe(map(response => {
      return Array.prototype.map.call(response, (item: IDog) => {
        return new DogModel(item);
      });
    }));
  }

  public getDogById(id: string): Observable<DogModel> {
    return this.http.get(`/api/dogs/${id}`).pipe(map((item: IDog) => {
      return new DogModel(item);
    }));
  }

  public createDog(data: IDog): Observable<Object> {
    return this.http.post('/api/dogs', data);
  }

  public editDog(id: number | string, data: IDog): Observable<Object> {
    return this.http.put(`/api/dogs/${id}`, data);
  }

  public deleteDog(id: number | string): Observable<Object> {
    return this.http.delete(`/api/dogs/${id}`);
  }
}
