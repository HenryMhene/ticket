import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { get } from 'aws-amplify/api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getItems<T>(apiName: string, path: string): Observable<T[]> {
    return from(get({ apiName: apiName, path: path }).response).pipe(
      map((response: any) => response.data as T[])
    );
  }

  // Add other methods for creating, updating, and deleting items as needed
}
