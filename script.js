// Hover Effect on Navbar Items
const navbarItems = document.querySelectorAll('.navbar-nav .nav-link');

navbarItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.2)';
    item.style.transition = 'transform 0.3s';
  });

  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1)';
  });
});

// Scroll Animation for Headings, Paragraphs, Images, and Footer Links
const elementsToAnimate = document.querySelectorAll('h1, h2, h3,h4,h5, p, img, button, .footer a');

window.addEventListener('scroll', () => {
  elementsToAnimate.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (elementPosition < viewportHeight - 100) {
      element.style.transform = 'translateY(0)';
      element.style.opacity = '1';
      element.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
    } else if (elementPosition > viewportHeight) {
      element.style.transform = 'translateY(50px)';
      element.style.opacity = '0';
      element.style.transition = 'transform 0.5s ease-in, opacity 0.5s ease-in';
    }
  });
});

// Initial Style for Animation
window.addEventListener('DOMContentLoaded', () => {
  elementsToAnimate.forEach(element => {
    if (element.closest('.hero-section')) {
      element.style.transform = 'translateY(0)';
      element.style.opacity = '1';
    } else {
      element.style.transform = 'translateY(-50px)';
      element.style.opacity = '0';
    }
  });
});

// Go to Top Button
const goToTopButton = document.createElement('button');
goToTopButton.innerText = 'Go to Top';
goToTopButton.style.position = 'fixed';
goToTopButton.style.bottom = '20px';
goToTopButton.style.right = '20px';
goToTopButton.style.padding = '10px 20px';
goToTopButton.style.backgroundColor = '#ff6f61';
goToTopButton.style.color = '#fff';
goToTopButton.style.border = 'none';
goToTopButton.style.borderRadius = '5px';
goToTopButton.style.cursor = 'pointer';
goToTopButton.style.display = 'none';
goToTopButton.style.zIndex = '1000';
document.body.appendChild(goToTopButton);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    goToTopButton.style.display = 'block';
  } else {
    goToTopButton.style.display = 'none';
  }
});

goToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  // Hide button immediately when clicked
  goToTopButton.style.display = 'none';
});
