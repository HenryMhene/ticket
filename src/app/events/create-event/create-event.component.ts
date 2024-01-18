import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';
import { GlobalConstants } from '../../common/global-constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})

export class CreateEventComponent implements OnInit {

  eventNameForm: FormGroup = new FormGroup({
    eventname: new FormControl("", [Validators.minLength(2)]),
  });

  get eventnameInput() {
    return this.eventNameForm.get("eventname");
  }

  title = GlobalConstants.siteName;
  loading = false;
  mobileQuery: MediaQueryList;
  errorMessage: string | undefined;
  value: any;

  private _mobileQueryListener: () => void;

  constructor(
    media: MediaMatcher,
    changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 737px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit() {
  }

  shouldEnableSubmit() {
    return (
      (this.eventnameInput && !this.eventnameInput.valid)
    );
  }

  async createEvent() {
    this.loading = true;

    // setTimeout(() => {
      this.router.navigate(['events/my-events/dashboard']);
      this.loading = false;
    // }, 1500);



  }
}
