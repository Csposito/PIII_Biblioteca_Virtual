import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CadastroLivros from './pages/CadastroLivros';
import GerenciamentoUsuarios from './pages/GerenciamentoUsuarios';
import ControleEmprestimos from './pages/ControleEmprestimos';

const App = () => {
  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif', margin: '0 auto', maxWidth: '1200px' }}>
        <header style={{ background: '#0073e6', padding: '10px' }}>
          <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 style={{ color: '#fff' }}>Biblioteca Virtual</h1>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0 }}>
              <li>
                <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
              </li>
              <li>
                <Link to="/cadastro-livros" style={{ color: '#fff', textDecoration: 'none' }}>Cadastro de Livros</Link>
              </li>
              <li>
                <Link to="/gerenciamento-usuarios" style={{ color: '#fff', textDecoration: 'none' }}>Gerenciamento de Usuários</Link>
              </li>
              <li>
                <Link to="/controle-emprestimos" style={{ color: '#fff', textDecoration: 'none' }}>Controle de Empréstimos</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<h2>Bem-vindo à Biblioteca Virtual</h2>} />
            <Route path="/cadastro-livros" element={<CadastroLivros />} />
            <Route path="/gerenciamento-usuarios" element={<GerenciamentoUsuarios />} />
            <Route path="/controle-emprestimos" element={<ControleEmprestimos />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
