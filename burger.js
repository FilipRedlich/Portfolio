let navLinks = document.querySelector('.nav-links');
var x, i=0;
x = document.querySelectorAll(".media");

function burg() {
    navLinks.classList.toggle('open')
    if(x[0].style.zIndex == "-1"){
        for ( i=0;i < x.length; i++) {
            x[i].style.zIndex = "0";
        }
    }
    else{
        for ( i=0;i < x.length; i++) {
            x[i].style.zIndex = "-1";
        }
    }
}
