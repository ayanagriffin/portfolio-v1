let mainPicture = document.querySelector('.mainPicture');
let aboutMePicture = document.querySelector('.aboutMePicture');
let links = document.querySelectorAll('.nav-links');

mainPicture.addEventListener('mouseover', function(){
    mainPicture.src = '../images/me-computer-smile.png';
});

mainPicture.addEventListener('mouseout', function(){
    mainPicture.src = '../images/me-computer.png';
});

aboutMePicture.addEventListener('mouseover', function(){
    aboutMePicture.src = '../images/me-waving-wink.png';
});

aboutMePicture.addEventListener('mouseout', function(){
    aboutMePicture.src = '../images/me-waving.png';
});


links.forEach((link)=> {
    link.addEventListener('click', function(){
        document.querySelector('#check').checked = false;
    })  
        
});