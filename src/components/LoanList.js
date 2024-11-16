import React from 'react';

function LoanList({ emprestimos, atualizarStatus }) {
  const getStatus = (dataDevolucao, status) => {
    if (status === 'Devolvido') return 'Devolvido';
    const hoje = new Date().toISOString().split('T')[0];
    return hoje > dataDevolucao ? 'Atrasado' : 'Em andamento';
  };

  return (
    <div>
      <h2>Empréstimos Registrados</h2>
      {emprestimos.length === 0 ? (
        <p>Nenhum empréstimo registrado.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Livro</th>
              <th>Usuário</th>
              <th>Data de Devolução</th>
              <th>Status</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {emprestimos.map((e) => (
              <tr key={e.id}>
                <td>{e.livro}</td>
                <td>{e.usuario}</td>
                <td>{e.dataDevolucao}</td>
                <td>{getStatus(e.dataDevolucao, e.status)}</td>
                <td>
                  {e.status !== 'Devolvido' && (
                    <button onClick={() => atualizarStatus(e.id)}>
                      Marcar como Devolvido
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default LoanList;
