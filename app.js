// CTA knop
document.getElementById("cta-btn").addEventListener("click", () => {
  document.getElementById("features").scrollIntoView({ behavior: "smooth" });
});

// Contactformulier (front-end demo — verstuurt niks)
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const feedback = document.getElementById("form-feedback");
  feedback.textContent = "Bedankt! Je bericht is ontvangen.";
  feedback.classList.remove("hidden");
  e.target.reset();
  setTimeout(() => feedback.classList.add("hidden"), 4000);
});
