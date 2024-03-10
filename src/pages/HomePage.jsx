import {Navbar, Container, Nav} from "react-bootstrap"

import { useState } from "react";

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="homepage">Video Juegos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="registrarse" style={{ display: isLoggedIn ? "none" : "block" }}>Registrarse</Nav.Link>
            <Nav.Link href="iniciarsesion" style={{ display: isLoggedIn ? "none" : "block" }}>Iniciar sesion</Nav.Link>
            <Nav.Link href="clubes" style={{ display: isLoggedIn ? "none" : "block" }}>
              Clubes
            </Nav.Link>
            <Nav.Link href="juegos" style={{ display: isLoggedIn ? "none" : "block" }}>
              Juegos
            </Nav.Link>
            <Nav.Link href="perfil" style={{ display: isLoggedIn ? "none" : "block" }}>
              Ver perfil
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}