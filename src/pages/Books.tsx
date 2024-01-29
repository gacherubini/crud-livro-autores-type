import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

interface Book {
  id: string;
  name: string;
  pages: string;
  autor_id: string;
}

const Books: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    const storedBooks = window.localStorage.getItem('books');
    if (storedBooks !== null) {
      setBooks(JSON.parse(storedBooks));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      window.localStorage.setItem('books', JSON.stringify(books));
    }
  }, [books, isLoading]);

  const handleAddBook = (newBook: Book) => {
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = (id: string) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const handleViewBooks = (id: string) => {
    // Navigate to the author's details instead of modifying the authors state
    navigate(`/books/${id}`);
  };


  return (
    <div className="App">
      <h1>Books List</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <BookForm onAddBook={handleAddBook} />
          <BookList 
          books={books} 
          onDeleteBook={handleDeleteBook} 
          onViewBook={handleViewBooks}
          />
        </>
      )}
    </div>
  );
};

export default Books;
