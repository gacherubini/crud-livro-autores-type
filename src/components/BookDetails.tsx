import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Book {
  id: string;
  name: string;
  pages: string;
  autor_id: string;
}

const BookDetails: React.FC = () => {
  const { id } = useParams();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  useEffect(() => {
    const storedBooks = window.localStorage.getItem('books');

    if (storedBooks) {
      const parsedBooks: Book[] = JSON.parse(storedBooks);
      const book = parsedBooks.find((book) => book.id === id);

      if (book) {
        setSelectedBook(book);
      }
    }
  }, [id]);

  if (!selectedBook) {
    return <p>Book not found</p>;
  }

  return (
    <div>
      <h2>Book Details</h2>
      <p>Title: {selectedBook.name}</p>
      <p>Pages: {selectedBook.pages}</p>
      <p>AuthorId: {selectedBook.autor_id}</p>
    </div>
  );
};

export default BookDetails;
