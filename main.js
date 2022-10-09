const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const movileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggledesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);



function toggledesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    
    if(!isAsideClosed){
        aside.classList.add('inactive') 
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    
    if(!isAsideClosed){
        aside.classList.add('inactive') 
    }

    movileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const ismovileMenuClosed = movileMenu.classList.contains('inactive');

    if(!ismovileMenuClosed){
        movileMenu.classList.add('inactive') 
    }
    aside.classList.toggle('inactive');

}