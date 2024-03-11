import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { db } from '../firebase';
import { doc, getDoc, collection } from 'firebase/firestore';
import HomePage from './HomePage';
import { auth } from '../firebase';

function LogIn() {
    const [correo, setcorreo] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/registrarse');
    }

    const handleClick = async () => {
        const result = await signInWithPopup(auth, googleProvider);
        console.log(result.user.email);

        // Verificar si el usuario está autenticado antes de guardar sus datos en la base de datos
        if (auth.currentUser) {
            // Guardar los datos del usuario en la base de datos
            await setDoc(doc(dbRef, result.user.uid), {
                email: result.user.email,
                displayName: result.user.displayName,
                photoURL: result.user.photoURL,
                uid: result.user.uid,
            });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, correo, password);
            const user = userCredential.user;
            console.log(user.email);

            // Verificar si el usuario está autenticado antes de redirigirlo a la página de inicio
            if (auth.currentUser) {
                navigate('/homepage');
            }
        } catch (error) {
            console.log(error.message);
        }
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
                <Button onClick={handleClick}>Iniciar Sesion con Google</Button>
              </Col>
            </Row>
            <Row className='px-4 my-5'>
              <Col sm>
                <Form onSubmit={handleSubmit}>
                  <Row className='px-4 my-5'>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Correo Electronico</Form.Label>
                      <Form.Control value={correo} onChange={(e) => setcorreo(e.target.value)} placeholder="Ingrese correo electronico" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control value={password} onChange={(e) => setpassword(e.target.value)} type="password" placeholder="Ingrese contraseña" />
                    </Form.Group>
                  </Row>
                  <Row className='px-4 my-5'><Col sm={6}>
                      <Button variant="primary" type="submit">enviar</Button>
                    </Col>
                 </Row>
                </Form>
              </Col>
            </Row>
           <Row className='px-4 my-5'>
              <p>¿No tienes una cuenta? <Button variant="outline-dark" onClick={handleSignUp}>Registrate</Button></p>
            </Row>
          </Container>
        </div>
      );
    };

    export default LogIn;