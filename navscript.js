let isOpen = document.querySelector('#open');
let isClose = document.querySelector('#close');
let navList = document.querySelector('.nav-list');

window.addEventListener('load', function() {
    isClose.style.display = "none";
})

isOpen.addEventListener('click', () => {
    navList.classList.add('show');
    isClose.style.display = "inline-block";
    isOpen.style.display = "none";
});

isClose.addEventListener('click', () => {
    navList.classList.remove('show');
    isClose.style.display = "none";
    isOpen.style.display = "inline-block";
});