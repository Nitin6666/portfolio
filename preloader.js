// ===== PRELOADER CONFIG =====
const MIN_DURATION = 3000;
const startTime = Date.now();

// Lock scroll during loading
document.body.style.overflow = "hidden";

// ===== TERMINAL TYPING =====
document.addEventListener("DOMContentLoaded", () => {
  const lines = [
    "> Booting rendering engine...",
    "> Loading UI modules...",
    "> Calibrating animations...",
    "> Fetching assets...",
    "> Optimizing experience..."
  ];

  let lineIndex = 0;
  let charIndex = 0;

  const terminal = document.getElementById("terminal");

  function typeLine() {
    if (!terminal) return;

    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        terminal.innerHTML += lines[lineIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeLine, 20);
      } else {
        terminal.innerHTML += "<br>";
        lineIndex++;
        charIndex = 0;
        setTimeout(typeLine, 200);
      }
    }
  }

  typeLine();
});

// ===== HIDE PRELOADER =====
window.addEventListener("load", () => {
  const elapsed = Date.now() - startTime;
  const remaining = Math.max(0, MIN_DURATION - elapsed);

  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    const mainContent = document.getElementById("main-content");

    if (preloader) {
      preloader.classList.add("fade");

      setTimeout(() => {
        preloader.style.display = "none";
        if (mainContent) mainContent.style.display = "block";
        document.body.style.overflow = "auto";
      }, 800);
    }

  }, remaining);
});