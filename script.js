//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
  const message = document.createElement('h1'); // Create an <h1> element
  message.textContent = 'DOM load success'; // Set the text content
  document.body.appendChild(message); // Append it to the body
});
