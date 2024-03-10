import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function  LogIn() {
    return (
        <Container>
        <Row className='px-4 my-5'>
          <Col sm={12}>
            <h1>Inicio de sesion</h1> 
            </Col>
        </Row>
        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
      </Container>
    );
}