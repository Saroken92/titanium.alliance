document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню (можно добавить иконку бургера)
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    
    const header = document.querySelector('header .container');
    header.prepend(mobileMenuButton);
    
    mobileMenuButton.addEventListener('click', function() {
        document.querySelector('nav').classList.toggle('show');
    });
    
    
    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
// Начало кода для бургера (ТОЛЬКО МЕНЮ!) 
const burgerMenu = {
  init() {
    this.burgerBtn = document.getElementById('burgerBtn');
    this.nav = document.querySelector('nav');
    if (!this.burgerBtn || !this.nav) return;

    this.burgerBtn.addEventListener('click', () => this.toggleMenu());
    document.querySelectorAll('nav ul li a').forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });
  },

  toggleMenu() {
    this.nav.classList.toggle('active');
    this.burgerBtn.innerHTML = this.nav.classList.contains('active') ? 
      '<i class="fas fa-times"></i>' : 
      '<i class="fas fa-bars"></i>';
  },

  closeMenu() {
    this.nav.classList.remove('active');
    this.burgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
  }
};
