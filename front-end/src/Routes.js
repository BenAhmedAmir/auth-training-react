import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./auth/PrivateRoute";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { UserInfoPage } from "./pages/UserInfoPage";
import {VerifyEmailPage} from "./pages/VerifyEmailPage";
import {EmailVerificationPage} from "./pages/EmailVerificationPage";
import {ForgotPasswordPage} from "./pages/ForgotPasswordPage";
import {PasswordResetPage} from "./pages/PasswordResetPage";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact>
          <UserInfoPage />
        </PrivateRoute>
        <Route path="/verify-email/:verificationString">
          <EmailVerificationPage/>
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/reset-password/:passwordResetCode">
          <PasswordResetPage/>
        </Route>
        <Route path="/please-verify">
          <VerifyEmailPage/>
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/forgot-password">
          <ForgotPasswordPage/>
        </Route>
      </Switch>
    </Router>
  );
};
