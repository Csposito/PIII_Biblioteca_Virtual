const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pool = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rota para buscar todos os livros
app.get('/livros', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM livros');
    res.json(result.rows);
  } catch (err) {
    console.error("Erro ao buscar livros:", err.message);
    res.status(500).send({ error: 'Erro no servidor ao buscar livros.' });
  }
});

// Rota para adicionar um novo livro
app.post('/livros', async (req, res) => {
  try {
    const { titulo, autor, ano_publicacao } = req.body;
    const result = await pool.query(
      'INSERT INTO livros (titulo, autor, ano_publicacao) VALUES ($1, $2, $3) RETURNING *',
      [titulo, autor, ano_publicacao]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
});

// Iniciar o servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ message: 'Conexão com o banco bem-sucedida!', data: result.rows });
  } catch (err) {
    console.error("Erro ao testar conexão com o banco:", err.message);
    res.status(500).send({ error: 'Erro ao conectar ao banco.' });
  }
});
