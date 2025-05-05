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