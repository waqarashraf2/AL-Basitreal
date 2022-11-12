const hamburger = document.querySelector('.hamburger')
const navmanu = document.querySelector('.nav-manu')
const hnav = document.querySelector('.h-nav')
const navbar = document.querySelector('.navbar')


hamburger.addEventListener("click", ()=>{
navbar.classList.toggle('navbar');
navmanu.classList.toggle('nav-manu');
hnav.classList.toggle('h-nav');
hamburger.classList.toggle('active');


})


// notification elements you can reed it


const button = document.querySelector('.button-1')

button.addEventListener("click", ()=>{
    Notification.requestPermission().then(perm=> {
        if (perm === "granted") {
            new Notification("The gondel blue wolfe",{
                body:"This is more text you can ask every thing",
                icon:"logo/1.png",
                data:"this is not wrong but be caryfull dear",
               
                
            })
        }
    })
})

const c1 = document.querySelector('.c-1');
const name1 = document.querySelector('.name-last');
const number = document.querySelector('.number-last');

name1.addEventListener("click",()=> {
    var name1=15;
       if(name1<15){
        console.log('YOU CAN WRITE ONLY 15 WORDS')
       }
       else{
        console.log('GOOD NAME YOU CAN DO')
       }
       
} )


const element = document.get


