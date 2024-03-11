import {Navbar, Container, Nav, Image} from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React from "react";

import { useState } from "react";

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="homepage">Video Juegos</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="registrarse" style={{ display: isLoggedIn ? "none" : "block" }}>Registrarse</Nav.Link>
              <Nav.Link href="/" style={{ display: isLoggedIn ? "none" : "block" }}>Iniciar sesion</Nav.Link>
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
      <Row className="px-3 my-5">
  
        <Col sm={Col}>
        <Image src="../public/image-game-over.jpg" fluid />
        </Col>
        <Col sm={Col}>
          <h1>¿Recuerdas tu primer videojuego?</h1>
          <p> La emoción de superar niveles, la satisfacción de derrotar a un jefe final, la inmersión en mundos fantásticos... Los videojuegos han cautivado a generaciones enteras y su historia es tan fascinante como diversa.</p>
          <p>Esta app busca que sus usuarios puedan disfrutar en conjunto de los videojuegos, asi como lo hicimos cuando eramos más chicos.</p>
        </Col>
      </Row>
    </div>

  );
}