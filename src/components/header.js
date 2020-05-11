import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import {
  GoogleAuth2,
  Profile,
  SignIn,
  SignOut,
} from "react-redux-google-auth2";

function Header() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="#">Note Manager</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav>
          <GoogleAuth2 clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} />

          <Profile classes="profile" />

          <SignIn classes="btn btn-success" />

          <SignOut classes="btn btn-danger" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
