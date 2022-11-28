
import { testRoute } from "./testRoute";
import {signupRoute} from "./SignupRoute";
import {loginRoute} from "./loginRoute";
import {updateUserInfoRoute} from "./updateUserInfoRoute";
import {verifyEmailRoute} from "./VerifyEmailRoute";
import {forgotPasswordRoute} from "./ForgotPasswordRoute";

export const routes = [signupRoute,loginRoute,updateUserInfoRoute ,
    testRoute, verifyEmailRoute, forgotPasswordRoute];
