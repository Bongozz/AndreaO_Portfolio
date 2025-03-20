const miniMe = document.getElementById("miniMe");
const menuTitle = document.getElementById("menuTitle");
const menuLink = document.getElementsByClassName("menuLink");

document.addEventListener('DOMContentLoaded', function() {

miniMe.addEventListener("click", event =>{
    miniMe.src = 'https://piskel-imgstore-b.appspot.com/img/beceaab3-05e6-11f0-a390-adb355fe7ec4.gif';
    setTimeout(() => {
        miniMe.src = 'ihttps://piskel-imgstore-b.appspot.com/img/d8614335-05e6-11f0-a472-adb355fe7ec4.gif';
    }, 400);
});

miniMe.addEventListener("mouseover", event =>{
    miniMe.src = 'https://piskel-imgstore-b.appspot.com/img/fc5aedae-05e5-11f0-a58b-adb355fe7ec4.gif';
});
miniMe.addEventListener("mouseout", event =>{
    miniMe.src = 'https://piskel-imgstore-b.appspot.com/img/67f36deb-05e6-11f0-8b31-adb355fe7ec4.gif';
});

menuTitle.addEventListener("click", event =>{
    miniMe.src = 'https://piskel-imgstore-b.appspot.com/img/fc5aedae-05e5-11f0-a58b-adb355fe7ec4.gif';
    setTimeout(() => {
        miniMe.src = 'https://piskel-imgstore-b.appspot.com/img/67f36deb-05e6-11f0-8b31-adb355fe7ec4.gif';
    }, 400);
})

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener("mouseover", event => {
        miniMe.src = 'https://piskel-imgstore-b.appspot.com/img/f627577a-05e6-11f0-bac0-adb355fe7ec4.gif';
    });

    menuLink[i].addEventListener("mouseout", event => {
        miniMe.src = 'https://piskel-imgstore-b.appspot.com/img/67f36deb-05e6-11f0-8b31-adb355fe7ec4.gif';
    });
}
});
