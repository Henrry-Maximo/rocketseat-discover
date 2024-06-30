// função para executar método quando o botão for pressionado
function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

  // selecionar o elemento através da class para obter a imagem
  const img = document.querySelector("#profile img");

  if (html.classList.contains('light')) {
    // utilizar o atributo "setAttribute" para especificar o elemento que deve ser alterado
    // inserir dois parâmetros: qual e onde...
    img.setAttribute("src", "./assets/img/perfil-hacker.png")
    img.setAttribute("alt", "teste")
  } else {
    img.setAttribute("src", "./assets/img/perfil-hacker-2.png")
    img.setAttribute("alt", "teste 2")
  }

  // classList é um objeto que contém método, um dele é pra verificar se existe
  // if (html.classList.contains('light')) {
  //   html.classList.remove('light');
  // } else {
  //   html.classList.add('light');
  // }
}