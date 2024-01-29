import React from 'react';

interface Book {
  id: string;
  name: string;
  pages: string;
  autor_id: string;
}

interface BookListProps {
  books: Book[];
  onDeleteBook: (id: string) => void;
  onViewBook: (id: string) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onDeleteBook, onViewBook}) => {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <p>Nome do livro: {book.name}</p>
          <p>Pages: {book.pages}</p>
          <p>Autor_id: {book.autor_id}</p>
          <button onClick={() => onDeleteBook(book.id)}>Delete</button>
          <button onClick={() => onViewBook(book.id)}>View More</button>
        </div>
      ))}
    </div>
  );
};

export default BookList;
