import React from 'react';
import { Link } from 'react-router-dom';

import './style/app.css';

const Header: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/authors">Authors</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
