const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll("#year").forEach((yearNode) => {
  yearNode.textContent = String(new Date().getFullYear());
});

const demoForm = document.querySelector("[data-demo-form]");

if (demoForm) {
  demoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const successMessage = demoForm.querySelector(".form-success");

    if (successMessage) {
      successMessage.hidden = false;
    }

    demoForm.reset();
  });
}
