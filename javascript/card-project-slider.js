$(document).ready(function () {
 
    const ecobud = { "t1": "EcoBud1", "t2": "sample2", "t3": "wooo3" };
    const allProjects = { "ecobud": ecobud }
    $('.tap').click(function () {
        const id = $(this).attr('id')
        const project = allProjects[id]
        
        console.log(project)
        if ($(this).hasClass('tap-2')) {
            $("h2." + id).html(project.t2);
        }else if ($(this).hasClass('tap-3')){
            $("h2." + id).html(project.t3);
        }else{
            $("h2." + id).html(project.t1);
        }
        
        $(this).addClass('active-slide').siblings().removeClass('active-slide');
    });

})