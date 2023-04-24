import React from "react";
import Authentication from "./Authentication";
import { Navigate } from "react-router-dom";
class AuthenticateRoute extends React.Component {
  render() {
    if (Authentication.isUserLoggedin()) {
      return this.props.children;
    } else {
      return <Navigate to="/login" />;
    }
  }
}
export default AuthenticateRoute;
