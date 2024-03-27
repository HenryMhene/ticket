import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../../models/event';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss'
})
export class EventListComponent implements OnInit {
  events: Event[] | undefined;

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000, // Autoplay interval timeout.
    autoplayHoverPause: true, // Pause on mouse hover.
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
loading: any;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.loading = true;

    // setTimeout(() => {


    // }, 1500);


    this.eventService.getEvents().subscribe((events: Event[]) => {
      this.events = events;
      this.loading = false;
    });
  }
}
