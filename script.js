// FIRST JS CHALLENGE: Nike ad button.
/*
1. Create a simple nike ad button.
2. When the user clicks the purchase button, 
   it renders out "something went wrong, please try again"
   in the paragraph that has the id error.
*/

// Solution:

let errorParagraph = document.getElementById("error");

console.log(errorParagraph);

function purchase() {
  console.log("button clicked");
  errorParagraph.textContent = "something went wrong, please try again";
}
