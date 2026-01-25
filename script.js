// Run after page load
document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     Skill Bar Animation
  ========================== */
  const skillBars = document.querySelectorAll(".fill");

  skillBars.forEach(bar => {
    const targetWidth = bar.dataset.width;
    bar.style.width = "0%";

    setTimeout(() => {
      bar.style.transition = "width 1.2s ease-in-out";
      bar.style.width = targetWidth;
    }, 400);
  });

  /* =========================
     Scroll Reveal Effect
  ========================== */
  const sections = document.querySelectorAll("section");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < windowHeight - 100) {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
      }
    });
  };

  sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s ease";
  });

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

});

/* =========================
   Download Resume (PDF)
========================= */
function downloadResume() {
  document.body.classList.add("print-mode");
  window.print();
  document.body.classList.remove("print-mode");
}
