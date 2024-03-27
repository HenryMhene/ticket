import { Observable, from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { get, post, put, del } from 'aws-amplify/api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getItems<T>(apiName: string, path: string): Observable<T[]> {
    return from(get({ apiName: apiName, path: path }).response).pipe(
      mergeMap(response => from(response.body.json())),
      map((response: any) => response as T[])
    );
  }

  createItem(apiName: string, path: string, item: { [prop: string]: any }): Observable<any> {
    return from(post({ apiName: apiName, path: path, options: { body: item } }).response).pipe(
      mergeMap(response => from(response.body.json())),
      map((response: any) => response)
    );
  }

  updateItem(apiName: string, path: string, item: { [prop: string]: any }): Observable<any> {
    return from(put({ apiName: apiName, path: path, options: { body: item } }).response).pipe(
      mergeMap(response => from(response.body.json())),
      map((response: any) => response)
    );
  }

  deleteItem(apiName: string, path: string): Observable<void> {
    return from(del({ apiName: apiName, path: path }).response).pipe(
      map(() => {})
    );
  }

  // Add other methods for creating, updating, and deleting items as needed
}
