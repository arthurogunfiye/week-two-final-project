document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".animate-section");

  function isSectionInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    sections.forEach((section) => {
      if (isSectionInViewport(section)) {
        section.classList.add("animate-section-visible");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);

  handleScroll(); // Trigger initial check
});
