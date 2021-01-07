if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && localStorage.getItem("darkmode") !== "false") {
    $('body').addClass('dark');
}

if (localStorage.getItem("darkmode") == "true") {
    $('body').addClass('dark');
}

window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("preload-finish");

});

$(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
$(".owl-next").html('<i class="fa fa-chevron-right"></i>');

$(document).ready(function () {
    $('#navbar').load('navbar.html');
    $('#footer').load('footer.html');
    $('.preloader').load('preloader.html');
})