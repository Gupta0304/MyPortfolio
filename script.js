let menuIcon = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    nav.classList.toggle('active');
};

    menuIcon.classList.remove('bx-x');
    nav.classList.remove('active');

   

/*------------remove toggle bar ----------*/
