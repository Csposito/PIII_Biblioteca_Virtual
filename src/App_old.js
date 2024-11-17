import React, { useState } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import UserRegistration from './components/UserRegistration';
import UserList from './components/UserList';
import LoanForm from './components/LoanForm';
import LoanList from './components/LoanList';

function App() {
  const [livros, setLivros] = useState([]);
  const [busca, setBusca] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  const [emprestimos, setEmprestimos] = useState([]);

  const registrarEmprestimo = (emprestimo) => {
    setEmprestimos([...emprestimos, emprestimo]);
  };

  const atualizarStatus = (id) => {
    setEmprestimos(
      emprestimos.map((e) =>
        e.id === id ? { ...e, status: 'Devolvido' } : e
      )
    );
  };

  const registrarUsuario = (usuario) => {
    setUsuarios([...usuarios, usuario]);
  };

  const adicionarLivro = (livro) => {
    setLivros([...livros, livro]);
  };

  const livrosFiltrados = livros.filter((livro) =>
    livro.titulo.toLowerCase().includes(busca.toLowerCase()) ||
    livro.autor.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Biblioteca Virtual</h1>
      <BookForm adicionarLivro={adicionarLivro} />
      <input
        type="text"
        placeholder="Buscar por título ou autor"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <BookList livros={livrosFiltrados} />
	  <h1>Gerenciamento de Usuários</h1>
      <UserRegistration registrarUsuario={registrarUsuario} />
      <UserList usuarios={usuarios} />
	  <h1>Controle de Empréstimos</h1>
      <LoanForm registrarEmprestimo={registrarEmprestimo} />
      <LoanList emprestimos={emprestimos} atualizarStatus={atualizarStatus} />
    </div>
  );
}

export default App;
