





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


async function getIcons() {
    let response = await fetch('http://localhost:3000/icons')
    let content = await response.json()
    console.log(content)
    

    let list = document.querySelector('._icons')

    for(let key in content) {
        
        list.innerHTML += `
        
        <li class="item swiper-slide">
            <a href="">
                <img src="${content[key].image}" alt="" class="icon">
            </a>
            <div class="title">${content[key].title}</div>
        </li>`
    }  
}
getIcons()

async function getItems() {
    let response = await fetch('http://localhost:3000/items')
    let content = await response.json()
    let result = await content.sort((a,b) => a.date - b.date)
    
    console.log(result)
    

    let list = document.querySelector('.container')
    
    

    for(let key in result) {
        
        list.innerHTML += `
        
        <article class="item">
                    <a href="">
                        <img src="${content[key].logo}" alt="" class="item-logo">
                    </a>
                    <div>${content[key].name}</div>
                    <div>${content[key].price}</div>
        </article>`

        
    }  


}

getItems()






/*document.querySelector('#first').addEventListener('click', get);
async function get() {
    let response = await fetch('http://localhost:3000/items')
    let content = await response.json()
    let result = content.slice(0,1);
   
    
    
    

    for(let key in result) {
        
        app.innerHTML = `
        
        <article class="item">
                    <a href="">
                        <img src="${content[key].logo}" alt="" class="item-logo">
                    </a>
                    <div>${content[key].name}</div>
                    <div>${content[key].price}</div>
        </article>`

        
    }  


}*/

let app = document.querySelector('#app');

const locationRouter = (location) => {
    switch (location) { 
        case "#/first/": 
        async function get() {
            let response = await fetch('http://localhost:3000/items')
            let content = await response.json()
            let result = content[0]
            console.log(result)
            
            for(let key in result) {
                app.innerHTML = `
                <article class="item">
                            <a href="">
                                <img src="${result.logo}" alt="" class="item-logo">
                            </a>
                            <div>${result.name}</div>
                            <div>${result.price}</div>
                </article>`    
            }    
        }
        get()

        break; 
        
        case "#/second/": 
        async function get1() {
            let response = await fetch('http://localhost:3000/items')
            let content = await response.json()
            let result = content[1]
            console.log(result)
            
            for(let key in result) {
                app.innerHTML = `
                <article class="item">
                            <a href="">
                                <img src="${result.logo}" alt="" class="item-logo">
                            </a>
                            <div>${result.name}</div>
                            <div>${result.price}</div>
                </article>`    
            }    
        }
        get1()
        
        break;
    }
}

window.addEventListener('load', () =>{
    const location = window.location.hash
    
    if(location) {
        locationRouter(location)
    }

})

























