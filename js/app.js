document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("search-button");
  const searchInput = document.getElementById("search-input");
  const resultsContainer = document.getElementById("results-container");

  // Function to handle search
  function searchPlants() {
    const searchTerm = searchInput.value.trim();
    if (
      !searchTerm ||
      searchTerm.length <= 1 ||
      !isNaN(parseFloat(searchTerm))
    ) {
      // Display "No results found" message for invalid search terms
      resultsContainer.innerHTML = "<p>No results found.</p>";
      return;
    }

    // Make a GET request to the backend server to fetch plant data
    fetch(`http://localhost:3000/plants?search=${searchTerm}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch plant data");
        }
        return response.json();
      })
      .then((data) => {
        displayResults(data); // Display the received plant data
      })
      .catch((error) => {
        console.error("Error fetching plant data:", error);
        // Display an error message to the user
        resultsContainer.innerHTML = "<p>Error fetching plant data.</p>";
      });
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

      // Create a div for the text content
      const textContent = document.createElement("div");
      textContent.classList.add("plant-card-content");
      textContent.innerHTML = `
      <h2>${plant.common_name}</h2>
      <p><strong>Scientific Name:</strong> ${plant.scientific_name}</p>
      <p><strong>Family:</strong> ${plant.family}</p>
      <p><strong>Description:</strong> ${plant.description}</p>
      <p><strong>Habitat:</strong> ${plant.habitat}</p>
    `;

      // Append text content to the plant card
      plantCard.appendChild(textContent);

      // Append the plant card to the fragment
      fragment.appendChild(plantCard);
    });
    // Append the fragment with all plant cards to the results container
    resultsContainer.appendChild(fragment);
  }

  // Event listener for search button click
  searchButton.addEventListener("click", searchPlants);

  // Event listener for pressing the "Enter" key on the search input field
  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      // Prevent the default form submission behavior
      event.preventDefault();
      // Trigger the search functionality
      searchPlants();
    }
  });
});
