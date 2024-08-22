document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Spinner loading logic (optional)
    const spinner = document.getElementById('loading-spinner');
    const pageContent = document.getElementById('page-content');

    window.addEventListener('load', function() {
        setTimeout(function() {
            spinner.style.display = 'none';
            pageContent.style.visibility = 'visible';
        }, 1000);
    });
});