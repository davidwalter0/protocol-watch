import { Component } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Title } from '@angular/platform-browser';
import { AuthGuard } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  authenticated: boolean = false;
  error: any;
  title: string = "Site Title";

  constructor(private angularFire: AngularFire,
    private router: Router,
    private authService: AuthGuard) {
  }

  ngOnInit() {
  }

  logout() {
    this.angularFire.auth.logout();
    this.authenticated = false;
    console.log('logged out');
    this.router.navigate(['/logged-out'], { skipLocationChange: true });
  }

  loginGoogle() {
    // this.angularFire.auth.login({
    //   provider: AuthProviders.Google,
    //   method: AuthMethods.Redirect,
    // }).then(

    this.angularFire.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }).then(
      (success) => {
        this.authenticated = true;
        this.router.navigate(['/'], { skipLocationChange: true });
      })
      .catch((err) => {
        this.authenticated = false;
        this.error = err;
      });
  }
  authorized() {
    return this.authService.authenticated;
  }
}
