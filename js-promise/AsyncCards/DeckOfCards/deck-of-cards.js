let deckId;

async function fetchDeck() {
  try {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    const data = await response.json();
    deckId = data.deck_id;
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchDeck();

document.getElementById('draw-card').addEventListener('click', async () => {
  try {
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    const data = await response.json();
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
  } catch (error) {
    console.log("Error:", error);
  }
});
