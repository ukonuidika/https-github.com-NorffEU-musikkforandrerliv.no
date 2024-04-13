// Step 1: Define an array to store the comments
let comments = [];

// Step 2: Define a function to add a new comment
function addComment(author, text) {
    // Step 2a: Create a new comment object
    let newComment = {
        author: author, // Step 2b: Assign the author of the comment
        text: text,     // Step 2c: Assign the text content of the comment
        date: new Date() // Step 2d: Assign the current date to the comment
    };
    // Step 2e: Push the new comment to the comments array
    comments.push(newComment);
}

// Step 3: Define a function to display all comments
function displayComments() {
    // Step 3a: Loop through each comment in the comments array
    for (let i = 0; i < comments.length; i++) {
        // Step 3b: Get the current comment
        let comment = comments[i];
        // Step 3c: Display the comment details
        console.log(`Comment ${i + 1}:`); // Display comment number
        console.log(`Author: ${comment.author}`); // Display author
        console.log(`Text: ${comment.text}`); // Display comment text
        console.log(`Date: ${comment.date}`); // Display comment date
        console.log("----------------------"); // Separator
    }
}

// Example usage:
// Step 4: Add example comments using the addComment function
addComment("John", "This is a great post!"); // Adding a comment from John
addComment("Alice", "I enjoyed reading this."); // Adding a comment from Alice
addComment("Bob", "Interesting topic!"); // Adding a comment from Bob

// Step 5: Display all comments using the displayComments function
displayComments(); // Displaying all comments
