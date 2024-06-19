let pokemonUrls = [];

// Fetch all Pokémon names and URLs
fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    pokemonUrls = data.results.map(pokemon => pokemon.url);
    console.log("Fetched Pokémon URLs:", pokemonUrls);
  })
  .catch(err => console.log("Error:", err));

document.getElementById('get-pokemon').addEventListener('click', () => {
  if (pokemonUrls.length > 0) {
    const randomIndex = Math.floor(Math.random() * pokemonUrls.length);
    const pokemonUrl = pokemonUrls.splice(randomIndex, 1)[0];
    console.log("Selected Pokémon URL:", pokemonUrl);

    fetch(pokemonUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(pokemonData => {
        const speciesUrl = pokemonData.species.url;
        console.log("Fetched Pokémon Data:", pokemonData);

        return fetch(speciesUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(speciesData => {
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
          });
      })
      .catch(err => console.log("Error:", err));
  } else {
    alert("No more Pokémon to display!");
  }
});
