const catalogo = require('./database/catalogo.json')

// listar todos os filmes que estão em cartaz (listarTodosOsFilmesEmCartaz)
const listarTodosOsFilmesEmCartaz = () => {
  catalogo.forEach((filme) => console.log(`Nome do filme: ${filme.titulo}`))
}

// buscar um filme específico pelo código dele (buscarFilme) -> parametro: codigo
const buscarFilme = (codigoParametro) => catalogo.find((filme) => filme.codigo == codigoParametro)

// alterar o status de emCartaz (true -> false e se tiver false -> true) 
// (alterarStatusEmCartaz) -> parametro: codigo
const alterarStatusEmCartaz = (codigo, callback) => {
  let filme = callback(codigo)

  if (!filme) {
    console.log("Filme não encontrado!")
    return null;
  }

  filme.emCartaz == true ? 
    filme.emCartaz = false 
  : filme.emCartaz = true;
  // filme.emCartaz = !filme.emCartaz

  return filme;
}

// adicionar um novo filme no nosso catalogo (adicionarFilme) -> 
// parametro: filme: { codigo, titulo, atores, duracao, anoDeLancamento }
const adicionarFilme = (filme) => {
  const { codigo, titulo, atores, duracao, anoDeLancamento } = filme;

  if (!duracao) {
    console.log("Não é possível adicionar um filme sem duração");
    return
  }

  const filmeParaAdicionar ={
      ...filme,
      emCartaz: true
  }
  
  catalogo.push(filmeParaAdicionar);

  return filmeParaAdicionar;
}

// listar os filmes com duracao maior do que 2h (listarFilmesComLongaDuracao) -> filter;
const listarFilmesComLongaDuracao = () => {
  return catalogo.filter((filme) => filme.duracao > 2) // [{}, {}, {}]
}

// console.log(alterarStatusEmCartaz(1, buscarFilme))
// listarTodosOsFilmesEmCartaz()
  adicionarFilme({ 
    codigo: 6, 
    titulo: "O Poderoso Chefão",
    atores: ["Marlon Brando", "Al Pacino", "James Caan"],
    duracao: 3.5,
    anoDeLancamento: 1972
  })

  // chamar a função de listar os filmes aqui depois de chamar a função de adicionar
  console.log(listarFilmesComLongaDuracao())

  //alterações myllena
  console.log('Olá')