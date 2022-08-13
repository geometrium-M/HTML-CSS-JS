


let app = document.querySelector('.app');
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
                    <div class="item">
                        <a href="">
                            <img src="${result.logo}" alt="" class="item-logo">
                        </a>
                        <div>${result.name}</div>
                        <div>${result.price}</div>
               </div>`   
            } 
        
        }
        get() 

        
       

        async function getCategories() {
            let response = await fetch('http://localhost:3000/categories')
            let content = await response.json()
            
            console.log(content)

            let wrapper = document.createElement('div');
            wrapper.className = "category";
             app.append(wrapper);
            
            for(let key in content) {
                wrapper.innerHTML += `
                <article >
                    <a href="#/first/" >
                        <img src="${content[key].img}" alt="" class="item-logo">
                    </a>
                    <div>${content[key].type}</div>       
                </article>`  
            }
        
            
            let hot = document.querySelector('.category > :first-of-type ');
            hot.addEventListener('click',getTypeHot);
            
            let wrapperMenu = document.createElement('div');
            wrapperMenu.className = "category_container";
            app.append(wrapperMenu);

            let wrapperHot = document.createElement('div');
            wrapperHot.className = "category_1";
            wrapperMenu.append(wrapperHot);

                

            async function getTypeHot() {
                let response = await fetch('http://localhost:3000/typesHot')
                let content = await response.json()
                
                wrapperHot.innerHTML = ''

                for(let key in content) {
                    wrapperHot.innerHTML  += `
                    <div>
                        <div>
                            <img src="${content[key].img}" alt="" class="product">
                        </div>
                        <div>${content[key].title}</div>
                        <div>${content[key].price}</div>             
                    </div>`  
                }
            }

            let sides = document.querySelector('.category article:nth-child(2)');
                sides.addEventListener('click', getTypeSides);

            let wrapperSides = document.createElement('div');
            wrapperSides.className = "category_2";
            wrapperMenu.append(wrapperSides);
        
            async function getTypeSides() {
                let response = await fetch('http://localhost:3000/typesSides')
                let content = await response.json()

                wrapperSides.innerHTML = ''
    
                for(let key in content) {
                    wrapperSides.innerHTML += `
                    <div>
                        <div>
                            <img src="${content[key].img}" alt="" class="product">
                        </div>
                        <div>${content[key].title}</div>
                        <div>${content[key].price}</div>                
                    </div>`
                }
            }

            let drinks = document.querySelector('.category article:nth-child(3)');
                drinks.addEventListener('click', getTypeDrinks);

            let wrapperDrinks = document.createElement('div');
            wrapperDrinks.className = "category_3";
            wrapperMenu.append(wrapperDrinks);
        
            async function getTypeDrinks() {
                let response = await fetch('http://localhost:3000/typesDrinks')
                let content = await response.json()

                wrapperDrinks.innerHTML = ''
    
                for(let key in content) {
                    wrapperDrinks.innerHTML += `
                    <div>
                        <div>
                            <img src="${content[key].img}" alt="" class="product">
                        </div>
                        <div>${content[key].title}</div>
                        <div>${content[key].price}</div>                
                    </div>`
                }
            }

        }    
                
        getCategories() 
                  
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

        case "#/third/": 
        async function get2() {
            let response = await fetch('http://localhost:3000/items')
            let content = await response.json()
            let result = content[2]
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
        get2()
        
        break;
    }
}

window.addEventListener('load', () =>{
    const location = window.location.hash
    
    if(location) {
        locationRouter(location)
    }
    
})