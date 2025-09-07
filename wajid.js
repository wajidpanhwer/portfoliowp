// Typing Animation
const texts = ["FRONTEND DEVELOPER", "WEB DESIGNER", "PROGRAMER", "FREELANCER"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;

(function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];

  if (isDeleting) {
    letter = currentText.slice(0, --index);
  } else {
    letter = currentText.slice(0, ++index);
  }

  document.querySelector(".typing").textContent = letter;

  if (!isDeleting && letter.length === currentText.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && letter.length === 0) {
    isDeleting = false;
    count++;
    setTimeout(type, 500);
  } else {
    setTimeout(type, 100);
  }
})();

// Skills Bar Animation
document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".skill-fill");

  bars.forEach(bar => {
    let targetWidth = bar.getAttribute("style").match(/--target-width:(\d+%)/)[1];
    bar.style.width = "0";

    setTimeout(() => {
      bar.style.transition = "width 2s ease";
      bar.style.width = targetWidth;
    }, 200);
  });
});

// Contact Form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('contactForm');

  // form message dynamically banayenge
  let formMsg = document.createElement("p");
  formMsg.classList.add("form-msg");
  form.appendChild(formMsg);

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    formMsg.textContent = "Sending...";
    formMsg.style.color = "#fff";

    // Simulate sending delay
    setTimeout(() => {
      formMsg.textContent = "Message sent successfully!";
      formMsg.style.color = "#00ff7f";
      form.reset();
    }, 1500);
});
});

