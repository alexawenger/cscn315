// 1. Array Example: A list of technical skills
var skills = ["JavaScript", "Python", "C++", "C#", "SQL", "R"];

// Populate the skills list dynamically in the HTML
var skillsList = document.getElementById("skills");
skills.forEach(function(skill) {
  var listItem = document.createElement("li");
  listItem.innerText = skill;
  skillsList.appendChild(listItem);
});

// Function to handle the quiz form submission
function handleQuizSubmit() {
    // Get user input values
    var yearsOfExperience = document.getElementById("years").value;
    var favoriteLanguage = document.getElementById("language").value;
  
    // Determine experience level
    var experienceMessage = "";
    if (yearsOfExperience < 1) {
      experienceMessage = "You are a beginner developer.";
    } else if (yearsOfExperience >= 1 && yearsOfExperience < 5) {
      experienceMessage = "You are an intermediate developer.";
    } else {
      experienceMessage = "You are an advanced developer.";
    }
  
    // Output experience level
    document.getElementById("experience-level").innerText = experienceMessage;
  
    // Determine developer type based on the favorite language
    var developerTypeMessage = "";
    switch (favoriteLanguage) {
      case "JavaScript":
        developerTypeMessage = "You are a web developer.";
        break;
      case "Python":
        developerTypeMessage = "You are a data scientist or backend developer.";
        break;
      case "C++":
        developerTypeMessage = "You are a systems or software developer.";
        break;
      default:
        developerTypeMessage = "You are a versatile developer.";
        break;
    }
  
    // Output developer type
    document.getElementById("developer-type").innerText = developerTypeMessage;
  
    // Return false to prevent the form from submitting and refreshing the page
    return false;
  }
  