import { Component } from '@angular/core';
import { Amplify } from 'aws-amplify';
import { AuthenticatorService } from '@aws-amplify/ui-angular';

import awsExports from './../../../aws-exports';

import { signUp } from 'aws-amplify/auth';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})

export class SignUpComponent {
  loading: any;

  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(awsExports);
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1500);

  }

  services = {
    async validateCustomSignUp(formData: Record<string, string>) {
      if (!formData['acknowledgement']) {
        return {
          acknowledgement: 'You must agree to the Terms & Conditions',
        };
      } else {
        return undefined;
      }
    },
  };

  // services = {
  //   async handleSignUp(formData: Record<string, any>) {
  //     let { username, password, attributes } = formData;
  //     // custom username
  //     username = username.toLowerCase();
  //     attributes.email = attributes.email.toLowerCase();
  //     return signUp({
  //       username,
  //       password,
  //       attributes,
  //       autoSignIn: {
  //         enabled: true,
  //       },
  //     });
  //   },
  // };

}
