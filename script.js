// Bikin efek kalo klik button langsung scroll kebawah
function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTIme = null;

    function animation(currentTime) {
        if (startTIme === null) startTIme = currentTime;
        var timeElapsed = currentTime - startTIme;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

var smoothDropdown = document.querySelector(".dropdown");

smoothDropdown.addEventListener("click", () => {
    smoothScroll(".mainPage", 1000);
});

function handle() {
    const burger = document.querySelector('.header__hamburger');
    const mobileNav = document.getElementById('mobile__nav');
    // const links = document.querySelectorAll('.links .link');

    if (!mobileNav.classList.contains("nav__show")) {
        mobileNav.classList.add("nav__show");
        burger.classList.add("hamburger__animated");
    } else {
        mobileNav.classList.remove("nav__show");
        burger.classList.remove("hamburger__animated");
    }
}

// Kalo mau di balik dari bawah smooth keatas 
// tinggal balik targetnya ke .header

// Bikin effect text muncul pas di scroll
// function scrollAppear() {
//     var greetings = document.querySelector(".greetings");
//     var greetingsPosition = greetings.getBoundingClientRect().top;
//     var screenPosition = window.innerHeight / 2;

//     if (greetingsPosition < screenPosition) {
//         greetings.classList.add("greetings-appear");
//     }
// }

// window.addEventListener("scroll", scrollAppear);