import { useState } from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

const CadastroLivros = () => {
  const [busca, setBusca] = useState('');
  const [livros, setLivros] = useState([
    { id: 1, titulo: 'Livro A', autor: 'Autor A' },
    { id: 2, titulo: 'Livro B', autor: 'Autor B' },
  ]);

  const adicionarLivro = (novoLivro) => {
    setLivros([...livros, novoLivro]);
  };

  const livrosFiltrados = livros.filter((livro) =>
    livro.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div>
      <h2>Cadastro de Livros</h2>
      <BookForm adicionarLivro={adicionarLivro} />
      <input
        type="text"
        placeholder="Buscar livros..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <BookList livros={livrosFiltrados} />
    </div>
  );
};

export default CadastroLivros;
