import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  private router: Router;
  private loadingIndicator: HTMLIonLoadingElement;

  constructor(router: Router) {
      // Determine whether to run on mobile or the web
      //const selectedConfig = Capacitor.isNative ? auth0NativeConfig : auth0WebConfig;
      
      this.router = router;
      
    }

     async login(loadingIndicator) {
       this.loadingIndicator = loadingIndicator;

       await this.onLoginSuccess('OK');
     }

     // Event fired by Auth Connect upon successful login to auth provider.
    async onLoginSuccess(response: any) {
      await this.router.navigate(['tabs/personas']);

      // Implicit login: POPUP flow
      if (this.loadingIndicator) {
        this.loadingIndicator.dismiss();
      }
    }

     // Called as part of CURRENT implicit login flow only
     async callback(url, loadingIndicator) {
       loadingIndicator.dismiss();

     }

    // Log out of auth provider, then automatically redirect to the app page
    // specified in the `logoutUrl` property
    async logout() {
      await this.onLogout();
    }

    async onLogout() {
      await this.router.navigate(['login']);
    }

    async isAuthenticated(auth:boolean) {
      return await auth;
    }

    async getUserInfo() {
      return await 'mio';
    }
}
