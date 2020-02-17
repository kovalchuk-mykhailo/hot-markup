import React from "react";
import { Switch, Route } from "react-router-dom";

import NotFound from "../../components/pages/NotFound";
import SignUp from "../../components/pages/SignUp";
import { SIGN_UP_PATH, USER_PROFILE_PATH } from "../../constants/Pathes";
import Profile from "../pages/Profile";
import DefaultLayout from "../_layouts/default";

const withLayout = Component => {
  return props => (
    <DefaultLayout>
      <Component {...props} />
    </DefaultLayout>
  );
};

export default function Routes() {
  return (
    <Switch>
      <Route exact path={SIGN_UP_PATH} component={withLayout(SignUp)} />
      <Route path={USER_PROFILE_PATH} component={withLayout(Profile)} />
      <Route component={NotFound} />
    </Switch>
  );
}
