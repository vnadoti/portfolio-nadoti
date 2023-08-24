////////////////////////////// 
// MUDAR ANO
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear

////////////////////////////// 
// MOBILE NAV
const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNav.addEventListener('click', function () {
  headerEl.classList.toggle("nav-open");
});
  
 //////////////////////////////
// STICKY HEADER

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(function (entries) {
  const ent = entries[0];

  if (ent.isIntersecting === false) {
    document.body.classList.add("sticky");
  }
  
  if (ent.isIntersecting === true) {
    document.body.classList.remove("sticky");
  }

},


  {
  // In the viewport
  root: null,
  threshold: 0,
  rootMargin: "-96px",
  }
);

obs.observe(sectionHeroEl);