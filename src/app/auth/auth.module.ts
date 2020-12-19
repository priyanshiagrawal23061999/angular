import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "../auth/login/login.component";
import { AuthRoutingModule } from "./auth-routing.module";
import {
  NbPasswordAuthStrategy,
  NbAuthModule,
  NbAuthJWTToken,
  NbTokenStorage,
  NbTokenLocalStorage,
  NbAuthJWTInterceptor,
  NB_AUTH_TOKEN_INTERCEPTOR_FILTER,
  getDeepFromObject,
} from "@nebular/auth";
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
} from "@nebular/theme";
import { RegisterComponent } from "./register/register.component";
import {
  HTTP_INTERCEPTORS,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { RequestPasswordComponent } from "./request-password/request-password.component";
// import { AppConfig } from "../../service/app-config.service";

const formSetting: any = {
  redirectDelay: 0,
  showMessages: {
    success: true,
  },
};

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    RequestPasswordComponent,
  ],
  providers: [{ provide: NbTokenStorage, useClass: NbTokenLocalStorage }],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    AuthRoutingModule,

    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: "email",
          token: {
            class: NbAuthJWTToken,
            key: "token",
          },
          baseEndpoint: "http://localhost:9000/api/",
          // baseEndpoint: "http://dev.work4skills.com/exapi/api/",
          login: {
            // ...
            endpoint: "auth/login",
            method: "post",
            redirect: {
              success: "pages/dashboard",
              failure: null, // stay on the same page
            },
          },
          register: {
            // ...
            endpoint: "auth/register",
            method: "post",
            redirect: {
              success: "pages/dashboard",
              failure: null, // stay on the same page
            },
          },

          requestPass: {
            endpoint: "auth/forgotpassword",
            method: "post",
            redirect: {
              success: null,
              failure: null, // stay on the same page
            },
          },
          resetPass: {
            endpoint: "auth/resetpassword",
            method: "put",
            // resetPasswordTokenKey: "reset_password_token",
            // requireValidToken: false,
            redirect: {
              success: "/auth/login",
              failure: null, // stay on the same page
            },
          },
          // updatePass: {
          //   endpoint: "auth/updatepassword",
          //   method: "post",
          //   // resetPasswordTokenKey: "reset_password_token",
          //   // requireValidToken: false,
          //   redirect: {
          //     success: "/auth/login",
          //     failure: null, // stay on the same page
          //   },
          // },
          errors: {
            key: "error",
            getter: (module: string, res: HttpErrorResponse) =>
              getDeepFromObject(res.error, "error"),
          },
          messages: {
            key: "message",
            getter: (module: string, res: HttpResponse<Object>) => {
              return getDeepFromObject(res.body, "message");
            },
          },
        }),
      ],
      forms: {
        login: formSetting,
        register: formSetting,
        requestPassword: formSetting,
        resetPassword: formSetting,
        logout: {
          redirectDelay: 0,
        },
      },
    }),
  ],
})
export class AuthModule {}
