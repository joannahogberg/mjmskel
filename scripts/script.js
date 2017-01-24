/* Change background color for header on scroll */


window.addEventListener("scroll", navFunc);
var scroll = document.getElementById("scroll");

function navFunc() {
    if (document.body.scrollTop > 100 || scroll.scrollTop > 100) {

        document.getElementById("top").className = "nav_background";



    } else {
        document.getElementById("top").className = "";

    }
}





/* Open when someone clicks on the menu icon element */
function openNav() {
    closeAll();
    document.getElementById("navBar").style.width = "100%";
    document.getElementById("menu").style.opacity = "0";
}

/* Close when someone clicks on the "x" symbol inside the nav overlay */
function closeNav() {
    document.getElementById("navBar").style.width = "0%";
    document.getElementById("menu").style.opacity = "1";

}
