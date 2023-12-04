document.querySelectorAll('.dropdown').forEach((dropdown) => {
    dropdown.addEventListener('mouseenter', (e) => {
        e.target.querySelector('.dropdown-menu').classList.remove('hidden');
    });
    dropdown.addEventListener('mouseleave', (e) => {
        e.target.querySelector('.dropdown-menu').classList.add('hidden');
    });
});
