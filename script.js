const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
});

reveals.forEach(function (section) {
  observer.observe(section);
});

window.addEventListener('scroll', function () {
  document.documentElement.classList.add('js');
}, { once: true });