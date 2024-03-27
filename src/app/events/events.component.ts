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
  }
}
