/* Add your JavaScript to this file */

document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('.newsletter form').addEventListener('submit', function(e) {
    e.preventDefault();
    var emailInput = document.querySelector('.newsletter input[type="email"]');
    
    if(emailInput.value === '') {
      alert("Please enter a valid email address.");
    } else {
      alert("Thank you! Your email address " + emailInput.value + " has been added to our mailing list!");
    }
  });
});
