// proj7.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const selectedSkillsDiv = document.getElementById("selectedSkills");
    const outputDiv = document.getElementById("output");
    const fileInput = document.getElementById("fileInput");
    const formMessages = document.getElementById("form-messages");
  
    let selectedSkills = [];
  
    // Add event listeners to checkboxes
    const checkboxes = document.querySelectorAll("input[name='skills']");
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", (e) => {
        if (e.target.checked) {
          selectedSkills.push(e.target.value);
        } else {
          selectedSkills = selectedSkills.filter((skill) => skill !== e.target.value);
        }
        displaySelectedSkills();
      });
    });
  
    // Function to display selected skills right under the checkboxes
    function displaySelectedSkills() {
      selectedSkillsDiv.innerHTML = "Selected Skills: " + (selectedSkills.length ? selectedSkills.join(", ") : "None");
    }
  
    // Regular expression for name validation
    const nameInput = document.getElementById("name");
    nameInput.addEventListener("input", function () {
      const nameRegex = /^[a-zA-Z\s]+$/;
      if (!nameRegex.test(nameInput.value)) {
        nameInput.setCustomValidity("Only letters and spaces are allowed.");
      } else {
        nameInput.setCustomValidity("");
      }
    });
  
    // File input handling
    fileInput.addEventListener("change", function () {
      const file = fileInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          outputDiv.innerHTML = "File Content:<br>" + e.target.result;
        };
        reader.readAsText(file);
      }
    });
  
    // Form submission with validation
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form from submitting
      formMessages.innerHTML = ""; // Clear any previous messages
  
      // Check if form is valid
      if (form.checkValidity()) {
        // Only handle file upload if the form is valid
        formMessages.innerHTML = "<p>Form submitted successfully!</p>";
      } else {
        formMessages.innerHTML = "<p>Please fill out all required fields.</p>";
      }
    });
  });
  