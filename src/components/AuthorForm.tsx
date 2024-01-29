import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface AuthorFormProps {
  onAddAuthor: (newAuthor: { id: string; name: string; email: string }) => void;
}

const AuthorForm: React.FC<AuthorFormProps> = ({ onAddAuthor }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    id: '',
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
    if (formData.name.trim() && formData.email.trim() && formData.id.trim()) {
      const newAuthor = {
        id_author: uuidv4(),
        ...formData,
      };
      onAddAuthor(newAuthor);
      setFormData({
        name: '',
        email: '',
        id: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Nome do Autor" value={formData.name} onChange={handleChange} />
      <input type="text" name="email" placeholder="email" value={formData.email} onChange={handleChange} />
      <input type="text" name="id" placeholder="id" value={formData.id} onChange={handleChange} />
      <button type="submit">Add Author</button>
    </form>
  );
};

export default AuthorForm;
