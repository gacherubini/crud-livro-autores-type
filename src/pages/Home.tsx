import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Bem-vindo ao Nosso Mundo Literário</h1>
      </header>
      <section className="cta-section">
        <p>Descubra uma vasta coleção de livros e explore as histórias cativantes de diversos autores.</p>
        <div className="cta-buttons">
          <Link to="/books">
            <button className="cta-button">Explorar Livros</button>
          </Link>
          <Link to="/authors">
            <button className="cta-button">Conhecer Autores</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
