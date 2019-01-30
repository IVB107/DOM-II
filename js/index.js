const randRGB = () => {
    let red = Math.floor(Math.random() * Math.floor(255));
    let green = Math.floor(Math.random() * Math.floor(255));
    let blue = Math.floor(Math.random() * Math.floor(255));
    return `${red}, ${green}, ${blue}`;
}

const header = document.querySelector("nav");
// Using 'load' event
window.addEventListener("load", e => {
    TweenMax.from(".logo-heading", 1, {y: -200, rotation: -90, ease:Bounce.easeOut});
    TweenMax.staggerFrom(".nav-link", 2, {x: 1000, opacity: .5, rotation:1440, ease:Elastic.easeOut.config(1, 0.9), delay: .8}, 0.2);
});

const navLink = document.querySelectorAll("nav a");
navLink.forEach(link => {
// Using 'mouseover' event
    link.addEventListener("mouseover", e => {
        // Prevent Default Method
        e.preventDefault();
        TweenMax.to(link, .1, {scale: 1.2, color: `rgb(${randRGB()})`, ease:Ease.easeOut});
        // e.target.style.borderBottom = "2px solid black";
    });
// Using 'mouseout' event
    link.addEventListener("mouseout", e => {
        TweenMax.to(link, .1, {scale: 1, color: 'black', ease:Ease.easeOut});
        // e.target.style.borderBottom = "none";
    });
});

// Using 'scroll' event
window.addEventListener("scroll", e => {
    TweenMax.to(".main-navigation", .5, {backgroundColor: `rgba(${randRGB()}, 1)`, opacity: 1, ease:Ease.easeInOut});
    TweenMax.to("html", .5, {backgroundColor: `rgba(${randRGB()}, .6)`, ease:Ease.easeInOut});
});

const home = document.querySelector('.home');
// Using 'click' event
home.addEventListener('click', e => {
    e.target.style.backgroundColor = `rgba(${randRGB()}, .6)`;
});

// Using 'keydown' event
window.addEventListener('keydown', e => {
    const elements = document.getElementsByTagName("*");
    e.key === 'Shift' ? TweenMax.to(elements, .5, {backgroundColor: "none", ease:Ease.easeInOut}) : null;
});

// Using 'dblclick' event
document.addEventListener('dblclick', e => {
    TweenMax.to(e.target, .8, {scale: 0, rotation: 2000, ease:Ease.easeOut});
});

// Using 'resize' event
window.addEventListener('resize', e => {
    document.querySelector(".intro img").src = `https://i.ytimg.com/vi/-prC9FdBcW8/maxresdefault.jpg`;
    document.querySelector(".intro h2").textContent = 'Struggle Bus';
    document.querySelector(".container h1").textContent = 'Burn Baby, Burn!';
});

// Using 'mouseleave' event
const letsGo = document.querySelector('#letsGo');
letsGo.addEventListener('mouseleave', e => {
    letsGo.textContent = "Let's Go... To Meet Satan!";
    e.target.style.backgroundColor = 'black';
    e.target.style.color = 'red';
});

// Using 'auxclick' event
document.addEventListener('auxclick', e => {
    console.log('AUXCLICKED WOW!!!!!');
    document.querySelector('.map').src = `http://www.quickmeme.com/img/dc/dcb1690c2cb99d7e4ab6ea5c0e153961965da7eb87d264d86e8093c2b4df7b3a.jpg`;
});

// Stop Propagation
const logo = document.querySelector('.logo-heading');
logo.addEventListener('mousedown', (e) => {
    e.stopPropagation();
    console.log(e);
});

