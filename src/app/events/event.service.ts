import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event';
import { ApiService } from '../services/api.service'
import { get } from 'aws-amplify/api';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiName = 'ticketApi'; // Replace with your actual API name
  private path = '/events'; // Replace with your actual path

  constructor(private apiService: ApiService) { }

  getEvents(): Observable<Event[]> {
    return this.apiService.getItems<Event>(this.apiName, this.path);
  }

  // Add other methods for creating, updating, and deleting events as needed
}
