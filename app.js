let acc = document.getElementsByClassName("faq__term--wrapper");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    acc[i].classList.toggle("active");
    let panel = acc[i].nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel[i].scrollHeight + "px";
    }
  });
}
