// proj11.js - Fetch and display a random joke using the Official Joke API

document.addEventListener("DOMContentLoaded", function () {
    const jokeInfo = document.getElementById("joke-info");
    const newJokeBtn = document.getElementById("new-joke-btn");
  
    // Function to fetch a random joke and display it
    function fetchRandomJoke() {
      // API endpoint for a random joke
      const apiUrl = "https://official-joke-api.appspot.com/random_joke";
  
      // Fetch joke data from the API
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then(data => {
          // Display the joke setup and punchline
          jokeInfo.innerHTML = `
            <p><strong>Setup:</strong> ${data.setup}</p>
            <p><strong>Punchline:</strong> ${data.punchline}</p>
          `;
        })
        .catch(error => {
          console.error("There was a problem with the fetch operation:", error);
          jokeInfo.innerHTML = "<p>Unable to load joke at this time.</p>";
        });
    }
  
    // Event listener for the button to get a new joke
    newJokeBtn.addEventListener("click", fetchRandomJoke);
  
    // Fetch a random joke when the page loads
    fetchRandomJoke();
  });
  