
window.onload = function () {
    document.addEventListener("click", OpenMenu);

    
    function OpenMenu(e) {
        const targetElement = e.target;
        if (targetElement.classList.contains('menu__arrow')) {
        targetElement.closest('.menu__item').classList.toggle('_hover');
        } else if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {
            document.querySelectorAll('.menu__item').forEach(item => item.classList.remove('_hover'));
        } 
        
        if (targetElement.classList.contains('search-form__icon')) {
            document.querySelector('.search-form').classList.toggle('_active');
        } else if (!targetElement.closest('.search-form')) {
            document.querySelector('.search-form').classList.remove('_active');
        } 
    }
}

function toggleMobileMenu() {
    let btn = document.querySelector('.icon-menu');
    let menu = document.querySelector('.menu__body');
    btn.classList.toggle('activated');
    menu.classList.toggle('activated');
  }