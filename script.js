// Animate skill bars
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fill").forEach(bar => {
    bar.style.width = bar.dataset.width;
  });
});

// Download resume
function downloadResume() {
  window.print();
}
