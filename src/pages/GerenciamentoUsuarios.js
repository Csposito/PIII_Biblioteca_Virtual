import { useState } from 'react';
import UserRegistration from '../components/UserRegistration';
import UserList from '../components/UserList';

const GerenciamentoUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  const registrarUsuario = (usuario) => {
    setUsuarios([...usuarios, usuario]);
  };


  return (
    <div>
      <h2>Gerenciamento de Usuários</h2>
      <UserRegistration registrarUsuario={registrarUsuario} />
      <UserList usuarios={usuarios} />
    </div>
  );
};

export default GerenciamentoUsuarios;
