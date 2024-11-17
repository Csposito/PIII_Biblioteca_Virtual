import { Link } from "react-router-dom";

const MenuPrincipal = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/cadastro-livros">Cadastro de Livros</Link></li>
        <li><Link to="/busca-livros">Busca de Livros</Link></li>
        <li><Link to="/usuarios">Gerenciamento de Usuários</Link></li>
        <li><Link to="/emprestimos">Controle de Empréstimos</Link></li>
      </ul>
    </nav>
  );
};

export default MenuPrincipal;
