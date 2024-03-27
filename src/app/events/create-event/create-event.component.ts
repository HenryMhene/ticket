import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';
import { GlobalConstants } from '../../common/global-constants';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { EventService } from '../event.service';
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})

export class CreateEventComponent implements OnInit {

  eventForm: FormGroup = new FormGroup({
    eventName: new FormControl("", [Validators.minLength(2)]),
    description: new FormControl("", [Validators.required]),
    // startDateTime: new FormControl("", [Validators.required]),
    // endDateTime: new FormControl("", [Validators.required]),
    venueID: new FormControl("", [Validators.required]),
    organizerUserID: new FormControl("", [Validators.required]),
    categories: new FormControl([]), // Initialize as empty array
    tags: new FormControl([]), // Initialize as empty array
    imageURL: new FormControl(""),
    capacity: new FormControl(0), // Initialize as 0
    ticketTypes: new FormControl([]), // Initialize as empty array
    // salesStartDate: new FormControl("", [Validators.required]),
    // salesEndDate: new FormControl("", [Validators.required]),
    status: new FormControl(""),
    externalLinks: new FormControl([]), // Initialize as empty array
    // createdDateTime: new FormControl("", [Validators.required]),
    // lastUpdatedDateTime: new FormControl("", [Validators.required])
  });



  title = GlobalConstants.siteName;
  loading = false;
  mobileQuery: MediaQueryList;
  errorMessage: string | undefined;
  value: any;

  private _mobileQueryListener: () => void;

  constructor(
    media: MediaMatcher,
    changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private eventService: EventService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 737px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit() {
  }

  get eventNameInput() {
    return this.eventForm.get("eventName");
  }

  get descriptionInput() {
    return this.eventForm.get("description");
  }

  // get startDateTimeInput() {
  //   return this.eventForm.get("startDateTime");
  // }

  // get endDateTimeInput() {
  //   return this.eventForm.get("endDateTime");
  // }

  get venueIDInput() {
    return this.eventForm.get("venueID");
  }

  get organizerUserIDInput() {
    return this.eventForm.get("organizerUserID");
  }

  get categoriesInput() {
    return this.eventForm.get("categories");
  }

  get tagsInput() {
    return this.eventForm.get("tags");
  }

  get imageURLInput() {
    return this.eventForm.get("imageURL");
  }

  get capacityInput() {
    return this.eventForm.get("capacity");
  }

  get ticketTypesInput() {
    return this.eventForm.get("ticketTypes");
  }

  // get salesStartDateInput() {
  //   return this.eventForm.get("salesStartDate");
  // }

  // get salesEndDateInput() {
  //   return this.eventForm.get("salesEndDate");
  // }

  get statusInput() {
    return this.eventForm.get("status");
  }

  get externalLinksInput() {
    return this.eventForm.get("externalLinks");
  }

  // get createdDateTimeInput() {
  //   return this.eventForm.get("createdDateTime");
  // }

  // get lastUpdatedDateTimeInput() {
  //   return this.eventForm.get("lastUpdatedDateTime");
  // }

  // Add more getter methods for the other form controls

  onSubmit() {
    if (this.eventForm.valid) {
      const event = this.eventForm.value;
      this.eventService.createEvent(event).subscribe(
        response => console.log('Event created', response),
        error => console.error('Error creating event', error)
      );
    }
  }


  async createEvent() {
    this.loading = true;

    // setTimeout(() => {
      this.router.navigate(['events/my-events/dashboard']);
      this.loading = false;
    // }, 1500);



  }
}
