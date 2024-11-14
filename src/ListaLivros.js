import React from 'react';

function ListaLivros({ livros, onDelete }) {
  return (
    <div>
      <h2>Lista de Livros</h2>
      {livros.length === 0 ? (
        <p>Nenhum livro cadastrado.</p>
      ) : (
        <ul>
          {livros.map((livro, index) => (
            <li key={index}>
              <strong>{livro.titulo}</strong> - {livro.autor} ({livro.ano})
              <button onClick={() => onDelete(index)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaLivros;
