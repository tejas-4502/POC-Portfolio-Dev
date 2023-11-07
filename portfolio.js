// js for top and side nav
$("#mobile").click(function () {
    $('.sideBar').addClass("showMenu");
    $('.sideBar').removeClass("widthChange");
    $('.backdrop').addClass('showBackdrop')
});
$(".cross-icon").click(function () {
    $('.sideBar').removeClass("showMenu");
    $('.backdrop').removeClass('showBackdrop')
});
$(".backdrop").click(function () {
    $('.sideBar').removeClass("showMenu");
    $('.backdrop').removeClass('showBackdrop')
});
$("#desktop").click(function () {
    $('li label').toggleClass("hideMenuList");
    $('.sideBar').toggleClass("widthChange");
});
$('li').click(function () {
    $('li').removeClass();
    $(this).addClass('selected');
    $('.sideBar').removeClass("showMenu");
});


// skills carasuel js
var index = 1;
showSlide(index);

function plusSlide(n) {
    showSlide(index = index + n);
}

function showSlide(n) {
    var i;
    var slide = document.getElementsByClassName("slider");
    if (n > slide.length) {
        index = 1;
    }
    if (n < 1) {
        index = slide.length;
    }
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    slide[index - 1].style.display = "block";
}

// stopwatch js

let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 0o0;
let minute = 0o0;
let second = 0o0;
let count = 0o0;

startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', function () {
    timer = false;
});

resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});

function stopWatch() {
    if (timer) {
        count++;
        if (count == 100) {
            second++;
            count = 0;
        }
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;

        if (hour < 10) {
            hrString = "0" + hrString;
        }

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;

        setTimeout(stopWatch, 10);
    }
}

//   digital clock js
function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
}
showTime();

// weather js
const api_key = "5d9840e44a8ae22baed51974ec1bb853";
const api_url =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
async function checkWeather(city) {
    const api = await fetch(api_url + city + `&appid=${api_key}`);
    var data = await api.json();
    // console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.main.speed + " km/h";

}

searchBtn.addEventListener("click", () => {
    document.querySelector(".weather").style.display = "block";
    checkWeather(searchBox.value);
});
checkWeather();