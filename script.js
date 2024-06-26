const modalTriggers = document.querySelectorAll("[data-modal-trigger]");
const modalClose = document.querySelectorAll("[data-modal-close]");
modalTriggers.forEach((modal) => {
  modal.addEventListener("click", (e) => {
    const slug = modal.dataset.modalTrigger;
    const target = slug
      ? document.querySelector(`[data-modal-target="${slug}"]`)
      : null;
    if (target) {
      target.classList.add("is_active");
    }
  });
});
modalClose.forEach((close) => {
  close.addEventListener("click", (e) => {
    const target = close.closest("[data-modal-target]");
    if (target) {
      target.classList.remove("is_active");
    }
  });
});

const buttons = document.querySelectorAll("[data-nav-button]");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const isActive = button.classList.contains("is_active");
    if (isActive) {
      button.classList.remove("is_active");
    } else {
      button.classList.add("is_active");
    }
  });
});
