import {Navbar, Container, Nav, Col, Image, Row} from "react-bootstrap"

export default function HomePage() {

  return (
    //LA pagina principal y sus links
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="homepage">Video Juegos</Navbar.Brand>
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