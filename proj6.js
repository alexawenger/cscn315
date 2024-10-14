document.addEventListener('DOMContentLoaded', function() {
    const form = document.forms['contactForm'];
    const formMessages = document.getElementById('form-messages');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting
  
      // Collect the form data
      const name = form.elements['name'].value.trim();
      const email = form.elements['email'].value.trim();
      const age = form.elements['age'].value.trim();
      const contactMethod = form.elements['contact-method'].value;
      const message = form.elements['message'].value.trim();
      const newsletter = form.elements['newsletter'].checked;
  
      // Clear previous messages
      formMessages.textContent = '';
  
      // Validate form inputs
      if (!name || !email || !age || !contactMethod || !message) {
        formMessages.textContent = 'Please fill out all required fields.';
        formMessages.style.color = 'red';
        return;
      }
  
      if (!validateEmail(email)) {
        formMessages.textContent = 'Please enter a valid email address.';
        formMessages.style.color = 'red';
        return;
      }
  
      if (isNaN(age) || age < 18 || age > 100) {
        formMessages.textContent = 'Please enter a valid age between 18 and 100.';
        formMessages.style.color = 'red';
        return;
      }
  
      // Simulate form submission 
      formMessages.textContent = 'Form submitted successfully!';
      formMessages.style.color = 'green';
    });
  
    // Email validation function
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });
  