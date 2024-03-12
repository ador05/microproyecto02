import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {Row, Nav, Navbar, } from 'react-bootstrap';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { auth} from '../firebase'; 

  export default function ProfileView() {
    const [formData, setFormData] = useState({
      email: auth.currentUser ? auth.currentUser.email : "",
      password: "",
      name: auth.currentUser ? auth.currentUser.displayName.split(" ")[0] : "",
      lastname: auth.currentUser ? auth.currentUser.displayName.split(" ")[1] || "" : "",
      username: auth.currentUser ? auth.currentUser.email.split("@")[0] : "",
      juegofavorito: "",
    });
  
    
  
    const handleSubmit = async (event) => {
      event.preventDefault();

      try {
        if (formData.password && auth.currentUser) {
          const userCredential = await auth.currentUser.reauthenticateWithCredential(
            auth.EmailAuthProvider.credential(formData.email, formData.password)
          );
    
          await updateProfile(userCredential.user, {
            displayName: `${formData.name} ${formData.lastname}`,
          });
        };
      } catch (error) {
        alert("An error occurred while updating the profile. Please try again later.");
      }
    };
  
    return (

            <div>
              <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                  <Navbar.Brand href="juegos">Juegos</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="homepage">Home</Nav.Link>
                      <Nav.Link href="clubes">Clubes</Nav.Link>
                      
          
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>

            <Container>
                <Row className='px-4 my-5'>
                <Col sm={12}>
                <h1>Perfil del usuario</h1> 
                </Col>
                </Row>
                <Row className='px-4 my-5'>
                <Col sm>
                <Form>
                  <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control id="email" name="email" placeholder="correo electronico" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control id="password" name="password" placeholder="Contraseña" />
            </Form.Group>
                  </Row>

                  <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Primer Nombre</Form.Label>
              <Form.Control id="name" name="name" placeholder="Primer nombre" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Apellido</Form.Label>
              <Form.Control id= "lastname" name="lastname"  placeholder="Apellido" />
            </Form.Group>
                  </Row>
            
                  <Form.Group className="mb-3" controlId="usuario">
            <Form.Label>Usuario</Form.Label>
            <Form.Control id="username" name="username" placeholder="@nombre-de-usuario" />
                  </Form.Group>
            
            
                  <Row className="mb-3">

                  <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Juego Preferido</Form.Label>
              <Form.Select id = "juegofavorito" name="juegofavorito"  defaultValue="Choose...">
              <option value="1">The Witcher 3: Wild Hunt</option>
                    <option value="2">Red Dead Redemption 2</option>
                    <option value="3">The Legend of Zelda: Breath of the Wild</option>
                    <option value="4">Dark Souls III</option>
                    <option value="5">Super Mario Odyssey</option>
                    <option value="6">Overwatch</option>
                    <option value="7">Minecraft</option>
                    <option value="8">Fortnite</option>
                    <option value="9">Fifa 22</option>
                    <option value="10">Call of Duty: Warzone</option>
                    <option value="11">Assassin's Creed Valhalla</option>
                    <option value="12">Cyberpunk 2077</option>
                    <option value="13">Among Us</option>
                    <option value="14">Animal Crossing: New Horizons</option>
                    <option value="15">League of Legends</option>
                    <option value="16">Genshin Impact</option>
                    <option value="17">Apex Legends</option>
                    <option value="18">World of Warcraft</option>
                    <option value="19">Control</option>
                    <option value="20">Hades</option>
              </Form.Select>
            </Form.Group>
            
            
           
                  </Row>
            
                  <Button type="edit" variant="primary" onClick={handleSubmit}>Editar</Button>
                </Form>
                
                
                </Col>
                </Row>
                </Container>         
          
            
        </div>
    );
}