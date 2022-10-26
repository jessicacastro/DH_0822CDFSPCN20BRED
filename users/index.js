// Aluno 1- Responsável por criar o projeto no git e dar acesso aos outros
// Aluno 2 - Responsável por criar a função de listar todos os usuários acima de 18 anos.
// Aluno 3 - Responsável por criar a função de listar todos os usuários inserindo mais uma informação para cada de ativo: true
// Aluno 4 - Responsável por criar a função de adicionar um usuário
// Aluno 5- Responsável por criar a função de remover um usuário
let bancoDeDados = require('./database/users.json')

const listarUsuariosMaioresDeIdade = () => {
  const lista = bancoDeDados.filter((usuario) => usuario.idade > 18);

  return lista;
}

console.log('Lista de usuários acima de 18: ', listarUsuariosMaioresDeIdade());