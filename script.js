//Navbar active
const sections = document.querySelectorAll("section");
const navli = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute("id");
        }


    })
    navli.forEach(li => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active")
        }
    })

})

/*Scroll navbar  backgraund*/
window.onscroll = function () { scrollFunction() };
window.onload = function () { scrollFunction() };
const mainNavbar = document.getElementById("mainNavbar")
const navOffcanvasToggler = document.querySelector(".nav-offcanvas-toggler")
function scrollFunction() {
    if (document.documentElement.scrollTop > 80) {
        mainNavbar.classList.remove("navbar-dark")
        mainNavbar.classList.add("navbar-light")
        mainNavbar.style.backgroundColor = "white"
        navOffcanvasToggler.classList.add("scroll")



    } else if (window.innerWidth > 992) {

        mainNavbar.classList.add("navbar-dark")
        mainNavbar.classList.remove("navbar-light")
        mainNavbar.style.backgroundColor = "transparent"
        navOffcanvasToggler.classList.remove("scroll")
    } else {
        mainNavbar.classList.remove("navbar-dark")
        mainNavbar.classList.add("navbar-light")
        mainNavbar.style.backgroundColor = "white"
        navOffcanvasToggler.classList.add("scroll")
    }
}

//One Page Click nav-link Close Collapse
function closeColllapseNavbar() {

    document.querySelector('[data-bs-toggle="collapse"]').click();

}

window.addEventListener("resize", function () {

    var BtnCanvas = document.querySelectorAll(".btn-close-collapse");
    if (window.innerWidth < 992) {

        for (let i = 0; i < BtnCanvas.length; i++) {
            BtnCanvas[i].addEventListener("click", closeColllapseNavbar);
        }
    } else {
        for (let i = 0; i < BtnCanvas.length; i++) {
            BtnCanvas[i].removeEventListener("click", closeColllapseNavbar);
        }
    }


    if (window.innerWidth < 992 && (document.documentElement.scrollTop < 80)) {
        mainNavbar.classList.remove("navbar-dark")
        mainNavbar.classList.add("navbar-light")



    } else if (document.documentElement.scrollTop < 80) {
        navOffcanvasToggler.classList.remove("scroll")
        mainNavbar.style.backgroundColor = "transparent"
        mainNavbar.classList.add("navbar-dark")
        mainNavbar.classList.remove("navbar-light")
    } else if (document.documentElement.scrollTop > 80) {

        mainNavbar.classList.remove("navbar-dark")
        mainNavbar.classList.add("navbar-light")
        navOffcanvasToggler.classList.add("scroll")
        mainNavbar.style.backgroundColor = "white"
    }

})
//Counterr up Animation

const aboutDataContainer = document.querySelector(".about-data-container")

let valueDisplays = document.querySelectorAll(".num");
let interval = 2000;
let flagCounterUp = 1;
window.addEventListener("scroll", () => {
    const aboutDataContainerHeight = aboutDataContainer.clientHeight
    const aboutDataContainerTop = aboutDataContainer.offsetTop;

    if ((window.scrollY >= (aboutDataContainerTop - aboutDataContainerHeight)) && flagCounterUp == 1) {
        valueDisplays.forEach((valueDisplays) => {

            flagCounterUp += 1

            let startValue = 0;
            let endValue = parseInt(valueDisplays.getAttribute("data-count"));
            let duration = Math.floor(interval / endValue);
            let counter = setInterval(function () {
                startValue += 1;
                valueDisplays.textContent = startValue;
                if (startValue == endValue) {
                    clearInterval(counter);
                }
            }, duration)
        });

    }



})