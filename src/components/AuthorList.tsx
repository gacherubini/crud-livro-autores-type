import React from 'react';

interface Author {
  id: string;
  name: string;
  email: string;
}

interface AuthorListProps {
  authors: Author[];
  onDeleteAuthor: (id: string) => void;
  onViewAuthor: (id: string) => void;
}

const AuthorList: React.FC<AuthorListProps> = ({ authors, onDeleteAuthor, onViewAuthor}) => {
  return (
    <div>
      {authors.map((author) => (
        <div key={author.id}>
          <p>Nome do Author: {author.name}</p>
          <p>Email: {author.email}</p>
          <p>Autor_id: {author.id}</p>
          <button onClick={() => onViewAuthor(author.id)}>View More</button>
          <button onClick={() => onDeleteAuthor(author.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AuthorList;
