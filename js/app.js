document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("search-button");
  const searchInput = document.getElementById("search-input");
  const resultsContainer = document.getElementById("results-container");

  // Function to handle search
  function searchPlants() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm === "") {
      alert("Please enter a search term.");
      return;
    }
    // Perform search operation (e.g., fetch data from server)
    // Replace this with actual search functionality
    console.log("Searching for: " + searchTerm);
    // Simulated search results
    const results = [
      { name: "Plant 1", description: "Description of Plant 1" },
      { name: "Plant 2", description: "Description of Plant 2" },
      { name: "Plant 3", description: "Description of Plant 3" },
    ];
    displayResults(results);
  }

  // Function to display search results
  function displayResults(results) {
    resultsContainer.innerHTML = ""; // Clear previous results
    if (results.length === 0) {
      resultsContainer.innerHTML = "<p>No results found.</p>";
      return;
    }
    const fragment = document.createDocumentFragment();
    results.forEach((plant) => {
      const plantCard = document.createElement("div");
      plantCard.classList.add("plant-card");
      plantCard.innerHTML = `
                <div class="plant-card-content">
                    <h2>${plant.name}</h2>
                    <p>${plant.description}</p>
                </div>
            `;
      fragment.appendChild(plantCard);
    });
    resultsContainer.appendChild(fragment);
  }

  // Event listener for search button click
  searchButton.addEventListener("click", searchPlants);
});
