import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-event-dashboard',
  templateUrl: './my-event-dashboard.component.html',
  styleUrls: ['./my-event-dashboard.component.css']
})
export class MyEventDashboardComponent implements OnInit {

  constructor(    private router: Router) { }

  ngOnInit(): void {
  }
}
