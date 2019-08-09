import React, { Component } from "react";
import {
  withRouter
} from "react-router-dom";

class Login extends Component {
  state = { redirectToReferrer: false };

  login = () => {
    
  };

  render() {
    console.log("t4 render this===",this);
    

    return (
      <div>
        <p>You must log in to view the page at </p>
      </div>
    );
  }
}

export default withRouter(Login);
