import React from 'react';

function UserList({ usuarios }) {
  return (
    <div>
      <h2>Lista de Usuários</h2>
      {usuarios.length === 0 ? (
        <p>Nenhum usuário cadastrado.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario, index) => (
              <tr key={index}>
                <td>{usuario.nome}</td>
                <td>{usuario.email}</td>
                <td>{usuario.tipo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserList;
