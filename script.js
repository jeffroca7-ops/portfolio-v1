const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("open");
        menuToggle.textContent = "☰";
    });
});


menuToggle.addEventListener("click", function () {
    nav.classList.toggle("open");
        if (nav.classList.contains("open")) {
            menuToggle.textContent = "✖";
        } 
        else {
            menuToggle.textContent = "☰";
        }

});

function createProjectMessage(projectName) {
    return "You selected the " + projectName + " project!";
}

const projectCards = document.querySelectorAll(".project-card");
const projectMessage = document.querySelector("#project-message");

function createProjectMessage(projectName) {
  return "You selected the " + projectName + " project!";
}

projectCards.forEach(function (card) {
  card.addEventListener("click", function () {
    // 1. Tignan muna kung selected na ang na-click na card
    const isAlreadySelected = card.classList.contains("selected");

    // 2. Alisin ang "selected" class sa LAHAT ng cards
    projectCards.forEach(function (c) {
      c.classList.remove("selected");
    });

    // 3. I-check ang condition gamit ang if / else
    if (isAlreadySelected) {
      // Kapag selected na kanina tapos pinindot ulit -> burahin ang message
      projectMessage.textContent = "";
    } else {
      // Kapag hindi pa selected -> i-highlight ang card at ipakita ang message
      card.classList.add("selected");
      
      const title = card.querySelector("h3");
      const projectName = title.textContent;
      
      projectMessage.textContent = createProjectMessage(projectName);
    }
  });
});

const nameInput = document.querySelector("#name");
const messageInput = document.querySelector("#message");
const submitBtn = document.querySelector("#submit-btn");
const formMessage = document.querySelector("#form-message");
const charCount = document.querySelector("#char-count");
const contactForm = document.querySelector("#contact-form");
const themeToggle = document.querySelector("#theme-toggle");
const savedTheme = localStorage.getItem("theme");
const projectLinks = document.querySelectorAll('.project-link');

projectLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {

    if (link.getAttribute("href") === "#") {
      event.preventDefault();
    }
  });
});


if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
}


submitBtn.disabled = true;

function updateSubmitButtonState() {
  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  submitBtn.disabled = !(name && message);
}

nameInput.addEventListener("input", function() {
  formMessage.textContent = "";

  updateSubmitButtonState();
});

messageInput.addEventListener("input", function() {
  formMessage.textContent = "";
  charCount.textContent = messageInput.value.length + "/100 characters";

  updateSubmitButtonState();
});



contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  if (name && message) {
    formMessage.textContent = "Message sent successfully!";
    formMessage.classList.remove("error");
    formMessage.classList.add("success");

    nameInput.value = "";
    messageInput.value = "";
    charCount.textContent = "0/100 characters";

  } else {
    formMessage.textContent = "Please complete all fields.";
    formMessage.classList.remove("success");
    formMessage.classList.add("error");
  }
});

messageInput.addEventListener("input", function() {
  charCount.textContent = messageInput.value.length + "/100 characters";
  clearFormMessage();
  updateSubmitButtonState();
});

nameInput.addEventListener("input", function() {
  clearFormMessage();
  updateSubmitButtonState();
});

themeToggle.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.removeItem("theme");
  }

});

