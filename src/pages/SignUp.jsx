import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { useEffect } from 'react';
import { createUser } from '../controllers/users';


function SignUpPage() {
    const [correo, setcorreo] = useState('');
    const [contra, setcontra] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [usuario, setUsuario] = useState('');


    



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
              <Form.Control value={correo} onChange={(e) => setcorreo(e.target.value) } placeholder="Ingrese correo electronico" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control value={contra} onChange={(e) => setcontra(e.target.value) }placeholder="Ingrese contraseña" />
            </Form.Group>
                  </Row>

                  <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Primer Nombre</Form.Label>
              <Form.Control value={nombre} onChange={(e) => setNombre(e.target.value) } placeholder="Ingrese su primer nombre" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Apellido</Form.Label>
              <Form.Control value={apellido} onChange={(e) => setApellido(e.target.value) }placeholder="Ingrese su apellido" />
            </Form.Group>
                  </Row>
            
                  <Form.Group className="mb-3" controlId="usuario">
            <Form.Label>usuario</Form.Label>
            <Form.Control value={usuario} onChange={(e) => setUsuario(e.target.value)} placeholder="@nombre-de-usuario" />
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
            
                  <Button variant="primary" onClick= {createUser(correo,contra,nombre,apellido,usuario)}>enviar</Button>
                </Form>
                
                
                </Col>
                </Row>
                </Container>         
          
            
        </div>
    );
}
export default SignUpPage;
