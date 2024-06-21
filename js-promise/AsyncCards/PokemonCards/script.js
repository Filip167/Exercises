let pokemonUrls = [];

async function fetchPokemonUrls() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    pokemonUrls = data.results.map(pokemon => pokemon.url);
    console.log("Fetched Pokémon URLs:", pokemonUrls);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchPokemonUrls();

document.getElementById('get-pokemon').addEventListener('click', async () => {
  if (pokemonUrls.length > 0) {
    const randomIndex = Math.floor(Math.random() * pokemonUrls.length);
    const pokemonUrl = pokemonUrls.splice(randomIndex, 1)[0];
    console.log("Selected Pokémon URL:", pokemonUrl);

    try {
      const pokemonResponse = await fetch(pokemonUrl);
      if (!pokemonResponse.ok) {
        throw new Error('Network response was not ok');
      }
      const pokemonData = await pokemonResponse.json();
      const speciesUrl = pokemonData.species.url;
      console.log("Fetched Pokémon Data:", pokemonData);

      const speciesResponse = await fetch(speciesUrl);
      if (!speciesResponse.ok) {
        throw new Error('Network response was not ok');
      }
      const speciesData = await speciesResponse.json();
      console.log("Fetched Pokémon Species Data:", speciesData);
      const englishFlavorText = speciesData.flavor_text_entries.find(entry => entry.language.name === 'en');

      const cardElement = document.createElement('div');
      cardElement.className = 'card';
      cardElement.innerHTML = `
        <h3>${pokemonData.name}</h3>
        <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
        <p>${englishFlavorText ? englishFlavorText.flavor_text : ''}</p>
      `;
      document.getElementById('cards-container').appendChild(cardElement);
    } catch (error) {
      console.log("Error:", error);
    }
  } else {
    alert("No more Pokémon to display!");
  }
});
