import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuPrincipal from "./components/MenuPrincipal";
import CadastroLivros from "./pages/CadastroLivros";
import BuscaLivros from "./pages/BuscaLivros";
import GerenciamentoUsuarios from "./pages/GerenciamentoUsuarios";
import ControleEmprestimos from "./pages/ControleEmprestimos";
import BookList from './components/BookList';
import React, { useState } from 'react';
import BookForm from './components/BookForm';
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
    <Router>
	<div className="App">
      <h1>Biblioteca Virtual</h1>
	</div>  
    
      <MenuPrincipal />
      <Routes>
        <Route path="/" element={<h1>Bem-vindo à Biblioteca Virtual</h1>} />
        <Route path="/cadastro-livros" element={<CadastroLivros />} />
        <Route path="/busca-livros" element={<BuscaLivros />} />
        <Route path="/usuarios" element={<GerenciamentoUsuarios />} />
        <Route path="/emprestimos" element={<ControleEmprestimos />} />
      </Routes>
    </Router>
  );
}

export default App;
