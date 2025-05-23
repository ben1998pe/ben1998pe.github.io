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
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff99";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const char = charArray[Math.floor(Math.random() * charArray.length)];
    ctx.fillText(char, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 25);

// Transición entre secciones
const showProjectsBtn = document.getElementById("showProjectsBtn");
const backBtn = document.getElementById("backBtn");
const profileCard = document.getElementById("profileCard");
const projects = document.getElementById("proyectos");

showProjectsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  profileCard.style.opacity = 0;

  setTimeout(() => {
    profileCard.style.display = "none";
    projects.classList.add("visible");
    projects.scrollIntoView({ behavior: "smooth" });
  }, 500);
});

backBtn.addEventListener("click", (e) => {
  e.preventDefault();
  projects.classList.remove("visible");

  setTimeout(() => {
    profileCard.style.display = "block";
    setTimeout(() => {
      profileCard.style.opacity = 1;
      profileCard.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }, 300);
});
