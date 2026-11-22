// ===== Exam Question 2: MODEL SOLUTION =====

// 1. Select the input and the button
const message = document.querySelector("#message");
const btn = document.querySelector("#showBtn");
// Alternative: document.getElementById("message")

// 2. Run code every time the button is clicked
btn.addEventListener("click", function () {

  // 3. Read the text INSIDE the handler, so we get what the user typed NOW
  const text = message.value;

  // 4. Print the result
  console.log("You typed:", text);   // You typed: Hello
});


// ===== Part (b) =====
// If the handler contained:  console.log(message.textContent);
// it prints an EMPTY line, because an <input> is a void element
// (it has no content between tags). The text the user types is stored
// in the .value property, not in .textContent or .innerHTML.
//
// Common mistake: reading message.value OUTSIDE the handler.
// Then the value is copied once (at page load, when the field is empty),
// so the console always prints an empty text.
