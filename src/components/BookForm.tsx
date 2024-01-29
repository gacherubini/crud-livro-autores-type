import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface BookFormProps {
  onAddBook: (newBook: { id: string; name: string; pages: string; autor_id: string }) => void;
}

const BookForm: React.FC<BookFormProps> = ({ onAddBook }) => {
  const [formData, setFormData] = useState({
    name: '',
    pages: '',
    autor_id: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.pages.trim() && formData.autor_id.trim()) {
      const newBook = {
        id: uuidv4(),
        ...formData,
      };
      onAddBook(newBook);
      setFormData({
        name: '',
        pages: '',
        autor_id: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Nome do Livro" value={formData.name} onChange={handleChange} />
      <input type="text" name="pages" placeholder="Pages" value={formData.pages} onChange={handleChange} />
      <input type="text" name="autor_id" placeholder="autor_id" value={formData.autor_id} onChange={handleChange} />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
