import axios from 'axios';

const API_URL = 'http://localhost:5000'; // URL do backend

// Buscar todos os livros
export const fetchLivros = async () => {
  const response = await axios.get(`${API_URL}/livros`);
  return response.data;
};

// Adicionar um novo livro
export const addLivro = async (livro) => {
  const response = await axios.post(`${API_URL}/livros`, livro);
  return response.data;
};
