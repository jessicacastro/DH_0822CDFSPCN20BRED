const express = require('express'); // Importamos o módulo express
const app = express(); // Criamos uma instância do express
const usuarios = require('./usuarios.json'); // Importamos o arquivo usuarios.json

app.use(express.json()); // Configuramos o express para receber requisições no formato JSON

// GET
// POST -> .body, ou seja, o corpo da requisição
//PUT, PATCH, DELETE
// requisicao que é responsável pelos dados que eu estou recebendo nas rotas
// resposta que é responsável por enviar uma resposta para o front-end

// GET - Crie uma rota GET para /usuario
app.get('/usuario', (requisicao, resposta) => {
  resposta.status(404).json(usuarios); // Envia a resposta para o front-end
})

app.post('/usuario', (requisicao, resposta) => {
  console.log(requisicao.body)
  const usuario = requisicao.body;

  if (!usuario) {
    return resposta.status(400).json({ mensagem: 'Usuário não informado' });
  }
  // 2 - Adicionar o ativo por padrão
  const usuarioParaAdicionar = { ...usuario, ativo: usuario.idade > 18 };

  // 3 - Adicionar o usuário no banco de dados
  usuarios.push(usuarioParaAdicionar);

  // 4 - Retornar o usuário adicionado
  return resposta.status(201).json(usuarioParaAdicionar);
})

// DELETE - Crie uma rota DELETE para /usuario/:id
app.delete('/usuario/:id', (requisicao, resposta) => {
  const id = requisicao.params.id;

  const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === Number(id))

  // Se não encontrar o usuário, retorna mensagem de erro
  if (usuarioIndex < 0) {
    return resposta.status(404).json({ mensagem: 'Usuário não encontrado'})
  }

  // Remover o usuário do banco de dados
  usuarios.splice(usuarioIndex, 1);

  // Retornar o usuário removido
  return resposta.status(204).send();
})

app.listen(3000, () => console.log('Servidor rodando na porta 3000 com express!')) // Iniciamos o servidor na porta 3000
