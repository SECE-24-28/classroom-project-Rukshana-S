// contactme.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (!form) return; // Prevent crash if form not found

  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default page reload

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      status.textContent = "❌ Please fill in all fields.";
      status.style.color = "red";
      return;
    }

    status.textContent = "Sending...";
    status.style.color = "#555";

    try {
      const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const text = await response.text();
      status.textContent = text;
      form.scrollIntoView({ behavior: "smooth" });

      status.style.color = response.ok ? "green" : "red";

      if (response.ok) form.reset();
    } catch (error) {
      console.error("Error:", error);
      status.textContent = "❌ Something went wrong.";
      status.style.color = "red";
    }
  });
});
