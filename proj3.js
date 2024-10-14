// Function to handle form submission
function handleQuizSubmit(event) {
  event.preventDefault(); // Prevent default form submission behavior

  try {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const years = parseInt(document.getElementById('years').value);
    const language = document.getElementById('language').value;
    const github = document.getElementById('github').value;

    // Basic validation for years of experience
    if (isNaN(years) || years < 0) {
      throw new Error('Please enter a valid number of years.');
    }

    // Displaying results based on experience
    const experienceOutput = document.getElementById('experience-level');
    const typeOutput = document.getElementById('developer-type');

    if (years < 2) {
      experienceOutput.textContent = `${name}, you are a Junior Developer with experience in ${language}.`;
    } else if (years <= 5) {
      experienceOutput.textContent = `${name}, you are a Mid-Level Developer with expertise in ${language}.`;
    } else {
      experienceOutput.textContent = `${name}, you are a Senior Developer in ${language}.`;
    }

    typeOutput.textContent = `GitHub Username: ${github}. You should be proud of your work!`;

    console.log("Form submitted successfully with no errors."); // Debugging log
  } catch (error) {
    // Display error message in the form
    const experienceOutput = document.getElementById('experience-level');
    experienceOutput.textContent = `Error: ${error.message}`;
    
    console.log(error); // Debugging log
  }
}
