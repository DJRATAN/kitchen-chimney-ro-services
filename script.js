// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const links = document.querySelectorAll('.mobile-link');

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });
});
