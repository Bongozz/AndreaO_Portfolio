const miniMe = document.getElementById("miniMe");
const menuTitle = document.getElementById("menuTitle");
const menuLink = document.getElementsByClassName("menuLink");

document.addEventListener('DOMContentLoaded', function() {

miniMe.addEventListener("click", event =>{
    miniMe.src = 'img/me_ouch.jpg';
    setTimeout(() => {
        miniMe.src = 'img/me_owie.jpg';
    }, 400);
});

miniMe.addEventListener("mouseover", event =>{
    miniMe.src = 'img/me_hover.jpg';
});
miniMe.addEventListener("mouseout", event =>{
    miniMe.src = 'https://piskel-imgstore-b.appspot.com/img/67f36deb-05e6-11f0-8b31-adb355fe7ec4.gif';
});

menuTitle.addEventListener("click", event =>{
    miniMe.src = 'img/me_linkclick.jpg';
    setTimeout(() => {
        miniMe.src = 'https://piskel-imgstore-b.appspot.com/img/67f36deb-05e6-11f0-8b31-adb355fe7ec4.gif';
    }, 400);
})

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener("mouseover", event => {
        miniMe.src = 'img/me_intrigued.jpg';
    });

    menuLink[i].addEventListener("mouseout", event => {
        miniMe.src = 'https://piskel-imgstore-b.appspot.com/img/67f36deb-05e6-11f0-8b31-adb355fe7ec4.gif';
    });
}
});
