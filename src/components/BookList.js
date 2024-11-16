import React, { useEffect, useState } from 'react';
import { fetchLivros, addLivro } from './services/api';

function Livros() {
  const [livros, setLivros] = useState([]);
  const [novoLivro, setNovoLivro] = useState({ titulo: '', autor: '', ano_publicacao: '' });

  useEffect(() => {
    const loadLivros = async () => {
      const data = await fetchLivros();
      setLivros(data);
    };
    loadLivros();
  }, []);

  const handleAddLivro = async () => {
    const livro = await addLivro(novoLivro);
    setLivros([...livros, livro]);
    setNovoLivro({ titulo: '', autor: '', ano_publicacao: '' });
  };

  return (
    <div>
      <h1>Lista de Livros</h1>
      <ul>
        {livros.map((livro) => (
          <li key={livro.id}>{livro.titulo} - {livro.autor} ({livro.ano_publicacao})</li>
        ))}
      </ul>

      <h2>Adicionar Livro</h2>
      <input
        type="text"
        placeholder="Título"
        value={novoLivro.titulo}
        onChange={(e) => setNovoLivro({ ...novoLivro, titulo: e.target.value })}
      />
      <input
        type="text"
        placeholder="Autor"
        value={novoLivro.autor}
        onChange={(e) => setNovoLivro({ ...novoLivro, autor: e.target.value })}
      />
      <input
        type="number"
        placeholder="Ano de Publicação"
        value={novoLivro.ano_publicacao}
        onChange={(e) => setNovoLivro({ ...novoLivro, ano_publicacao: e.target.value })}
      />
      <button onClick={handleAddLivro}>Adicionar</button>
    </div>
  );
}

export default Livros;
