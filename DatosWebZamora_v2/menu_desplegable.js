document.querySelectorAll('.dropdown').forEach(function(dropdown) {
    dropdown.addEventListener('click', function(event) {
        event.stopPropagation();
        dropdown.querySelector('.dropdown-menu').classList.toggle('show');
    });
});

window.addEventListener('click', function(e) {
    document.querySelectorAll('.dropdown-menu.show').forEach(function(dropdown) {
        dropdown.classList.remove('show');
    });
});
