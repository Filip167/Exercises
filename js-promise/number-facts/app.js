document.getElementById('get-facts').addEventListener('click', () => {
    const baseURL = 'http://numbersapi.com';
    
    // Generate 10 random numbers
    const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1).join(',');
  
    // Fetch facts for these 10 random numbers
    fetch(`${baseURL}/${randomNumbers}?json`)
      .then(response => response.json())
      .then(data => {
        const factsContainer = document.getElementById('facts-container');
        factsContainer.innerHTML = '';  // Clear previous facts
  
        Object.values(data).forEach(fact => {
          const factElement = document.createElement('div');
          factElement.className = 'fact';
          factElement.innerText = fact;
          factsContainer.appendChild(factElement);
        });
      })
      .catch(err => console.log("Error:", err));
  });
  