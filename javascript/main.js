
// REMEMBER WHICH MODE THE USER LAST USED (LIGHT OR DARK), OR CHECK THEIR PREFERENCE IF IT'S THEIR FIRST TIME
// 
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && localStorage.getItem("darkmode") !== "false") {
    $('body').addClass('dark');
}

if (localStorage.getItem("darkmode") == "true") {
    $('body').addClass('dark');
}
// CAROUSELS FOR MINIMIZED FEATURED PROJECTS PAGE AND UP TO PAGE
$(".projects").owlCarousel({
    margin: 10,
    loop: true,
    items: 1,
    nav: true,
    dots: true,

    responsiveClass: true,
    responsive: {
        0: {
            nav: true,

        },
        640: {
            nav: true,

        },
        1048: {
            autoplay: false,

        }
    }


});

$(".proj-container").owlCarousel({
    
    loop: true,
    items: 1,
    nav: true,
    dots: true,


});

$(".cards").owlCarousel({

    loop: true,
    items: 3,
    nav: true,
    dots: true,
    margin: 15,

    responsiveClass: true,
    responsive: {
        0: {
            items: 1,

        },
        600: {
            items: 2,
            margin: 25,
        },
        900: {
            items: 3,

        },
    }



});
$(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
$(".owl-next").html('<i class="fa fa-chevron-right"></i>');

// HANDLES DISPLAYING CORRECT INFO FOR FEATURED PROJECT BASED ON WHICH ONE THE USER HAS HOVERED OVER

const iconBox = document.querySelectorAll('.iconBox');
const contentBox = document.querySelectorAll('.contentBox');

for (let i = 0; i < iconBox.length; i++) {
    iconBox[i].addEventListener('mouseover', function () {

        // removing ".active" from all other contentBoxes
        for (let i = 0; i < contentBox.length; i++) {
            contentBox[i].className = 'contentBox';
        }

        // adding ".active" to current contentBox
        document.getElementById(this.dataset.id).className = "contentBox active";

        for (let i = 0; i < iconBox.length; i++) {
            iconBox[i].className = 'iconBox';
        }

        this.className = "iconBox active";
    })
}
$(document).ready(function () {
    // LOAD THE HEADER AND FOOTER
    $('#navbar').load('navbar.html');
    $('#footer').load('footer.html');
    $('.preloader').load('preloader.html');

    // HANDLES SWITCH BETWEEN HOME AND ABOUT ME PAGES
    const back_btn = document.querySelector('#back-home-btn');
    const about_btn = document.querySelector('#about-me-btn');

    const container = document.querySelector("#home-container");

    about_btn.addEventListener('click', () => {
        container.classList.add("about-mode");
        container.classList.remove("home-mode");
    })

    back_btn.addEventListener('click', () => {
        container.classList.add("home-mode");
        container.classList.remove("about-mode");

    })

    // if (sessionStorage.getItem('about-me') == 'true') {
    //     container.classList.add("about-mode");
    //     container.classList.remove("home-mode");
    //     sessionStorage.setItem('about-me', 'false');
    // }


    // IF THE INPUT FIELDS ON THE CONTACT FORM ARE FILLED, ADD CLASS TO MAKE THE LABELS MOVE UP
    $('input').blur(function () {
        if ($(this).val()) {
            $(this).addClass('filled')
        } else {
            $(this).removeClass('filled')
        }
    });

    $('textarea').blur(function () {
        if ($(this).val()) {
            $(this).addClass('filled')
        } else {
            $(this).removeClass('filled')
        }
    });

    // MOVES LABELS BACK TO ORIGINAL POSITION WHEN USER SUBMITS FORM
    const send_btn = document.querySelector('#send-btn');

    send_btn.addEventListener('click', () => {
        $('input').removeClass('filled');
        $('textarea').removeClass('filled');

    });

});