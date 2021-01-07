$(document).ready(function () {

    const ecobud = { "p1": "First slide: quick description and/or tagline for the project (what does it do?)", "p2": "Second slide: More technical details about the project. What did I use to make it?", "p3": "Third slide: Any other quick details that are specific to the project, like awards!" };
    const allProjects = { "ecobud": ecobud }
    $('.tap').click(function () {
        const id = $(this).attr('id')
        const project = allProjects[id]
        if ($(this).hasClass('tap-2')) {
            $("p." + id).html(project.p2);
        } else if ($(this).hasClass('tap-3')) {
            $("p." + id).html(project.p3);
        } else {
            $("p." + id).html(project.p1);
        }

        $(this).addClass('active-slide').siblings().removeClass('active-slide');
    });

})