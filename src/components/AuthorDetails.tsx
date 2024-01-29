import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Author {
  id: string;
  name: string;
  email: string;
}

const AuthorDetails: React.FC = () => {
  const { id } = useParams();
  const [selectedAuthor, setSelectedAuthor] = useState<Author | null>(null);

  useEffect(() => {
    const storedAuthors = window.localStorage.getItem('authors');
    
    if (storedAuthors) {
      const parsedAuthors: Author[] = JSON.parse(storedAuthors);
      const author = parsedAuthors.find((author) => author.id === id);
      
      if (author) {
        setSelectedAuthor(author);
      }
    }
  }, [id]);

  if (!selectedAuthor) {
    return <p>Author not found</p>;
  }

  return (
    <div>
      <h2>Authors Details</h2>
      <p>Name: {selectedAuthor.name}</p>
      <p>Email: {selectedAuthor.email}</p>
      <p>ID: {selectedAuthor.id}</p>
    </div>
  );
};

export default AuthorDetails;
