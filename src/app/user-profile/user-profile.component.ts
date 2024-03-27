import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  loading = false;

  user: User = {
    id: '',
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    emailVerified: false,
    mobileNumber: '',
    mobileCountryCode: '',
    paymentVerified: false,
    active: false,
    password: '',
    createdAt: new Date(),
    updatedAt: new Date(),
    notificationPreferences: {
      email: true,
      sms: true,
      whatsapp: true,
    },
  };

  constructor() { }

  ngOnInit(): void {
  }

  saveUserProfile(): void {
    // this.userService.updateUser(this.user).subscribe(
    //   response => {
    //     console.log('User profile updated successfully', response);
    //     // Handle successful response here
    //   },
    //   error => {
    //     console.error('Error updating user profile', error);
    //     // Handle error here
    //   }
    // );
  }

}
