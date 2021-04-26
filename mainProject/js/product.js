// change the image depends on colour 
const toggleImg = document.getElementById("img-product");
let val = "Red";
function toggleColor(type){
    
    switch(type){
        case 1:
            toggleImg.src = "./img/ipod-nano-3rd-gen-1.png";
            val = "Red";
            break;
        case 2:
            toggleImg.src = "./img/ipod-nano-3rd-gen-2.png";
            val = "Blue";
            break;
        case 3:
            toggleImg.src = "./img/ipod-nano-3rd-gen-3.png";
            val = "Pink";
            break;
        case 4:
            toggleImg.src = "./img/ipod-nano-3rd-gen-4.png";
            val = "Grey";
            break;
        case 5:
            toggleImg.src = "./img/ipod-nano-3rd-gen-5.png";
            val = "Black";
            break;
    }
}
// when you click the buy button then show alert
function buy(){
    alert("You choose "+val+" Complete Order");
}

// FAQ toggle 
const current = document.getElementsByClassName("btnFaq");
const plus = document.getElementsByClassName("fas");
    let i;
    for (i = 0; i < current.length; i++) {
        current[i].addEventListener("click", function() {
        this.classList.toggle("show");
        // plus[i].classList.toggle("change");

    let section = this.nextElementSibling;
    if (section.style.display === "block") {
        section.style.display = "none";
    } else {
        section.style.display = "block";
    }
    });
}

// when you click the submit button then show alert
function btnsubmit(){
    alert("Submit complete!!");
    location.reload();
}
