import React, { useState } from 'react';

function FormLivro({ onAdd }) {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [ano, setAno] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titulo && autor && ano) {
      onAdd({ titulo, autor, ano });
      setTitulo('');
      setAutor('');
      setAno('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro de Livro</h2>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Autor"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Ano"
        value={ano}
        onChange={(e) => setAno(e.target.value)}
        required
      />
      <button type="submit">Cadastrar Livro</button>
    </form>
  );
}

export default FormLivro;
