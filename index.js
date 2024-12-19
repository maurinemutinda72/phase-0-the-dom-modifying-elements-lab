// 1. Remove the main element from the DOM
const main = document.getElementById("main");
main.remove();

// 2. Create a new <h1> element
const newHeader = document.createElement("h1");

// 3. Assign an id of "victory" to the newHeader
newHeader.id = "victory";

// 4. Set the text content of the newHeader to "YOUR-NAME is the champion"
newHeader.textContent = "YOUR-NAME is the champion";

// 5. Append the newHeader to the document body
document.body.appendChild(newHeader);
