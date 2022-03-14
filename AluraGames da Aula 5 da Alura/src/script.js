function adicionarJogo() {
  var jogoFavorito = document.getElementById("jogos").value;
  if (jogoFavorito.endsWith(".jpg")) {
    listarJogosNaTela(jogoFavorito);
  } else {
    console.error("Endereço do jogo inválido");
  }
  document.getElementById("jogos").value = "";
}

function listarJogosNaTela(jogos) {
  var elementoJogoFavorito = "<img scr=" + jogos + ">";
  var elementoListaJogos = document.getElementById("listaJogos");
  elementoListaJogos.innerHTML =
    elementoListaJogos.innerHTML + elementoJogoFavorito;
}
