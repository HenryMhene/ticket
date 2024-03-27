import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event';
import { ApiService } from '../services/api.service'
import { get } from 'aws-amplify/api';
import { generateId } from '../utils'; // Adjust the path as needed


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

  createEvent(event: { [prop: string]: any }): Observable<any> {
    if (!event['EventID']) {
      event['EventID'] = generateId(); // Generate an EventID
    }
    return this.apiService.createItem(this.apiName, this.path, event);
  }

  updateEvent(event: { [prop: string]: any }): Observable<any> {
    return this.apiService.updateItem(this.apiName, this.path, event);
  }

  deleteEvent(): Observable<void> {
    return this.apiService.deleteItem(this.apiName, this.path);
  }

  // Add other methods for creating, updating, and deleting events as needed
}
