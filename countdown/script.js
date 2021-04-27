// set the countdown date
const countDownDate = new Date("May 17, 2021 00;00:00").getTime();

// update countdown every 1s
let run = setInterval(function(){

    // today date
    let today = new Date().getTime();


    // get countdown date (countDownDate - today)
    let leftTime = countDownDate - today;

    // calculate days, hours, minutes, seconds
    let days = Math.floor(leftTime / (1000 * 60 * 60 * 24)); // 1s * 60 => 1m * 60 => 1h *24 => 24h
    let hours = Math.floor((leftTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((leftTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((leftTime % (1000 * 60)) / 1000);

    //  input data into HTML 
    const daysData = document.getElementById("days");
    const hoursData = document.getElementById("hours");
    const minutesData = document.getElementById("minutes");
    const secondsData = document.getElementById("seconds");

    daysData.innerHTML = days;
    hoursData.innerHTML = hours;
    minutesData.innerHTML = minutes;
    secondsData.innerHTML = seconds;

},1000);