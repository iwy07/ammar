const menu = document.querySelector(".menu"),
mopen = document.querySelector(".mopen"),
mclose = document.querySelector(".mclose"),
blackB = document.querySelector(".blackB"),
serBtn = document.querySelector(".serBtn"),
options = document.querySelector(".options");
btns = document.querySelector(".btns");

mopen.onclick = function x(){
    menu.style.right="0";
    menu.style.top="0";
    blackB.style.right="0";
    blackB.style.top="0";
}
mclose.onclick = e=>{
    menu.style.right="-100%";
    blackB.style.right="-100%";
}
blackB.onclick = e=>{
    menu.style.right="-100%";
    blackB.style.right="-100%";
}
btns.onclick = e=>{
    menu.style.right="-100%";
    blackB.style.right="-100%";
}


// serBtn.onclick = s=>{
//         options.style.visibility="visible";
// }
