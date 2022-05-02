const header = document.querySelector(".header");
const sectionHero = document.querySelector(".section-hero");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const navLists = document.querySelectorAll(".nav__list-item");
const body = document.querySelector("body");

function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("header-fixed");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("header-fixed");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

openBtn.onclick = () => {
  header.classList.add("nav-open");
  closeBtn.style.display = "block";
  openBtn.style.display = "none";
  body.style.touchAction = "none";
  body.style.overflow = "hidden";
};

closeBtn.onclick = () => {
  header.classList.remove("nav-open");
  closeBtn.style.display = "none";
  openBtn.style.display = "block";
  body.style.touchAction = "";
  body.style.overflow = "auto";
};

navLists.forEach((navList) => {
  navList.onclick = () => {
    header.classList.remove("nav-open");
    closeBtn.style.display = "none";
    openBtn.style.display = "block";
    body.style.touchAction = "";
    body.style.overflow = "auto";
  };
});
