import { Component, OnInit } from "@angular/core";
import {
  NbRequestPasswordComponent,
  getDeepFromObject,
  NbAuthResult,
} from "@nebular/auth";

@Component({
  selector: "ngx-request-password",
  templateUrl: "./request-password.component.html",
  styleUrls: ["./request-password.component.scss"],
})
export class RequestPasswordComponent extends NbRequestPasswordComponent {
  requestPass(): void {
    this.errors = this.messages = [];
    this.submitted = true;

    this.service
      .requestPassword(this.strategy, this.user)
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
