// Debouncing function
function debounce(func, delay) {
    let timeoutId;
    
    return function() {
      clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        func.apply(this, arguments);
      }, delay);
    };
  }
  
  // Function to handle debounced logic
  function handleInput() {
    const inputValue = document.getElementById('inputField').value;
    
    // Perform desired action with the debounced input value
    document.getElementById('output').innerText = inputValue;
  }
  
  // Attach event listener with debouncing
  document.getElementById('inputField').addEventListener('input', debounce(handleInput, 300));
  