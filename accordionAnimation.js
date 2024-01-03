const items = document.querySelectorAll(".faq__term--wrapper");

function toggleAccordion() {
  const itemToggle = this.getAttribute("expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("expanded", "true");
  }
}

items.forEach(item => item.addEventListener("click", toggleAccordion));
