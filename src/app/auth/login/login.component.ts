import { Component, ChangeDetectionStrategy } from "@angular/core";

import {
  NbAuthResult,
  getDeepFromObject,
  NbLoginComponent,
} from "@nebular/auth";

@Component({
  selector: "ngx-login",
  templateUrl: "./login.component.html",
  styleUrls: ['./../auth.css'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent extends NbLoginComponent {
  login(): void {
    this.errors = [];
    this.messages = [];
    this.submitted = true;

    console.log(this.user, this.strategy);
    this.service
      .authenticate(this.strategy, this.user)
      .subscribe((result: NbAuthResult) => {
        this.submitted = false;
        console.log(result);
        if (result.isSuccess()) {
          this.messages = result.getMessages();
        } else {
          this.errors = result.getErrors();
        }

        const redirect = result.getRedirect();
        if (redirect) {
          setTimeout(() => {
            return this.router.navigateByUrl(redirect);
          }, this.redirectDelay);
        }
        this.cd.detectChanges();
      });
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }
}
