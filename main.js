// Efecto Matrix
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = "アアイイウエオカキクケコサシスセソ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const charArray = characters.split("");
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }, () => 1);

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00ff99";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const char = charArray[Math.floor(Math.random() * charArray.length)];
    ctx.fillText(char, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 33);

// Transiciones
const showProjectsBtn = document.getElementById("showProjectsBtn");
const backBtn = document.getElementById("backBtn");
const projectsSection = document.getElementById("proyectos");
const profileCard = document.getElementById("profileCard");
const transition = document.getElementById("matrixTransition");

function showSection(target) {
  transition.classList.add("show");
  setTimeout(() => {
    profileCard.style.display = "none";
    projectsSection.classList.add("visible");
    transition.classList.remove("show");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  }, 1000);
}

function goBack() {
  transition.classList.add("show");
  setTimeout(() => {
    projectsSection.classList.remove("visible");
    profileCard.style.display = "block";
    transition.classList.remove("show");
    profileCard.scrollIntoView({ behavior: "smooth" });
  }, 1000);
}

showProjectsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  showSection();
});

backBtn.addEventListener("click", (e) => {
  e.preventDefault();
  goBack();
});
