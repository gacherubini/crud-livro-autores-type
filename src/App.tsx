import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/app.css';
import Home from './pages/Home';
import Books from './pages/Books';
import Header from './Header';
import BookDetails from './components/BookDetails';
import Authors from './pages/Authors';
import AuthorDetails from './components/AuthorDetails';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/authors/:id" element={<AuthorDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
