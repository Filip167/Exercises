
document.addEventListener("DOMContentLoaded", function () {
    const gifArea = document.getElementById("gif-area");
    const searchForm = document.querySelector("form");
    const searchInput = document.getElementById("search");
    const removeButton = document.getElementById("remove");

    searchForm.addEventListener("submit", async function (evt) {
        evt.preventDefault();

    const searchTerm = searchInput.value;
    searchInput.value = "";

        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
            const data = await response.json();

            if (data.data && data.data.length > 0) {
                addGif(data);
            }
        } catch (error) {
            console.error('Error fetching GIFs:', error);
        }
    });

    removeButton.addEventListener("click", function () {
        clearGifs();
    });

    function addGif(res) {
        let numResults = res.data.length;
        if (numResults) {
            let randomIdx = Math.floor(Math.random() * numResults);
            let newCol = document.createElement("div");
            newCol.className = "col-md-4 col-12 mb-4";
            
            let newGif = document.createElement("img");
            newGif.src = res.data[randomIdx].images.original.url;
            newGif.className = "w-100";
            
            newCol.appendChild(newGif);
            gifArea.appendChild(newCol);
        }
    }

    function clearGifs() {
        gifArea.innerHTML = "";
    }
});
