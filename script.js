let decrementBtn = document.getElementById("decrementBtn");
let displayBtn = document.getElementById("displaybtn");
let incrementBtn = document.getElementById("incrementBtn");
let resetBtn = document.getElementById("resetBtn");

// Decrement Btn
decrementBtn.addEventListener("click", () => {
  let values = Number(displayBtn.innerText);
  if (values > 0) {
    displayBtn.innerText = values - 1;
  } else {
    alert("Negative Number is Not Allowed");
  }
});

// Increment Button
incrementBtn.addEventListener("click", () => {
  let values = Number(displayBtn.innerText);
  if (values < 20) {
    displayBtn.innerText = values + 1;
  } else {
    alert("Values Above 20 Are not Allowed");
  }
});

// Reset Btn
resetBtn.addEventListener("click", () => {
  displayBtn.innerText = 0;
});
