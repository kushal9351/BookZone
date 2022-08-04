const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
// const search = document.getElementsByClassName('search')[0]


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    // search.classList.toggle('active')
    // lgin.classList.toggle('active')

})