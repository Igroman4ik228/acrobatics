import mobileNav from "./modules/mobile-nav.js";
import contactLinks from "./modules/contact-links.js";
import AOS from "./modules/aos.js";

// Инициализация функциональности
mobileNav();
contactLinks();
AOS.init({
  duration: 800,
  easing: "ease-in-out-quad",
  once: false,
  offset: 100,
  delay: 0,
});
