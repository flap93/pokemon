function startGame() {
  let btnPokemon = document.getElementById("btn-pokemons");
  btnPokemon.addEventListener("click", selectPokemon);
}

function selectPokemon() {}

window.addEventListener("click", selectPokemon);
