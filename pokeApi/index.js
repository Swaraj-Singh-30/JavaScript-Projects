document.addEventListener("DOMContentLoaded", function() {
  // Add event listener to input field
  const inputField = document.getElementById("pokemonName");
  inputField.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) { // Check if Enter key is pressed
      fetchData(); // Call fetchData() function
    }
  });
});

async function fetchData() {
  try {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok) {
      throw new Error("Could not fetch resources");
    }

    const data = await response.json();
    console.log(data);
    const pokemonSprite = data.sprites.front_default;

    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";

  } catch (error) {
    console.error(error);
  }
}
