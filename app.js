const observer = new IntersectionObserver(
  (entries) => {
    for (let entrie of entries) {
      const { isIntersecting: inter, target: element } = entrie;
      if (inter) {
        element.animate(
          [
            { transform: "translateY(-30px)", opacity: 0 },
            { transform: "translateY(0)", opacity: 1 },
          ],
          {
            duration: 500,
            iterations: 1,
            fill: "both",
          }
        );
        observer.unobserve(element);
      }
    }
  },
  {
    threshold: 0,
  }
);

const containerImg = document.querySelectorAll(".container-img");

containerImg.forEach((img) => {
  observer.observe(img);
});
