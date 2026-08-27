document.querySelectorAll('.dropdown').forEach(function (dropdown) {
    dropdown.addEventListener('click', function () {
        this.querySelector('.dropdown-content').classList.toggle('show');
    });
});