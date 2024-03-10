import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { signInWithPopup, signInWithRedirect } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';


function LogIn() {
    const [correo, setcorreo] = useState('');
    const [contra, setcontra] = useState('');
    async function handleClick(){
        const result = await signInWithPopup(auth, googleProvider);
        console.log(result.user.email);
    }


    return (
        
        <div>
            <Container>
                <Row className='px-4 my-5'>
                <Col sm>
                <h1>Inicio de sesión</h1> 
                </Col>
                </Row>
                <Row className='px-4 my-5'>
                <Col sm>
                    <Button onClick={handleClick} >Iniciar Sesion con Google</Button>
                </Col>
                </Row>
                <Row className='px-0 my-5'>
                <Col sm>
                <Form>
                  <Row className='px-4 my-5'>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control value={correo} onChange={(e) => setcorreo(e.target.value) } placeholder="Ingrese correo electronico" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingrese contraseña" />
            </Form.Group>
                  </Row>
              <Row className='px-4 my-5'>
              <Col sm={6}>
              <Button variant="primary" type="submit">enviar</Button>
              </Col>
              
              </Row>
                
                  <Row className='px-4 my-5'>
                    <p>¿No tienes una cuenta? <Button variant="outline-dark" href="iniciarsesion">Registrate</Button></p>
                  </Row>
                </Form>
                
                
                </Col>
                </Row>
                </Container>         
          
            
        </div>
    );
}
export default LogIn;