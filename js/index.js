// Your code goes here

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
        TweenMax.to(link, .1, {scale: 1.2, color: 'orange', ease:Ease.easeOut});
        // e.target.style.borderBottom = "2px solid black";
    });
    // Using 'mouseout' event
    link.addEventListener("mouseout", e => {
        TweenMax.to(link, .1, {scale: 1, color: 'black', ease:Ease.easeOut});
        // e.target.style.borderBottom = "none";
    });
});

const randRGB = () => {
    let red = Math.floor(Math.random() * Math.floor(255));
    let green = Math.floor(Math.random() * Math.floor(255));
    let blue = Math.floor(Math.random() * Math.floor(255));
    return `${red}, ${green}, ${blue}`;
}
    // Using 'mouseover' event
window.addEventListener("scroll", e => {
    TweenMax.to(".main-navigation", .5, {backgroundColor: `rgba(${randRGB()}, 1)`, opacity: 1, ease:Ease.easeInOut});
    TweenMax.to("html", .5, {backgroundColor: `rgba(${randRGB()}, .6)`, ease:Ease.easeInOut});
    TweenMax.to("footer", .5, {backgroundColor: `rgba(${randRGB()}, .6)`, ease:Ease.easeInOut});
});







// Methods to explore: 
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `select`
// * [ ] `dblclick`    


// Methods Used:
// * [ ] `load`
// * [ ] `mouseover`
// * [ ] `mouseout`
// * [ ] `scroll`





// Ideas:

// 1. Create a form that, when submitted (and filled out), sends an alert to confirm the submission.
//    Example ===> Alert: Confirm submit? Y/N => Thanks for your interest, Laurence! 
