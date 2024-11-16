import React, { useState } from 'react';

function UserRegistration({ registrarUsuario }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipo, setTipo] = useState('Aluno');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome && email && senha) {
      registrarUsuario({ nome, email, senha, tipo });
      setNome('');
      setEmail('');
      setSenha('');
      setTipo('Aluno');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro de Usuário</h2>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="Aluno">Aluno</option>
        <option value="Professor">Professor</option>
      </select>
      <button type="submit">Registrar</button>
    </form>
  );
}

export default UserRegistration;
