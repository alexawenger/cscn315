// objects.js

// FormManager Class to handle form data and skill selection
function FormManager() {
    this.selectedSkills = []; // Stores the selected skills
  }
  
  // Method to add a skill to the selected skills array
  FormManager.prototype.addSkill = function (skill) {
    if (!this.selectedSkills.includes(skill)) {
      this.selectedSkills.push(skill);
    }
    this.displaySkills();
  };
  
  // Method to remove a skill from the selected skills array
  FormManager.prototype.removeSkill = function (skill) {
    this.selectedSkills = this.selectedSkills.filter(s => s !== skill);
    this.displaySkills();
  };
  
  // Method to display the selected skills in the specified HTML element
  FormManager.prototype.displaySkills = function () {
    const selectedSkillsDiv = document.getElementById("selectedSkills");
    selectedSkillsDiv.innerHTML = "Selected Skills: " + (this.selectedSkills.length ? this.selectedSkills.join(", ") : "None");
  };
  
  // Method to handle form submission and display a success message
  FormManager.prototype.handleSubmit = function (formMessages) {
    formMessages.innerHTML = "<p>Form submitted successfully!</p>";
  };
  
  // Export the FormManager object for use in other files
  export { FormManager };
  