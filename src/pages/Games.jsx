import React, { useState } from 'react'
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Container, Nav, Card, Row, Col} from "react-bootstrap"
import '../GamesStyle.css';
const videojuegos = [
    {
      "ID": "1",
      "titulo": "The Witcher 3: Wild Hunt",
      "genero": "RPG",
      "descripcion": "Un épico juego de rol de mundo abierto con una trama envolvente y gráficos impresionantes."
    },
    {
      "ID": "2",
      "titulo": "Red Dead Redemption 2",
      "genero": "Acción/Aventura",
      "descripcion": "Un juego de vaqueros ambientado en el Salvaje Oeste con una narrativa profunda y un vasto mundo abierto."
    },
    {
      "ID": "3",
      "titulo": "The Legend of Zelda: Breath of the Wild",
      "genero": "Aventura",
      "descripcion": "Una aventura épica con un vasto mundo, rompecabezas desafiantes y una historia cautivadora."
    },
    {
      "ID": "4",
      "titulo": "Dark Souls III",
      "genero": "Acción/RPG",
      "descripcion": "Un juego desafiante con combates intensos y un mundo oscuro y misterioso."
    },
    {
      "ID": "5",
      "titulo": "Super Mario Odyssey",
      "genero": "Plataformas",
      "descripcion": "Una colorida aventura de plataformas con un fontanero saltarín y mundos imaginativos."
    },
    {
      "ID": "6",
      "titulo": "Overwatch",
      "genero": "FPS",
      "descripcion": "Un juego de disparos en equipo con héroes únicos y emocionantes partidas."
    },
    {
      "ID": "7",
      "titulo": "Minecraft",
      "genero": "Sandbox",
      "descripcion": "Un mundo abierto de construcción y exploración donde puedes crear tus propias aventuras."
    },
    {
      "ID": "8",
      "titulo": "Fortnite",
      "genero": "Battle Royale",
      "descripcion": "Un juego de supervivencia en línea con construcción y combates intensos."
    },
    {
      "ID": "9",
      "titulo": "FIFA 22",
      "genero": "Deportes",
      "descripcion": "El simulador de fútbol más popular con equipos reales y modos de juego variados."
    },
    {
      "ID": "10",
      "titulo": "Call of Duty: Warzone",
      "genero": "Battle Royale",
      "descripcion": "Un juego de disparos en línea con acción frenética y mapas enormes."
    },
    {
      "ID": "11",
      "titulo": "Assassin's Creed Valhalla",
      "genero": "Acción/Aventura",
      "descripcion": "Una aventura vikinga con combates, exploración y una historia intrigante."
    },
    {
      "ID": "12",
      "titulo": "Cyberpunk 2077",
      "genero": "RPG",
      "descripcion": "Un futuro distópico lleno de tecnología, crimen y decisiones morales."
    },
    {
      "ID": "13",
      "titulo": "Among Us",
      "genero": "Multijugador",
      "descripcion": "Un juego de engaño y deducción en el espacio con amigos o desconocidos."
    },
    {
      "ID": "14",
      "titulo": "Animal Crossing: New Horizons",
      "genero": "Simulación",
      "descripcion": "Una vida tranquila en una isla paradisíaca con actividades relajantes."
    },
    {
      "ID": "15",
      "titulo": "League of Legends",
      "genero": "MOBA",
      "descripcion": "Batallas estratégicas en línea con campeones y habilidades únicas."
    },
    {
      "ID": "16",
      "titulo": "Genshin Impact",
      "genero": "Acción/RPG",
      "descripcion": "Un mundo de fantasía con personajes elementales y una jugabilidad cautivadora."
    },
    {
      "ID": "17",
      "titulo": "Apex Legends",
      "genero": "Battle Royale",
      "descripcion": "Combates en equipo en un mundo futurista con héroes y habilidades únicas."
    },
    {
      "ID": "18",
      "titulo": "World of Warcraft",
      "genero": "MMORPG",
      "descripcion": "Un vasto mundo de fantasía con razas, clases y misiones épicas."
    },
    {
      "ID": "19",
      "titulo": "Control",
      "genero": "Acción/Aventura",
      "descripcion": "Explora una agencia secreta y descubre poderes sobrenaturales en este juego intrigante."
    },
    {
      "ID": "20",
      "titulo": "Hades",
      "genero": "Roguelike",
      "descripcion": "Embárcate en un viaje al inframundo y desafía a los dioses en este juego de acción y mitología."
    }
  ]

function Buscador() {
    const [searchQuery, setSearchQuery] = useState('');
    const filteredGames = videojuegos.filter(game => game.titulo.toLowerCase().includes(searchQuery.toLowerCase()));
  
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
          <Nav.Link href="perfil">ver perfil</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
        
        <Row className='px-4 my-5'>
            <Col>
            
                <input type="text" placeholder="Buscar..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
            </Col> 
        </Row>
        
        <ul>
          {filteredGames.map(game => (
             <div class="card-container">
             <div class="card">
               
               <div class="card-content">
                 <h3 class="card-title">{game.ID}. {game.titulo}</h3>
                 <p class="card-text">Genero: {game.genero}</p>
                 <p class="card-text">{game.descripcion}</p>
               </div>
             </div>
             
             </div>
             
          ))}
        </ul>
      </div>
    );
  };
  
  export default Buscador;