const icon = document.querySelector(".icon")
const navItems = document.querySelector('.n')

icon.addEventListener("click", () => {
    navItems.classList.toggle('toggle')
    console.log('crap')
})