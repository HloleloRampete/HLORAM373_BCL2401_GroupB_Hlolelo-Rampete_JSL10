document.getElementById("solveRoom1").addEventListener("click", () => {
    // Room 1
    // 🪲 Bug: Incorrect ID used for attaching the event listener
    fetch('books.json')
      .then(response => response.json())
      .then(books => {
        const mostRecentBook = findMostRecentBook(books);
         // 🪲 Bug: Incorrect element ID
        document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
      });
  });
  
  // Room 2
  document.getElementById("solveRoom2").addEventListener("click", () => {
    const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'prototype']);
    // 🪲 Bug: What's mssing from JS concepts?
    const reactConcepts = new Set(['components', 'JSX', 'hooks', 'async']);
    // 🪲 Bug: Incorrect function call
    const commonConcepts = findIntersection(jsConcepts, reactConcepts); // finding the intersection between JS and React concepts.
    document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
  });
  
  // Room 3
  // look into this code and make it look like the original 
  document.getElementById("solveRoom3").addEventListener("click", async () => {
    try {
      const response = await fetch('directions.json');
      const directions = await response.json();
      const message = await navigateLabyrinth(directions);
      document.getElementById("room3Result").textContent = message;
    } catch (error) {
      console.error("Error navigating labyrinth:", error);
      // Handle the error gracefully, e.g., display an error message to the user
    }
  });
  
  // Finding the most recent book using the reduce function method
  function findMostRecentBook(books) {
     // 🪲 Bug: Logic error
    return books.reduce((mostRecent, book) => (new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent));
    // Iterate over the 'books.json' for the recent book
  }
  
  function findIntersection(setA, setB) {
    // 🪲 Bug: Incorrect logic
    const intersection = new Set();
    for (const value of setA) { // why is this for loop inserted
      if (setB.has(value)) { // why is this if statement inserted 
        intersection.add(value);
      }
    }
    return intersection;
  }
  
  async function navigateLabyrinth(directions) {
    for (let direction of directions) {
         // 🪲 Bug: No delay
      await new Promise(resolve => setTimeout(resolve, 1000)); // Introduce a 1-second delay
      console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
  }