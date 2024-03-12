import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Inicia el proveedor de Google
  const googleProvider = new GoogleAuthProvider();

  const handleSignUp = () => {
    navigate('/registrarse');
  }

  const handleClick = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user.email);

      // Verificar si el usuario está autenticado antes de guardar sus datos en la base de datos
      if (auth.currentUser) {
        // Guardar los datos del usuario en la base de datos
        await setDoc(doc(db, 'users', result.user.uid), {
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
          uid: result.user.uid,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Signed in with email:', user.email);
  
      // Verificar si el usuario está autenticado antes de redirigirlo a la página de inicio
      if (auth.currentUser) {
        navigate('/homepage');
      }
    } catch (error) {
      console.log('Error signing in with email and password:', error.message);
  
      // da un mensaje si el usauario no se encuentra
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        alert('ñao ñao no esta bien el usuario o contraseña.');
      } else {
        alert('un error al iniciar sesion');
      }
    }
  }
  //el formulario como tal
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
                  <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Ingrese correo electronico" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Ingrese contraseña" />
                </Form.Group>
              </Row>
              <Row className='px-4 my-5'>
                <Col sm={6}>
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