import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./auth/PrivateRoute";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { UserInfoPage } from "./pages/UserInfoPage";
import {VerifyEmailPage} from "./pages/VerifyEmailPage";
import {EmailVerification} from "./pages/EmailVerification";
import {ForgotPasswordPage} from "./pages/ForgotPasswordPage";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact>
          <UserInfoPage />
        </PrivateRoute>
        <Route path="/verify-email/:verificationString">
          <EmailVerification/>
        </Route>
        <Route path="/login">
          <LoginPage />
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
