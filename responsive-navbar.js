const button = document.getElementById('button')
const nav = document.getElementById('navbar')

button.addEventListener("click", () => {
    // navItems.classList.toggle('toggle');
    console.log('crap');
    if (button.style.display = 'flex') {
        nav.style.display = 'none';
        console.log('it works')
    }
})