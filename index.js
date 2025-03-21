// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.
document.querySelector('#submit-btn').addEventListener('click', () => {
    updateDOM('Button clicked!');
  });
  document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form reload
    processFormInputs();
  });
// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.
function updateDOM(message) {
    const output = document.querySelector('#output');
    output.textContent = message; // Example: Update a paragraph with a message
  }  
  function addElement(tag, content, parent) {
    const element = document.createElement(tag);
    element.textContent = content;
    document.querySelector(parent).appendChild(element);
  }
  addElement('p', 'Hello, World!', '#container');
  function updateElement(selector, newContent) {
    const element = document.querySelector(selector);
    element.textContent = newContent;
  }
  updateElement('#header', 'Updated Header');
  function removeElement(selector) {
    const element = document.querySelector(selector);
    if (element) element.remove();
  }
  removeElement('#footer');

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

function displayError(message) {
    const errorContainer = document.querySelector('#error');
    errorContainer.textContent = message;
    errorContainer.style.display = 'block'; // Ensure it's visible
  }
  displayError('Invalid input, please try again.');
  function safeUpdate(selector, content) {
    const element = document.querySelector(selector);
    if (element) {
      element.textContent = content;
    } else {
      displayError('Target element not found.');
    }
  }
  safeUpdate('#non-existent', 'This wont throw an error!');
    

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.
function createElement(tag, attributes = {}, content = '') {
    const element = document.createElement(tag);
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
    element.textContent = content;
    return element;
  }
  
  const newButton = createElement('button', { class: 'btn', id: 'new-btn' }, 'Click Me');
  document.body.appendChild(newButton);

  function handleErrorAndLog(error, selector) {
    console.error(error);
    displayError(error.message, selector);
  }
  