let acc = document.getElementsByClassName("faq__term--wrapper");
let panel = document.getElementsByClassName("faq__desription");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    acc[i].classList.toggle("active");
    // let panel = acc[i].nextElementSibling;
    if (panel[i].style.maxHeight) {
      panel[i].style.maxHeight = null;
    } else {
      panel[i].style.maxHeight = panel[i].scrollHeight + "px";
    }
  });
}

// acc.forEach((element) => {
//   element.addEventListener("click", function () {
//     element.classList.toggle("active");
//     let faq__desription = element.nextElementSibling;
//     if (faq__desription.style.height) {
//       faq__desription.style.height = null;
//     } else {
//       faq__desription.style.height = panel.scrollHeight + "px";
//     }
//   });
// });
