const openIcon = document.querySelectorAll('.toggle__btn')[0];
const closeIcon = document.querySelectorAll('.toggle__btn')[1];
const navContainer = document.querySelector('.page-header__nav-whts-container');

openIcon.addEventListener('click', () => {
    navContainer.classList.add('open');
    openIcon.classList.add('hide');
    closeIcon.classList.remove('hide');
})

closeIcon.addEventListener('click', () => {
    navContainer.classList.remove('open');
    closeIcon.classList.add('hide');
    openIcon.classList.remove('hide');
})