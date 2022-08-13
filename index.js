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


function leftScroll() {
    const left = document.querySelector(".scroll-images");
    left.scrollBy(200, 0);
  }
  function rightScroll() {
    const right = document.querySelector(".scroll-images");
    right.scrollBy(-200, 0);
  }

  async function getIcons() {
    let response = await fetch('http://localhost:3000/icons')
    let content = await response.json()
    console.log(content)
    

    let list = document.querySelector('.icons__container')

    for(let key in content) {
        
        list.innerHTML += `
        
        <li class="icon__item">
            <a href="">
                <img src="${content[key].image}" alt="" class="icon__image">
            </a>
            <div class="icon__title">${content[key].title}</div>
        </li>`
    }  
}
getIcons()

async function getItems() {
    let response = await fetch('http://localhost:3000/items')
    let content = await response.json()
    let result = await content.sort((item1,item2) => item2.date - item1.date).slice(0,5)
    
    console.log(result)
    

    let list = document.querySelector('.container')
    
    

    for(let key in result) {
        
        list.innerHTML += `
        
        <article class="item">
                    <a href="">
                        <img src="${content[key].logo}" alt="image" class="item-logo">
                    </a>
                    <div class="item-name">${content[key].name}</div>
                    <div class="item-price">${content[key].price}</div>
        </article>`
  
    }  


}

getItems()




























