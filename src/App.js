import React, { useState } from 'react';
import './App.css';

function App() {
  const [livros, setLivros] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [ano, setAno] = useState('');

  const adicionarLivro = () => {
    if (titulo && autor && ano) {
      const novoLivro = { titulo, autor, ano };
      setLivros([...livros, novoLivro]);
      setTitulo('');
      setAutor('');
      setAno('');
    }
  };

  const removerLivro = (index) => {
    const novosLivros = [...livros];
    novosLivros.splice(index, 1);
    setLivros(novosLivros);
  };

  return (
    <div className="App">
      <h1>Biblioteca Rápida</h1>
      <div>
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
        <button onClick={adicionarLivro}>Adicionar Livro</button>
      </div>

      <h2>Lista de Livros</h2>
      {livros.length === 0 ? (
        <p>Nenhum livro cadastrado.</p>
      ) : (
        <ul>
          {livros.map((livro, index) => (
            <li key={index}>
              {livro.titulo} - {livro.autor} ({livro.ano})
              <button onClick={() => removerLivro(index)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
