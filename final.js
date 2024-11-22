// final.js - Visualizing data with Chart.js

document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("jokeChart").getContext("2d");
  
    // Fetch data from the Official Joke API
    fetch("https://official-joke-api.appspot.com/jokes/ten")
      .then(response => response.json())
      .then(data => {
        // Process the data to get category distribution
        const categories = data.map(joke => joke.type);
        const categoryCounts = categories.reduce((acc, category) => {
          acc[category] = (acc[category] || 0) + 1;
          return acc;
        }, {});
  
        // Prepare data for the chart
        const chartData = {
          labels: Object.keys(categoryCounts), // Unique joke categories
          datasets: [{
            label: "Joke Categories",
            data: Object.values(categoryCounts), // Count of each category
            backgroundColor: [
              "#3e4e3e",
              "#617961",
              "#90b190",
              "#b8e0b8"
            ]
          }]
        };
  
        // Create a pie chart
        new Chart(ctx, {
          type: "pie", // Pie chart type
          data: chartData,
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: "top"
              },
              tooltip: {
                enabled: true
              }
            }
          }
        });
      })
      .catch(error => {
        console.error("Error fetching jokes:", error);
        document.querySelector("main").innerHTML += "<p>Unable to load data for the chart.</p>";
      });
  });
  