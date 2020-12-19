import { Component, OnInit } from "@angular/core";
import {
  NbResetPasswordComponent,
  getDeepFromObject,
  NbAuthResult,
} from "@nebular/auth";

@Component({
  selector: "ngx-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.scss"],
})
export class ResetPasswordComponent
  extends NbResetPasswordComponent
  implements OnInit {
  urlParts: string[];
  requestPasswordToken;

  ngOnInit(): void {
    console.log(this.router.url);
    this.requestPasswordToken = this.router.parseUrl(this.router.url);
    console.log(this.requestPasswordToken.queryParams);
  }
  resetPass(): void {
    this.errors = this.messages = [];
    this.submitted = true;
    console.log(this.user);
    this.user.token = this.requestPasswordToken.queryParams;
    this.service
      .resetPassword(this.strategy, this.user)
      .subscribe((result: NbAuthResult) => {
        this.submitted = false;
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
