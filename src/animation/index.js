window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", () => {
    let reveals = document.querySelectorAll(".reveal,.animation_img");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      }
    }
  });
});
