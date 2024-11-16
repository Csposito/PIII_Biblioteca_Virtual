import React, { useState } from 'react';

function LoanForm({ registrarEmprestimo }) {
  const [livro, setLivro] = useState('');
  const [usuario, setUsuario] = useState('');
  const [dataDevolucao, setDataDevolucao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (livro && usuario && dataDevolucao) {
      const novoEmprestimo = {
        id: Date.now(),
        livro,
        usuario,
        dataDevolucao,
        status: 'Em andamento',
      };
      registrarEmprestimo(novoEmprestimo);
      setLivro('');
      setUsuario('');
      setDataDevolucao('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar Empréstimo</h2>
      <input
        type="text"
        placeholder="Livro"
        value={livro}
        onChange={(e) => setLivro(e.target.value)}
      />
      <input
        type="text"
        placeholder="Usuário"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <input
        type="date"
        value={dataDevolucao}
        onChange={(e) => setDataDevolucao(e.target.value)}
      />
      <button type="submit">Registrar</button>
    </form>
  );
}

export default LoanForm;
