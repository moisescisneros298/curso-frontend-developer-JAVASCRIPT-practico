const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const movileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardContainer = document.querySelector('.cards-container');


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

const productList = []
productList.push({
    name:'bike',
    price:'120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})
productList.push({
    name:'pantalla',
    price:'220',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})
productList.push({
    name:'comou',
    price:'620',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

}

)
productList.push({
    name:'bike',
    price:'120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})
productList.push({
    name:'pantalla',
    price:'220',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})
productList.push({
    name:'comou',
    price:'620',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

}

)

for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg =  document.createElement('Img');
    productImg.setAttribute('src', product.image)

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)


    const productInfoFigure = document.createElement('figure');
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg')

    productInfoFigure.appendChild(productImgCard);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardContainer.appendChild(productCard)
}
