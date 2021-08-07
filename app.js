//mobile menu view//
const menuBtn = document.getElementById('menuBtn')
const closeBtn = document.getElementById('cross')
const headerTag = document.getElementById('headerTag')
const burgerBtn = document.querySelectorAll('.bars')

menuBtn.addEventListener('click',()=>{
    burgerBtn.forEach( bar => bar.classList.toggle('d-none'))
    closeBtn.classList.toggle('d-none')
    headerTag.classList.toggle('header-height')
})
//mobile menu view end//
