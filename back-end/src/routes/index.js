
import { testRoute } from "./testRoute";
import {signupRoute} from "./SignupRoute";
import {loginRoute} from "./loginRoute";
import {updateUserInfoRoute} from "./updateUserInfoRoute";
import {verifyEmailRoute} from "./VerifyEmailRoute";
import {forgotPasswordRoute} from "./ForgotPasswordRoute";
import {resetPasswordRoute} from "./ResetPasswordRoute";
import {getGoogleOAuthRoute} from "./getGoogleOAuthRoute";
import {googleOauthCallbackRoute} from "./googleOauthCallbackRoute";

export const routes = [
    signupRoute,
    loginRoute,
    updateUserInfoRoute,
    testRoute,
    verifyEmailRoute,
    forgotPasswordRoute,
    resetPasswordRoute,
    getGoogleOAuthRoute,
    googleOauthCallbackRoute
];
