// proj9.js

// Function to get query parameters from the URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  // Function to set a cookie
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
  }
  
  // Function to get a cookie
  function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(`${name}=`)) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }
  
  // Function to apply user preferences on page load
  function applyUserPreferences() {
    const welcomeMessageElement = document.getElementById("welcome-message");
    const username = getCookie('username');
    const theme = getCookie('theme');
  
    if (username && welcomeMessageElement) {
      welcomeMessageElement.textContent = `Welcome back, ${username}!`;
    }
  
    if (theme) {
      document.body.className = theme; // Apply the saved theme as a class on the body
    }
  }
  
  // Function to save preferences from the form submission
  function savePreferencesFromForm(e) {
    e.preventDefault();
  
    // Get values from form inputs
    const username = document.getElementById("name").value;
    const theme = document.getElementById("theme").value;
  
    if (username) setCookie('username', username, 7);
    if (theme) setCookie('theme', theme, 7);
  
    // Reload to apply changes or update UI directly
    applyUserPreferences();
  }
  
  // Function to initialize the page
  function initialize() {
    applyUserPreferences();
  
    // Add event listener to form submission to save preferences
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", savePreferencesFromForm);
  }
  
  document.addEventListener('DOMContentLoaded', initialize);
  
// Using cookies for state persistence has some vulnerabilities. Cookies can be susceptible to unauthorized access if not properly secured,
// especially if they hold sensitive information. To mitigate these risks, cookies should be set with 'HttpOnly' and 'Secure' attributes
// when handled server-side, making them inaccessible to client-side JavaScript and requiring HTTPS. Additionally, validating or sanitizing
// query string parameters is essential to prevent injection attacks. Avoid storing sensitive user data in cookies without encryption.
