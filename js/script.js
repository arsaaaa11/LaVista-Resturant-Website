const form = document.getElementById("reserveForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const guests = document.getElementById("guests").value;

  if (name === "" || email === "" || date === "" || time === "" || guests === "") {
    successMsg.style.color = "red";
    successMsg.textContent = "Please fill all the fields!";
  } else {
    successMsg.style.color = "lightgreen";
    successMsg.textContent = "Table reserved successfully! 🍽️";
    form.reset();
  }
});
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100 && sectionBottom > 100) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
