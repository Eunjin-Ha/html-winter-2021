// Control title
const hoverTitle = document.querySelector(".border");
const bgWrap = document.querySelector("#wrapper");

// when the mouseover of the title area, remove the opacity
hoverTitle.addEventListener("mouseover",function(){
    bgWrap.style.opacity = 1;
});
// when the mouseout of the title area, set the opacity
hoverTitle.addEventListener("mouseout",function(){
    bgWrap.style.opacity = 0.85;
});
// when the click of the title area, move to Instagram of La La land movie
hoverTitle.addEventListener("click",function(){
    window.open("https://www.instagram.com/lalaland/","_blank");
}); 


// move to sns of emma & Rayn
const snsEmma = document.querySelector(".sns1");
const snsRayn = document.querySelector(".sns2");

snsEmma.addEventListener("click",function(){
    window.open("https://www.instagram.com/emmastone/","_blank");
});

snsRayn.addEventListener("click",function(){
    window.open("https://www.instagram.com/goslingdaily/","_blank");
});