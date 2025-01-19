// let navLinks = document.getElementsByClassName('nav-link');

// for (quest of navLinks) {
//     quest.addEventListener('click', function(){
//         // for (others of questions) {
//         //     if (others !== this) {
//         //         others.classList.remove('active')
//         //     }
//         // }
//         this.setAttribute('class', 'active');
//     });
// }


function activeFunction(clickedLink) {
    // Remove the active class from all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    // Add the active class to the clicked link's parent <li>
    clickedLink.classList.add('active');
    console.log(clickedLink.innerText);
}


// this one works 
function showNav(hambugger) {
    let mobileNav = document.querySelector('.nav-list');
    let overlay = document.querySelector('#overlay');

    overlay.classList.toggle('showOverlay');
    mobileNav.classList.toggle('showNav');
    console.log(hambugger)

    // console.log('Overlay classes:', overlay.classList);
    // console.log('Mobile Nav classes:', mobileNav.classList);
}