
// change the image on the order area when image selected on the top
function changeImg(imgName){

    // Change the selected Pizza Image 
    const orderImg = document.getElementById("orderImg");
    orderImg.src ="../OrderPizza/img/"+imgName+".jpg";

    // Change the selected Pizza title 
    const changeSubject = document.querySelector(".subject");
    changeSubject.value = imgName;
    changeSubject.innerHTML = imgName + " Pizza";
}

/* Size funtions */
// Add bottom info (size, quantity, total price) variables
const btnSizeL = document.querySelector(".btn-SizeL");
const btnSizeM = document.querySelector(".btn-SizeM");
const btnSizeS = document.querySelector(".btn-SizeS");
const changeSize = document.querySelector(".size");
const changePrice = document.querySelector(".totalPrice");

let size = '';
let price = 0;
let totalPrice = 0;

// Large size select fucntion.
btnSizeL.addEventListener("click", function(){
    size = "L";
    changeSize.value = size;
    changeSize.innerHTML= "Size: " + size;
    price = parseFloat(25).toFixed(2);
    changePrice.innerHTML= "Total: " + price;
});

// Medium size select fucntion.
btnSizeM.addEventListener("click", function(){
    size = "M";
    changeSize.value = size;
    changeSize.innerHTML= "Size: " + size;
    price = parseFloat(18).toFixed(2);
    changePrice.innerHTML= "Total: " + price;
});

// Small size select fucntion.
btnSizeS.addEventListener("click", function(){
    size = "S";
    changeSize.value = size;
    changeSize.innerHTML= "Size: " + size;
    price = parseFloat(13).toFixed(2);
    changePrice.innerHTML= "Total: " + price;
});
/* Size funtions */


/* Quantity Funtions */

// Add & take away of the quantity variables
const btnUp = document.querySelector(".btn-up");
const btnDown = document.querySelector(".btn-down");
const btnQuality = document.querySelector(".btnQuantity");
let inputQ = document.querySelector(".quantity");


// Add quantity +1
btnUp.addEventListener("click", function(){
    if(parseFloat(price) < 0 || parseFloat(price) === 0 ){//validation check

        alert("Please choose size");
    }else{
        inputQ.value  = parseInt(inputQ.value) + 1;
        btnQuality.innerHTML = "Quantity : " +inputQ.value;
        totalPrice = parseFloat(price * inputQ.value).toFixed(2);
        changePrice.innerHTML= "Total: " + totalPrice;
    }
});

// Take away quantity -1
btnDown.addEventListener("click", function(){
    if(inputQ.value  <1 || inputQ.value === 1){
        alert("The quantity must be higher than zero.");
    }
    else{
        inputQ.value  = parseInt(inputQ.value) - 1;
        btnQuality.innerHTML = "Quantity : " +inputQ.value;
        totalPrice = parseFloat(totalPrice - price).toFixed(2);
        changePrice.innerHTML= "Total: " + totalPrice;
    }
});
/* Quantity Funtions */

/* Side menu Funtions */
const btnMac = document.getElementById("side-macncheese");
const btnSalad = document.getElementById("side-salad");
const btnPasta = document.getElementById("side-alfredoPasta");

let inputSide = document.querySelector(".side");
let btnMacOption = 0;
let btnsaladOption = 0;
let btnPastaOption = 0;

// Mac n Cheese
btnMac.addEventListener("change", function(){
    btnMacOption = btnMac.options[btnMac.selectedIndex].value;
    inputSide.innerHTML = "Mac and Cheese x "+ btnMacOption;
});

// Salad
btnSalad.addEventListener("change", function(){
    btnsaladOption = btnSalad.options[btnSalad.selectedIndex].value;
    inputSide.innerHTML ="The Kale Quinoa Salad x "+ btnsaladOption;
});

// Pasta
btnPasta.addEventListener("change", function(){
    btnPastaOption = btnPasta.options[btnPasta.selectedIndex].value;
    inputSide.innerHTML ="Alfredo Pasta x "+ btnPastaOption;

});
/* Side menu Funtions */


// Order buttom
function confirmOrder(){
    if(totalPrice <0 || totalPrice === 0 ){
        alert("Please check order!");
    }else{
        alert("Order completed!. Enjoy pizza! ");
        location.reload();
    }
}


