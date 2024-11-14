const accordions = document.querySelectorAll(".faq-accordion-container");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    const body = accordion.querySelector(".accordion-body");
    body.classList.toggle("active");
  });
});
