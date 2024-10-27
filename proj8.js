// proj8.js

import { FormManager } from './objects.js'; // Import the FormManager class

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const formMessages = document.getElementById("form-messages");
  const fileInput = document.getElementById("fileInput");
  const outputDiv = document.getElementById("output");

  // Initialize FormManager instance
  const formManager = new FormManager();

  // Add event listeners to checkboxes
  const checkboxes = document.querySelectorAll("input[name='skills']");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      if (e.target.checked) {
        formManager.addSkill(e.target.value);
      } else {
        formManager.removeSkill(e.target.value);
      }
    });
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
      formManager.handleSubmit(formMessages);
    } else {
      formMessages.innerHTML = "<p>Please fill out all required fields.</p>";
    }
  });
});
