// Deck of Cards
let deckId;

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(response => response.json())
  .then(data => {
    deckId = data.deck_id;
  });

document.getElementById('draw-card').addEventListener('click', () => {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then(response => response.json())
    .then(data => {
      let card = data.cards[0];
      let cardImage = document.createElement('img');
      cardImage.src = card.image;
      cardImage.className = 'card';

      // Random rotation
      let randomRotation = Math.floor(Math.random() * 60) - 30;
      cardImage.style.transform = `rotate(${randomRotation}deg)`;
      
      // Centering the card and making it larger
      cardImage.style.width = "150px";
      cardImage.style.height = "200px";

      document.getElementById('cards').appendChild(cardImage);
    })
    .catch(err => console.log("Error:", err));
});
