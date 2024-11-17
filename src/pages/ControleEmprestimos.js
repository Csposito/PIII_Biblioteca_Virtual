import React, { useState } from 'react';
import LoanForm from '../components/LoanForm';
import LoanList from '../components/LoanList';

const ControleEmprestimos = () => {
  const [emprestimos, setEmprestimos] = useState([]);

  const adicionarEmprestimo = (emprestimo) => {
    setEmprestimos([...emprestimos, emprestimo]);
  };

  return (
    <div>
      <h2>Controle de Empréstimos</h2>
      <LoanForm adicionarEmprestimo={adicionarEmprestimo} />
      <LoanList emprestimos={emprestimos} />
    </div>
  );
};

export default ControleEmprestimos;
