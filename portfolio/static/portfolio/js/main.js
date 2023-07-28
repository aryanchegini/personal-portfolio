let links = document.querySelectorAll('.nav-item');

function changePage(page) {
    if (page === 'home') {
        links[0].classList.add('active');
        links[1].classList.remove('active');
        links[2].classList.remove('active');
    } else if (page === 'about') {
        links[0].classList.remove('active');
        links[1].classList.add('active');
        links[2].classList.remove('active');
    } else if (page === 'projects') {
        links[0].classList.remove('active');
        links[1].classList.remove('active');
        links[2].classList.add('active');
    }
}

changePage(current_page);
