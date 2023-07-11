$(document).ready(function () {
    $('.show-menu').click(function () {
        $('.menu-bar-top').slideToggle()
    });
    $('.show-menu').click(function () {
        $('.show-menu').hide(),
            $('.hide-menu').show(),
            $('.menu-bar-top').slideDown();
    });
    $('.hide-menu').click(function () {
        $('.show-menu').show(),
            $('.hide-menu').hide();
        $('.menu-bar-top').slideUp();
    });
    $('.count').counterUp({
        delay: 100,
        time: 3000,
    });
    var filter_container = ".project";
    var mixer = mixitup(filter_container, {
        load: {
            filter: 'all'
        }
    });
    $('#myCarousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsiveClass: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1000: {
                items: 2,
            }
        }
    })
    $('#myCarousel2').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsiveClass: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            991: {
                items: 1,
            },
            992: {
                items: 2,
            }
        }
    });
})





// Dark mood java Script Start 

const body = document.querySelector("body"),
    modeToggle = document.querySelector(".darklight");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
    body.classList.add("dark");
}

modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

    if (!body.classList.contains("dark")) {
        localStorage.setItem("mode", "light-mode");
    } else {
        localStorage.setItem("mode", "dark-mode");
    }
});

// Dark mood java Script End 