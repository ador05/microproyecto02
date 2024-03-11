import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default function  ProfileView() {
    return (

            <div>
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
                  <Form.Group className="mb-3" controlId="juegofavorito">
            <Form.Label>Juego Favorito</Form.Label>
            <Form.Control id="juegofavorito" name="juegofavorito" placeholder="Elden Ring" />
                  </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Membresias</Form.Label>
              <Form.Select id = "memberships" name="memberships"  defaultValue="Choose...">
              <option>...</option> //hay que lograr que se vean las membresias que tiene el usuario
                <option>...</option>

              </Form.Select>
            </Form.Group>
                  </Row>
            
                  <Button type="edit" variant="primary">Editar</Button>
                </Form>
                
                
                </Col>
                </Row>
                </Container>         
          
            
        </div>
    );
}