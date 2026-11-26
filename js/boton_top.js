const d=document,
w=window,
$scroll = d.getElementById("scroll-top-btn") || d.querySelector(".scroll-top-btn");

if ($scroll) {
  d.addEventListener('click', e => {
      if (e.target === $scroll || e.target.matches(".scroll-top-btn *")) {
          scrollTo({
              behavior: "smooth",
              top: 0
          })
      }
  })
  w.addEventListener("scroll", e => {
      if (scrollY < 800) {
          $scroll.classList.add("desaparecer-btn")

      } else {
          $scroll.classList.remove("desaparecer-btn")

      }

  });
}