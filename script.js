function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
  }

  document.querySelector('.hero-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Search functionality will be implemented here!');
  });
  