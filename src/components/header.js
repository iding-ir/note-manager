import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import GoogleAuth2 from "react-redux-google-auth2/dist/components/googleAuth2/";

function Header() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="#">Note Manager</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav>
          <GoogleAuth2
            clientId="978371680949-7iclvimbtnkiqncnnbf4v7tiibtt5vnp.apps.googleusercontent.com"
            signInClass="btn btn-success"
            signOutClass="btn btn-danger"
          />

          <Nav.Link href="#">Github</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
