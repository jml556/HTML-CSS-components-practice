const navSlide = () => {
    const burger = document.querySelector('.hamburger')
    const nav = document.querySelector('.nav-links')
    const navLinks = nav.querySelectorAll('li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
        
        navLinks.forEach((item,idx) => {
            if (item.style.animation) {
                item.style.animation = ''
            }
            else {
                item.style.animation = `navLinkFade .5s ease forwards ${idx/ 5}s`
            }
        })
        burger.classList.toggle('toggle');
        
    })
}

navSlide()