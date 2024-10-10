const bubble = document.querySelector(".bubble");
const button = document.querySelector('.button-31');

// Function to center the button
function centerButton() {
  const windowWidth = window.innerWidth;
  const buttonWidth = button.offsetWidth;
  const marginLeft = (windowWidth - buttonWidth) / 2;
  button.style.marginLeft = `${marginLeft}px`;
}

// Run the centering function on page load and when window is resized
window.onload = centerButton;
window.onresize = centerButton;

// Existing bubble click animation logic
bubble.addEventListener("click", function (evt) {
  evt.preventDefault();
  bubble.classList.add("animated");
  setTimeout(function () {
    bubble.classList.remove("animated");
  }, 100);
});
