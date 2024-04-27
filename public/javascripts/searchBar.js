const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const form = document.getElementById('searchForm');
const menu = document.querySelector('.menu')
const menuButton = document.getElementById('menuButton')
const main = document.querySelector('.main')
const nav = document.querySelector('nav')

window.addEventListener('scroll', ()=>{
    if(window.scrollY > nav.offsetHeight + 150){
        nav.classList.add('active')
    }else{
        nav.classList.remove('active')
    }
})

function events_Button(){
    btn.addEventListener('mouseover', ()=>{
        if(search.classList.contains('active')){
            console.log('Search bar is active')
        }else{
            search.classList.add('active')
        }
    })


  
    menuButton.addEventListener('click', ()=>{
        if(menu.classList.contains('active')){
            menu.classList.remove('active')
        }else{
            menu.classList.add('active')
        
        }
    })

    main.addEventListener('click', ()=>{
        if(menu.classList.contains('active')){
            menu.classList.remove('active')
        }
    })
}



events_Button()