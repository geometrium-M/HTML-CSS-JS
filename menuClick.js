
const locationRouterMenu = (location) => {

    switch (location) { 
        case "#/firstMenu/": 
        async function get() {
            let response = await fetch('http://localhost:3000/typesHot')
            let content = await response.json()
           console.log(content)

           app.innerHTML = ''
            
            for(let key in content) {
                app.innerHTML += `
                    <div class="item">
                        <a href="">
                            <img src="${content[key].img}" alt="" class="item-logo">
                        </a>
                        <div>${content[key].title}</div>
                        <div>${content[key].price}</div>
            </div>`   
            } 
        }
        get()

        break;

        case "#/secondMenu/": 
        async function get1() {
            let response = await fetch('http://localhost:3000/typesSides')
            let content = await response.json()
           console.log(content)

           app.innerHTML = ''
            
            for(let key in content) {
                app.innerHTML += `
                    <div class="item">
                        <a href="">
                            <img src="${content[key].img}" alt="" class="item-logo">
                        </a>
                        <div>${content[key].title}</div>
                        <div>${content[key].price}</div>
            </div>`   
            } 
        }
        get1()

        break;

        case "#/thirdMenu/": 
        async function get2() {
            let response = await fetch('http://localhost:3000/typesDrinks')
            let content = await response.json()
           console.log(content)

           app.innerHTML = ''
            
            for(let key in content) {
                app.innerHTML += `
                    <div class="item">
                        <a href="">
                            <img src="${content[key].img}" alt="" class="item-logo">
                        </a>
                        <div>${content[key].title}</div>
                        <div>${content[key].price}</div>
            </div>`   
            } 
        }
        get2()

    }
}

window.addEventListener('load', () =>{
    const location = window.location.hash
    
    if(location) {
        locationRouterMenu(location)
    }
    
})