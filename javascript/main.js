
// CAROUSELS FOR MINIMIZED FEATURED PROJECTS PAGE AND UP TO PAGE


// fun facts carousel

$(".projects").owlCarousel({
    margin: 10,
    loop: true,
    items: 1,
    nav: true,
    dots: true,

    responsiveClass: true,
    responsive: {
        0: {
            nav: false,

        },
        640: {
            nav: true,

        }
    }


});

$(".proj-container").owlCarousel({

    loop: true,
    items: 1,
    nav: true,
    dots: true,

    responsiveClass: true,
    responsive: {
        0: {
            nav: false,

        },
        640: {
            nav: true,

        }
    }

});


// HANDLES DISPLAYING CORRECT INFO FOR FUN FACT BASED ON WHICH ONE THE USER HAS HOVERED OVER

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

if (sessionStorage.getItem('about-me') == 'true') {
    container.classList.add("about-mode");
    container.classList.remove("home-mode");
    sessionStorage.setItem('about-me', 'false');
}


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

// });

const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

console.log(document.body.scrollHeight);
function scrollFunction() {
    if (window.pageYOffset > (document.body.scrollHeight / 1.5)) { // Show backToTopButton
        if (!backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.remove("btnExit");
            backToTopButton.classList.add("btnEntrance");
            backToTopButton.style.display = "block";
        }
    }
    else { // Hide backToTopButton
        if (backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.remove("btnEntrance");
            backToTopButton.classList.add("btnExit");
            setTimeout(function () {
                backToTopButton.style.display = "none";
            }, 250);
        }
    }
}

backToTopButton.addEventListener("click", backToTop);

function backToTop() {
    window.scrollTo(0, 0);
}
