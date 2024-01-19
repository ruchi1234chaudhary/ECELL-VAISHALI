const faqTogglers = document.querySelectorAll(".faq-toggler");

faqTogglers.forEach((toggler) => {
  toggler.addEventListener("click", (e) => {
    toggler.parentNode.nextElementSibling.classList.toggle("hidden");
  });
});