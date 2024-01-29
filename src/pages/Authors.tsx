import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';

interface Author {
    email: string;
    id: string;
    name: string;
}

// Corrected AuthorListProps
interface AuthorListProps {
  authors: Author[];
  onDeleteAuthor: (id: string) => void;
  onViewAuthor: (id: string) => void;
}

const Authors: React.FC = () => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    const storedAuthors = window.localStorage.getItem('authors');
    if (storedAuthors !== null) {
      setAuthors(JSON.parse(storedAuthors));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      window.localStorage.setItem('authors', JSON.stringify(authors));
    }
  }, [authors, isLoading]);

  const handleAddAuthor = (newAuthor: Author) => {
    setAuthors([...authors, newAuthor]);
  };

  const handleDeleteAuthor = (id: string) => {
    const updatedAuthors = authors.filter((author) => author.id !== id);
    setAuthors(updatedAuthors);
  };

  const handleViewAuthor = (id: string) => {
    navigate(`/authors/${id}`);
  };


  return (
    <div className="App">
      <h1>Author List</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <AuthorForm onAddAuthor={handleAddAuthor} />
          <AuthorList
            authors={authors}
            onDeleteAuthor={handleDeleteAuthor}
            onViewAuthor={handleViewAuthor}
          />
        </>
      )}
    </div>
  );
};

export default Authors;
