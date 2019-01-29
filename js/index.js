// Your code goes here

const header = document.querySelector("nav");
window.addEventListener("load", e => {
    TweenMax.from(".logo-heading", 1, {y: -200, rotation: -90, ease:Bounce.easeOut});
    TweenMax.staggerFrom(".nav-link", 3, {x: 1000, opacity: .5, rotation:1440, ease:Elastic.easeOut.config(1, 0.9), delay: 1}, 0.2);
});









// Methods to explore: 
// * [ ] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`    


// Ideas:

// 1. Create a form that, when submitted (and filled out), sends an alert to confirm the submission.
//    Example ===> Alert: Confirm submit? Y/N => Thanks for your interest, Laurence! 
