// Your code goes here

const header = document.querySelector("nav");
window.addEventListener("load", e => {
    TweenMax.from(".logo-heading", 1, {y: -200, rotation: -90, ease:Bounce.easeOut});
    TweenMax.staggerFrom(".nav-link", 2, {x: 1000, opacity: .5, rotation:1440, ease:Elastic.easeOut.config(1, 0.9), delay: .8}, 0.2);
});

const navLink = document.querySelectorAll("nav a");
navLink.forEach(link => {
    link.addEventListener("mouseover", e => {
        TweenMax.to(link, .1, {scale: 1.2, color: 'orange', ease:Ease.easeOut});
        // e.target.style.borderBottom = "2px solid black";
    });
    link.addEventListener("mouseout", e => {
        TweenMax.to(link, .1, {scale: 1, color: 'black', ease:Ease.easeOut});
        // e.target.style.borderBottom = "none";
    });
});







// Methods to explore: 
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`    


// Methods Used:
// * [ ] `load`
// * [ ] `mouseover`
// * [ ] `mouseout`




// Ideas:

// 1. Create a form that, when submitted (and filled out), sends an alert to confirm the submission.
//    Example ===> Alert: Confirm submit? Y/N => Thanks for your interest, Laurence! 
