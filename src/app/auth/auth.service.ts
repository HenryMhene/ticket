import { Injectable } from '@angular/core';
import { AuthUser } from '@aws-amplify/auth';
import { Subject, Observable } from 'rxjs';
import { Hub } from '@aws-amplify/core';
import { User } from '../models/user';
import { signIn, getCurrentUser, signUp, signOut, confirmSignUp, SignInInput } from 'aws-amplify/auth';

type SignUpParameters = {
  username: string;
  password: string;
  email: string;
  phone_number: string;
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedIn: boolean | undefined;
  private _authState: Subject<AuthUser|any> = new Subject<AuthUser|any>();
  authState: Observable<AuthUser|any> = this._authState.asObservable();

  public static SIGN_IN = 'signIn';
  public static SIGN_OUT = 'signOut';

  constructor() {
    Hub.listen('auth',(data) => {
      const { channel, payload } = data;
      if (channel === 'auth') {
        this._authState.next(payload.event);
      }
    });
  }

  signIn(username: string, password: string):Promise<AuthUser|any> {
    return new Promise((resolve,reject) => {
        signIn({username,password})
      .then((user: AuthUser|any) => {
        this.loggedIn = true;
        resolve(user);
      }).catch((error: any) => reject(error));
    });
  }

  signOut(): Promise<any> {
    return signOut()
      .then(() => this.loggedIn = false)
  }

  signUp(user: User, options: any): Promise<AuthUser|any> {
    return signUp({
      "username": user.UserEmail,
      "password": user.Password,
      "options" : options
    });
  }

  async  handleSignIn({ username, password }: SignInInput) {
    try {
      const { isSignedIn, nextStep } = await signIn({ username, password });

      if(nextStep){

      }
    } catch (error) {
      console.log('error signing in', error);
    }
  }

   async handleSignUp({
    username,
    password,
    email
  }: SignUpParameters) {
    try {
      const { isSignUpComplete, userId, nextStep } = await signUp({
        username,
        password,
        options: {
          userAttributes: {
            email
          },
          // optional
          autoSignIn: true // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
        }
      });

      console.log(userId);
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  public async confirmSignUp(username: string, confirmationCode: string) {
    try {
      return await confirmSignUp({username, confirmationCode});
    } catch (error) {
      console.log('error confirming sign up', error);
      return undefined;
    }
  }

  // public async getCurrentUserDetails() {
  //   try {
  //     const user = await getCurrentUser();
  //     const { attributes } = user;
  //     return attributes;
  //   } catch (error) {
  //     console.log('error getting user details', error);
  //   }
  // }
}
