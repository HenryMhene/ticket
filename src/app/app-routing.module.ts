import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { UnauthGuard } from './auth/unauth.guard';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { MyEventComponent } from './event/my-event/my-event.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CreateEventComponent } from './event/create-event/create-event.component';
import { MyEventDashboardComponent } from './event/my-event/my-event-dashboard/my-event-dashboard.component';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingPageComponent,
    data: { allowHeader: true, allowEventHeader: false }
  },
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [UnauthGuard],
    data: { allowHeader: true, allowEventHeader: false, allowMinHeader: true  }
  },
  {
    path: 'auth/sign-in',
    component: SignInComponent,
    data: { allowHeader: false, allowEventHeader: false, allowMinHeader: true }
  },
  {
    path: 'auth/sign-up',
    component: SignUpComponent,
    data: { allowHeader: false, allowEventHeader: false, allowMinHeader: true  }
  },
  // {
  //   path: 'auth/sign-up/:state',
  //   component: SignUpComponent,
  //   data: { allowHeader: false, allowEventHeader: false, allowMinHeader: true  }
  // },
  // {
  //   path: 'auth/reset-password',
  //   component: ResetPasswordComponent,
  //   data: { allowHeader: false, allowEventHeader: false, allowMinHeader: true  }
  // },
  // {
  //   path: 'auth/confirm-code',
  //   component: ConfirmCodeComponent,
  //   data: { allowHeader: false, allowEventHeader: false, allowMinHeader: true  }
  // },
  // {
  //   path: 'auth/profile',
  //   component: ProfileComponent,
  //   canActivate: [AuthGuard],
  //   data: { allowHeader: true, allowEventHeader: false }
  // },
  {
    path: 'event/my-events',
    component: MyEventComponent,
    canActivate: [AuthGuard],
    data: { allowHeader: false, allowEventHeader: true }
  },
  {
    path: 'event/create-event',
    component: CreateEventComponent,
    canActivate: [AuthGuard],
    data: { allowHeader: true }
  },
  {
    path: 'event/my-events/dashboard',
    component: MyEventDashboardComponent,
    canActivate: [AuthGuard],
    data: { allowHeader: false, allowEventHeader: true }
  },
  // {
  //   path: 'Events/my-Events/products',
  //   component: MyEventsProductsComponent,
  //   canActivate: [AuthGuard],
  //   data: { allowHeader: false, allowEventHeader: true }
  // },
  // {
  //   path: 'Events/my-Events/Events-setup',
  //   component: MyEventsSetupComponent,
  //   canActivate: [AuthGuard],
  //   data: { allowHeader: false, allowEventHeader: true }
  // },
  // {
  //   path: 'shop/my-shop/add-product',
  //   component: MyShopProductsAddComponent,
  //   canActivate: [AuthGuard],
  //   data: { allowHeader: false, allowShopHeader: true }
  // },
  // {
  //   path: 'shop/my-shop/list-products',
  //   component: MyShopProductsListComponent,
  //   canActivate: [AuthGuard],
  //   data: { allowHeader: false, allowShopHeader: true }
  // },
  // {
  //   path: 'products',
  //   component: ProductListingComponent,
  //   data: { allowHeader: true, allowShopHeader: false }
  // },
  // {
  //   path: 'public-profile/:profileid',
  //   component: PublicProfileComponent,
  //   data: { allowHeader: true, allowShopHeader: false }
  // },
  // {
  //   path: 'services',
  //   component: ServiceListComponent,
  //   data: { allowHeader: true, allowShopHeader: false }
  // },
  // {
  //   path: 'terms',
  //   component: TermsAndConditionsComponent,
  //   data: { allowHeader: true, allowShopHeader: false }
  // },
  // { path: 'faqs', component: FaqsComponent, data: { allowHeader: true } },
  // {
  //   path: 'privacy',
  //   component: PrivacyPolicyComponent,
  //   data: { allowHeader: true, allowShopHeader: false }
  // },
  // {
  //   path: 'sell-products',
  //   component: SellProductsComponent,
  //   data: { allowHeader: true, allowShopHeader: false }
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
