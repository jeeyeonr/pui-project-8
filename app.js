let mouseCursor = document.querySelector(".cursor");
let navbar  = document.querySelectorAll( ".navbar navbar-expand-lg navbar-light bg-light");

window.addEventListener("mousemove", cursor);


function cursor(e){
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";

}