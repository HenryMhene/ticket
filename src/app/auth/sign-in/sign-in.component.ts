import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { Amplify } from 'aws-amplify';
import awsExports from './../../../aws-exports';
import { signIn } from 'aws-amplify/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  @Input() header: string = "Sign In";
  @Output() authFlow = new EventEmitter<string>();

  constructor(public authenticator: AuthenticatorService, private router: Router) {
    Amplify.configure(awsExports);

    this.authenticator = authenticator;
    authenticator.subscribe((data: any) => {
      if (data.authStatus === "authenticated") {
        this.router.navigate(['/landing']);
      };
    })

  }

  services = {
    async handleSignIn(formData: Record<string, any>) {
      let { username, password } = formData;
      return signIn({
        username,
        password,
      });
    },
  }
}
function login() {
  throw new Error('Function not implemented.');
}

