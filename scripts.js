/* Add your JavaScript to this file */

document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('.newsletter form').addEventListener('submit', function(e) {
    e.preventDefault();
    var emailInput = document.querySelector('.newsletter input[type="email"]');
    var messageDiv = document.querySelector('.message');
    
    if(emailInput.value === '') {
      messageDiv.textContent = "Please enter a valid email address.";
    } else {
      messageDiv.textContent = "Thank you! Your email address " + emailInput.value + " has been added to our mailing list!";
    }
  });
});
