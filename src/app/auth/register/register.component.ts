import { Component, ChangeDetectionStrategy } from "@angular/core";

import {
  NbAuthResult,
  getDeepFromObject,
  NbRegisterComponent,
} from "@nebular/auth";

@Component({
  selector: "ngx-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent extends NbRegisterComponent {
  register(): void {
    this.errors = this.messages = [];
    this.submitted = true;

    this.service
      .register(this.strategy, this.user)
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
