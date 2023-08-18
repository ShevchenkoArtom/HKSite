// БУРГЕР
const menuBtn =  document.querySelector('.menu__btn');
const menuMobile =  document.querySelector('.header__menu-list');
menuBtn.addEventListener('click', function () {
    menuMobile.classList.toggle('open');
});




// Якори
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
};



// Шапка и кнопка вверх
// const header = document.querySelector(".js-header");
// let headerH = header.clientHeight;

// document.onscroll = function () {
//     let scroll = window.scroll;
//     console.log(scroll)

//     if (scroll > headerH) {
//         header.classList.add("fixed")
//     }
// }



// ACCORDION   

document.querySelectorAll(".accordion__openButton").forEach((element) => {
    element.addEventListener("click", function() {

        let content = element.nextElementSibling;
        
        
        if (content.style.maxHeight) {
            document.querySelectorAll('.accordion-content');
        } else {

        }

    });
});