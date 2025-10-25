document.addEventListener("DOMContentLoaded", () => {
  const mainArea = document.querySelector(".main-area");
  if (!mainArea) return;

  mainArea.addEventListener("mousemove", (e) => {
    const rect = mainArea.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    mainArea.style.setProperty("--x", `${x}%`);
    mainArea.style.setProperty("--y", `${y}%`);
  });
});
