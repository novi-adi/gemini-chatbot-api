const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission which reloads the page

  const userMessage = input.value.trim(); // Get the user's message and remove whitespace
  if (!userMessage) return; // If the message is empty, do nothing

  appendMessage('user', userMessage); // Display the user's message in the chat
  input.value = ''; // Clear the input field

  // Send the user's message to the backend API
  fetch('/api/chat', {
    method: 'POST', // Specify the HTTP method
    headers: {
      // Tell the server that the request body is in JSON format
      'Content-Type': 'application/json',
    },
    // Convert the JavaScript object to a JSON string for the request body
    body: JSON.stringify({ message: userMessage }),
  })
  .then(response => {
    // Check if the HTTP response status is successful (e.g., 200 OK)
    if (!response.ok) {
      // If not successful, throw an error to be caught by the .catch() block
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Parse the JSON response body
    return response.json();
  })
  .then(data => {
    // Assuming your backend sends a JSON response like { "reply": "bot's answer" }
    // Display the bot's reply in the chat
    appendMessage('bot', data.reply);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch operation
    console.error('Error sending message:', error);
    // Display an error message to the user in the chat
    appendMessage('bot', 'Error: Could not get a response.');
  });
});


function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}
