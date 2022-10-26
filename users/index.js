// Aluno 1- Responsável por criar o projeto no git e dar acesso aos outros
// Aluno 2 - Responsável por criar a função de listar todos os usuários acima de 18 anos.
// Aluno 3 - Responsável por criar a função de listar todos os usuários inserindo mais uma informação para cada de ativo: true
// Aluno 4 - Responsável por criar a função de adicionar um usuário
// Aluno 5- Responsável por criar a função de remover um usuário
let bancoDeDados = require('./database/users.json')

// ['Mylena', 'Clara', 'Lenix'] => array de strings
// [1, 2, 3, 4, 5] => array de números
// [{}, {}, {}] => array de objetos

const listarUsuariosMaioresDeIdade = () => {
  // 1- Filtro os usuários
  // 2- Retorno mapeando e trazendo apenas o nome
  const lista = bancoDeDados.filter((usuario) => usuario.idade > 18).map((usuario) => usuario.nome)

  return lista;
}
console.log('Lista de usuários acima de 18: ', listarUsuariosMaioresDeIdade());
const listarUsuariosAdicionandoAtivo = () => {
  // map -> retorna um novo array
  // ... -> spread operator
  // ativar somente usuários acima de 18
  const lista = bancoDeDados.map((usuario) => ({ ...usuario, ativo: usuario.idade > 18 }))

  return lista;
}
console.log('Lista de usuários com ativo: ', listarUsuariosAdicionandoAtivo());

const adicionarUsuario = (usuario) => {
  // 1 - Verificar se o parâmetro veio e está ok.
  if (!usuario) {
    console.log("Usuário não informado");
    return;
  }
  // 2 - Adicionar o ativo por padrão
  const usuarioParaAdicionar = { ...usuario, ativo: usuario.idade > 18 };

  // 3 - Adicionar o usuário no banco de dados
  bancoDeDados.push(usuarioParaAdicionar);
}
adicionarUsuario({
  "id": 7,
  "nome": "Kevin Campos",
  "idade": 17,
  "sexo": "M",
  "email": "kevin@gmail.com",
  "telefone": "999999999"
});
adicionarUsuario({
  "id": 8,
  "nome": "Juliana Campos",
  "idade": 20,
  "sexo": "F",
  "email": "ju@gmail.com",
  "telefone": "999999999"
});
console.log("Lista de usuários com o novo usuário: ", bancoDeDados);

const removerUsuario = (idUsuario) => {
  // Find Index -> retorna o índice do elemento que eu quero caso ache, senão retorna -1
  const usuarioIndex = bancoDeDados.findIndex((usuario) => usuario.id === idUsuario)

  // Se não encontrar o usuário, retorna
  if (usuarioIndex < 0) {
    console.log("Usuário não encontrado");
    return;
  }

  // Remover o usuário do banco de dados
  bancoDeDados.splice(usuarioIndex, 1);
}
removerUsuario(8);
console.log("Lista de usuários com o usuário removido: ", bancoDeDados);
