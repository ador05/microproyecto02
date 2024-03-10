import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { createUser } from "../controllers/users"



  

function SignUpPage() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    lastname: '',
    username: '',
    favoritegame: '',
    memberships: '',
  });

    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    };

    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent default form submission behavior
      console.log('Form Submitted:', formData); // Simulate form submission (replace with backend integration)
      //createUser(formData);
    };
  
    
    
    

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
                <Form onSubmit={handleSubmit}>
                  <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Ingrese correo electronico" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Ingrese contraseña" />
            </Form.Group>
                  </Row>

                  <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Primer Nombre</Form.Label>
              <Form.Control id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Ingrese su primer nombre" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Apellido</Form.Label>
              <Form.Control id= "lastname" name="lastname" value={formData.lastname} onChange={handleChange}  placeholder="Ingrese su apellido" />
            </Form.Group>
                  </Row>
            
                  <Form.Group className="mb-3" controlId="usuario">
            <Form.Label>usuario</Form.Label>
            <Form.Control id="username" name="username" value={formData.username} onChange={handleChange} placeholder="@nombre-de-usuario" />
                  </Form.Group>
            
            
                  <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Juego Preferido</Form.Label>
              <Form.Select id = "favoritegame" name="favoritegame" value={formData.favoritegame} onChange={handleChange} defaultValue="elija...">
                <option>elija...</option>
                <option>ejemplo 01</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Membresias</Form.Label>
              <Form.Select id = "memberships" name="memberships" value={formData.memberships} onChange={handleChange} defaultValue="Choose...">
              <option>elija...</option>
                <option>ejemplo 01</option>

              </Form.Select>
            </Form.Group>
                  </Row>
            
                  <Button type="submit" variant="primary">enviar</Button>
                </Form>
                
                
                </Col>
                </Row>
                </Container>         
          
            
        </div>
    );
};
export default SignUpPage;
