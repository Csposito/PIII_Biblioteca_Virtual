import React, { useState } from 'react';

function BookForm({ adicionarLivro }) {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [ano, setAno] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titulo && autor && ano) {
      adicionarLivro({ titulo, autor, ano });
      setTitulo('');
      setAutor('');
      setAno('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastrar Livro</h2>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Autor"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
      />
      <input
        type="number"
        placeholder="Ano"
        value={ano}
        onChange={(e) => setAno(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default BookForm;
