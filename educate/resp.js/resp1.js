burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')


burger.addEventListner('click',()=>{
    rightnav.classList.toggle('v-class-resp');
    nav-list.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-class-resp');
})