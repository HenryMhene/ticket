import { ChangeDetectorRef, Component } from '@angular/core';
import { GlobalConstants } from './common/global-constants';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = GlobalConstants.siteName;
  allowHeader = true;
  allowEventHeader = false;
  allowMinHeader = false;
  loadApp = false;

  constructor(private ref: ChangeDetectorRef,  private router: Router, private route: ActivatedRoute,
    private matIconRegistry: MatIconRegistry, public dialog: MatDialog, private domSanitizer: DomSanitizer) {
      this.matIconRegistry.addSvgIcon(
        `obs_location`,
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/location_svg.svg')
      );

      this.matIconRegistry.addSvgIcon(
        `obs_location_blue`,
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/location_svg_blue.svg')
      );

      this.matIconRegistry.addSvgIcon(
        `reply`,
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/reply_svg.svg')
      );

      this.matIconRegistry.addSvgIcon(
        `obs_logo_white`,
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/obsydian_logo_white_solid.svg')
      );

      this.matIconRegistry.addSvgIcon(
        `ticket_yellow_black`,
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/ticket_yellow_black.svg')
      );

      this.matIconRegistry.addSvgIcon(
        `obs_logo_white_label`,
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/logo_transparent_white.svg')
      );

      this.matIconRegistry.addSvgIcon(
        `offer`,
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/offer.svg')
      );

      this.matIconRegistry.addSvgIcon(
        `money`,
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/money.svg')
      );

      this.matIconRegistry.addSvgIcon(
        `release-payment`,
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/release-payment.svg')
      );

      this.matIconRegistry.addSvgIcon(
        `request-payment`,
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/request-payment.svg')
      );

      this.matIconRegistry.addSvgIcon(
        `skill`,
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/skill.svg')
      );

      this.matIconRegistry.addSvgIcon(
        `credit-card`,
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/credit-card.svg')
      );

      this.matIconRegistry.addSvgIcon(
        `post-a-task`,
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/post_a_task.svg')
      );

      this.matIconRegistry.addSvgIcon(
        `get-it-done`,
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/get_it_done.svg')
      );

      this.matIconRegistry.addSvgIcon(
        `review-offers`,
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/review_offers.svg')
      );

                // check the route
    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        if (this.route.root.firstChild) {
          this.allowHeader = this.route.root.firstChild.snapshot.data['allowHeader'];
          this.allowEventHeader = this.route.root.firstChild.snapshot.data['allowEventHeader'];
          this.allowMinHeader = this.route.root.firstChild.snapshot.data['allowMinHeader'];
        }


        // (<any>window).ga('set', 'page', event.urlAfterRedirects);
        // (<any>window).ga('send', 'pageview');
      }
    });

    setTimeout(() => {
      this.loadApp = true;
    }, 500);
  }

}
