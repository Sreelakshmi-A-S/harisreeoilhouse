// Toggle mobile navigation
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Smooth scrolling
const scrollLinks = document.querySelectorAll('a.scroll-link');

scrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Contact form submission
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = contactForm.querySelector('#name').value;
  const email = contactForm.querySelector('#email').value;
  const message = contactForm.querySelector('#message').value;

  // Send data to server for processing
  // ...

  // Reset form
  contactForm.reset();
});
