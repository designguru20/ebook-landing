// Add custom JavaScript here
function navScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            navbar.classList.add('bg-red');
            navbar.classList.add('sticky-navbar');
        } else {
            navbar.classList.remove('bg-red'); 
            navbar.classList.remove('sticky-navbar');
        }
    }); 
}

document.addEventListener('DOMContentLoaded', navScroll);