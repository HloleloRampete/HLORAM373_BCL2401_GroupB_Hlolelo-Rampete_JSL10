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
    const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'prototype']); // added 'prototype' - they are fundamental aspects of OOP.
    // 🪲 Bug: What's mssing from JS concepts?
    const reactConcepts = new Set(['components', 'JSX', 'hooks', 'async']);
    // 🪲 Bug: Incorrect function call
    const commonConcepts = findIntersection(jsConcepts, reactConcepts); // finding the intersection between JS and React concepts.
    document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
  });
  
  // Room 3
  // 🪲 Bug: Asynchronous function ? 
  document.getElementById("solveRoom3").addEventListener("click", async () => {
    try {
        // fetches the data from 'directions.json'
      const response = await fetch('directions.json');
      const directions = await response.json();
      // Navigate the labyrinth using the 'navigateLabyrinth' function
      const message = await navigateLabyrinth(directions);
      // 🪲 Bug: Incorrect method
      document.getElementById("room3Result").textContent = message; // update the HTML textcontent of 'room3Result' with the value of 'message'
    } catch (error) {
      console.error("Error navigating labyrinth:", error); // checking for error
      
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
    const intersection = new Set();  // sets holds the elements that are common in 'setA' and 'setB'.
    for (const value of setA) { // iterating over each element 'value' in 'setA'.
      if (setB.has(value)) { // checking if current element 'value' from 'setA' also exists in 'setB' (using the built-in 'has' method).
        intersection.add(value); // if element exists in both sets and it returns true, the 'value' is added to the 'interection' set 
      }
    }
    return intersection;
  }
  
  async function navigateLabyrinth(directions) {
    for (let direction of directions) {
         // 🪲 Bug: No delay
      await new Promise(resolve => setTimeout(resolve, 1000)); // used 'await' with a 'Promise' object so that the 'navigateLabyrinth' function pauses execution for 1s.
      console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
  }