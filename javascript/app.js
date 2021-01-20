// File for JS that is used on each page

// displays the preloader animation while page elements load
window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("preload-finish");

});

$(document).ready(function () {

    // Change to dark mode if necessary (ie if the user's browser default is dark, or if they previously chose dark mode)
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && localStorage.getItem("darkmode") !== "false") {
        $('body').addClass('dark');
    }

    if (localStorage.getItem("darkmode") == "true") {
        $('body').addClass('dark');
    }
    // loads separated html files/elements on to each page
    $('#navbar').load('navbar.html');
    $('#footer').load('footer.html');
    $('.preloader').load('preloader.html');

    // changes the icon uses as the arrow for the carousels (seen on the ft. projects section, as well as the images section of a singular project)
    $(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $(".owl-next").html('<i class="fa fa-chevron-right"></i>');

    if ($("body").hasClass("dark") && $("#role")) {
        // CHANGE SRC OF ICONS ON PROJECT PAGE TO ENSURE VISIBILITY
        $("#role").attr("src", "images/projects/icons/role-dark.svg");
        $("#date").attr("src", "images/projects/icons/calendar-dark.svg");
        $("#type").attr("src", "images/projects/icons/computer-dark.svg");
        $("#tools").attr("src", "images/projects/icons/tools-dark.svg");
    }


})