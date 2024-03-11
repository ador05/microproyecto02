import {Navbar, Container, Nav} from "react-bootstrap"

import { useState } from "react";

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="homepage">Video Juegos
        <div><h1>Gay el que lo lea</h1></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="clubes" >
              Clubes
            </Nav.Link>
            <Nav.Link href="juegos" >
              Juegos
            </Nav.Link>
            <Nav.Link href="perfil" >
              Ver perfil
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}