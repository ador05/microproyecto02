import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase'; 

function SignUpPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    lastname: "",
    username: "",
    favoritegame: "",
    membership: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await createUserWithEmailAndPassword(auth, formData.email, formData.password);

      await updateProfile(user, {
        displayName: `${formData.name} ${formData.lastname}`,
      });

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        uid: user.uid,
        name: formData.name,
        lastname: formData.lastname,
        username: formData.username,
        favoritegame: formData.favoritegame,
        membership: "",
      });

    } catch (error) {
      alert("An error occurred while signing up. Please try again later.");
    }
  };

  return (
    <div>
      <Container>
        <Row className="px-4 my-5">
          <Col sm={12}>
            <h1>Registro de usuario</h1>
            <p>
              ¿Ya tienes una cuenta?{" "}
              <Button variant="outline-dark" href="/">
                Inicia sesion aquí
              </Button>
            </p>
          </Col>
        </Row>
        <Row className="px-4 my-5">
          <Col sm>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Correo Electronico</Form.Label>
                  <Form.Control
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ingrese correo electronico"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Ingrese contraseña"
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Primer Nombre</Form.Label>
                  <Form.Control
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ingrese su primer nombre"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Ingrese su apellido"
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="usuario">
                <Form.Label>usuario</Form.Label>
                <Form.Control
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="@nombre-de-usuario"
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Juego Preferido</Form.Label>
                  <Form.Select
                    name="favoritegame"
                    value={formData.favoritegame}
onChange={handleChange}
                  >
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

              <Button type="submit" variant="primary">
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUpPage;