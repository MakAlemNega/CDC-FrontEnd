// Smooth Scrolling for Navigation
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Dynamic Contact Form Validation
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    if (!name.value || !email.value || !message.value) {
      alert("Please fill in all fields!");
      e.preventDefault();
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
      alert("Please enter a valid email address!");
      e.preventDefault();
    }
  });

// Interactive Project Showcase
const projectDetails = document.querySelectorAll(".project");
projectDetails.forEach((project) => {
  project.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
      <div class="modal-content">
        <h3>${project.dataset.title}</h3>
        <p>${project.dataset.description}</p>
        <button class="close-modal">Close</button>
      </div>`;
    document.body.appendChild(modal);

    modal.querySelector(".close-modal").addEventListener("click", () => {
      document.body.removeChild(modal);
    });
  });
});

// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Animated Typing Effect
const typedText = "Hi! I'm Makbel Alemayehu, a passionate developer!";
let i = 0;
function typeEffect() {
  if (i < typedText.length) {
    document.getElementById("typing-effect").textContent += typedText.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
if (document.getElementById("typing-effect")) typeEffect();

// Portfolio Filters
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    document.querySelectorAll(".project").forEach((project) => {
      if (project.classList.contains(category) || category === "all") {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});

// Visitor Counter
const visitorCount = localStorage.getItem("visitorCount") || 0;
const updatedVisitorCount = parseInt(visitorCount) + 1;
localStorage.setItem("visitorCount", updatedVisitorCount);
const visitorCounterElement = document.getElementById("visitor-counter");
if (visitorCounterElement) {
  visitorCounterElement.textContent = `Visitor Count: ${updatedVisitorCount}`;
}

// Carousel or Slideshow
let currentIndex = 0;
const carouselImages = document.querySelectorAll(".carousel img");
if (carouselImages.length > 0) {
  setInterval(() => {
    carouselImages[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % carouselImages.length;
    carouselImages[currentIndex].classList.add("active");
  }, 3000);
}

// API Integration (GitHub Repositories)
fetch("https://api.github.com/users/MakAlemNega/repos")
  .then((response) => response.json())
  .then((data) => {
    const repoList = document.getElementById("repo-list");
    if (repoList) {
      data.forEach((repo) => {
        const li = document.createElement("li");
        li.textContent = repo.name;
        repoList.appendChild(li);
      });
    }
  });
