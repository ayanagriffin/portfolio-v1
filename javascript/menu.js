$(document).ready(function () {


    // CLOSES RESPONSIVE MENU WHEN USER CLICKS LINK
    const links = document.querySelectorAll('.nav-links');

    links.forEach((link) => {
        link.addEventListener('click', function () {
            document.querySelector('#check').checked = false;
        })

    });



});

// TAKE THE USER TO THE ABOUT ME PAGE IF THEY NAVIGATE TO IT ON THE NAVBAR

//  aboutBtn.addEventListener('click', () => {
//      sessionStorage.setItem('about-me', 'true');

//  });
const aboutBtn = document.querySelector("#about");

aboutBtn.addEventListener('click', function () {
    sessionStorage.setItem('about-me', 'true');
});



//CHECK THE ORIGINAL COLOR SETTING TO DETERMINE WHICH ICON SHOULD BE DISPLAYED
if ($('body').hasClass('dark')) {
    $("#darkmode").html('<i id="darkmode" class="fas fa-cloud-sun"></i>');
    $("#darkmode-tip").html('switch to light mode')
    $("#darkmode-footer").html('<i id="darkmode-footer" class="fas fa-cloud-sun"></i>');

} else {
    $("#darkmode").html('<i id="darkmode" class="fas fa-cloud-moon"></i>');
    $("#darkmode-tip").html('switch to dark mode')
    $("#darkmode-footer").html('<i id="darkmode-footer" class="fas fa-cloud-moon"></i>');

}
//SWITCH TO DARK MODE BY ADDING CLASS 'DARK' TO BODY WHEN BTN IS CLICKED
const dark_btn = document.querySelector('#darkmode');
const body = document.querySelector('body');


dark_btn.addEventListener('click', () => {
    $('body').toggleClass('dark');
    if ($('body').hasClass('dark')) {
        localStorage.setItem("darkmode", "true");
        $("#darkmode").html('<i id="darkmode" class="fas fa-cloud-sun"></i>');
        $("#darkmode-tip").html('switch to light mode');
        $("#darkmode-footer").html('<i id="darkmode-footer" class="fas fa-cloud-sun"></i>');

        // CHANGE SRC OF ICONS ON PROJECT PAGE TO ENSURE VISIBILITY
        $("#role").attr("src", "images/projects/icons/role-dark.svg");
        $("#date").attr("src", "images/projects/icons/calendar-dark.svg");
        $("#type").attr("src", "images/projects/icons/computer-dark.svg");
        $("#tools").attr("src", "images/projects/icons/tools-dark.svg");

    } else {
        localStorage.setItem("darkmode", "false");
        $("#darkmode").html('<i id="darkmode" class="fas fa-cloud-moon"></i>');
        $("#darkmode-tip").html('switch to dark mode')
        $("#darkmode-footer").html('<i id="darkmode-footer" class="fas fa-cloud-moon"></i>');

        $("#role").attr("src", "images/projects/icons/role.svg");
        $("#date").attr("src", "images/projects/icons/calendar.svg");
        $("#type").attr("src", "images/projects/icons/computer.svg");
        $("#tools").attr("src", "images/projects/icons/tools.svg");

    }

})



