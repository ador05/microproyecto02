import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function SignUpPage() {
    return (
        
        <div>
            <Container>
                <Row className='px-4 my-5'>
                <Col sm={12}>
                <h1>Registro de usuario</h1> 
                <p>¿Ya tienes una cuenta? <Button variant="outline-dark" href="iniciarsesion">Inicia sesion aquí</Button></p>
                </Col>
                </Row>
                <Row className='px-4 my-5'>
                <Col sm>
                <Form>
                  <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control type="email" placeholder="Ingrese correo electronico" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingrese contraseña" />
            </Form.Group>
                  </Row>
            
                  <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>usuario</Form.Label>
            <Form.Control placeholder="@nombre-de-usuario" />
                  </Form.Group>
            
            
                  <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Juego Preferido</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>elija...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Membresias</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>elija...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
                  </Row>
            
                  <Button variant="primary" type="submit">
            enviar
                  </Button>
                </Form>
                
                
                </Col>
                </Row>
                </Container>
            
          
            
        </div>
    );
}
export default SignUpPage;