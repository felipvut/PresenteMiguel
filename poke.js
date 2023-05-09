var xhttp = new XMLHttpRequest
xhttp.open("GET",'https://pokeapi.co/api/v2/pokemon?&limit=151', false)
xhttp.send()
const requisicao = JSON.parse(xhttp.responseText).results
console.log(requisicao)

const lista_pokemons = document.querySelector('.list-pokemons')
for(pokemon of requisicao) {
    let p = document.createElement('p')
    p.textContent = pokemon.name
    lista_pokemons.appendChild(p)

}