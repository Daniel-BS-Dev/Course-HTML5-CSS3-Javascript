var dv1;

window.addEventListener("load",start);

function start(){
    dv1 = document.getElementById("dv1");
    dv1.addEventListener("mouseover",changeOver);
    dv1.addEventListener("mouseout",changeOut);
}

function changeOver(){
    dv1.style.backgroundImage="url('../../images/sbrazil.jpg')"
}

function changeOut(){
    dv1.style.backgroundImage="url('../../images/simage.jpg')"
}