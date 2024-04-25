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
      {
        name: "Giant Sequoia",
        description: "Sequoiadendron giganteum",
        imageURL: "assets/images/plant_1.jpg",
      },
      {
        name: "Plant 2",
        description: "Description of Plant 2",
        imageURL: "image2.jpg",
      },
      {
        name: "Plant 3",
        description: "Description of Plant 3",
        imageURL: "image3.jpg",
      },
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

      // Create a div for the image
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("plant-image");
      imageContainer.innerHTML = `
          <img src="${plant.imageURL}" alt="${plant.name} Image">
        `;

      // Create a div for the text content
      const textContent = document.createElement("div");
      textContent.classList.add("plant-card-content");
      textContent.innerHTML = `
          <h2>${plant.name}</h2>
          <p>${plant.description}</p>
        `;

      // Append image container and text content to the plant card
      plantCard.appendChild(imageContainer);
      plantCard.appendChild(textContent);

      // Append the plant card to the fragment
      fragment.appendChild(plantCard);
    });
    // Append the fragment with all plant cards to the results container
    resultsContainer.appendChild(fragment);
  }

  // Event listener for search button click
  searchButton.addEventListener("click", searchPlants);
});
