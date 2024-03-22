import { Component, OnInit } from '@angular/core';
import { get } from 'aws-amplify/api';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class eventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getEvents();
    console.log('Got Events')

  }

  // curl https://lk2dwt8fpa.execute-api.ap-southeast-2.amazonaws.com/dev/events

  async getEvents() {
    try {
      const restOperation = get({
        apiName: 'ticketApi',
        path: '/events'
      });
      const response = await restOperation.response;
      console.log('GET call succeeded: ', response);

      const { body } = await restOperation.response;

      const json = await body.json();

      console.log(json);

    } catch (error) {
      console.log('GET call failed: ', error);
    }
  }

}
