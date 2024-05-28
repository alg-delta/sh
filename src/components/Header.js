import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">sh</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              яхти
            </NavLink>
            <NavLink to="/auto" className="nav-link">
              автомобілі
            </NavLink>
            <NavLink to="/moto" className="nav-link">
              мотоцикли
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}
