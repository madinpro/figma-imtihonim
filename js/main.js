var elButton = document.querySelector(".btn");
var elButtonMenu = document.querySelector(".btn__menu");
var elButtonExit = document.querySelector(".btn__exit");
var elNav = document.querySelector(".nav");
var elNavPlay = document.querySelector(".nav__link--play");



elButton.addEventListener("click", function(evt) {
    
    elButtonMenu.classList.toggle("btn__menu_exit")
    elButtonExit.classList.toggle("btn__exit_menu")
    elNav.classList.toggle("nav__blok")
    elNavPlay.classList.toggle("nav__link--playy")
}
)
