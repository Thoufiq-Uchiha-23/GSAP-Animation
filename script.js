// gsap.to("#box1", {
//     x: 700,
//     duration: 2,
//     delay: 1,
//     rotate: 360, 
//     backgroundColor: "blue",
//     borderRadius:"50%"
// })

// gsap.from("#box1", {
//     x: 700,
//     duration: 2,
//     delay: 1
// })

// gsap.to("#box2", {
//     x: 500,
//     y: 200,
//     duration: 2,
//     delay: 1
// })

// On text
gsap.from("h1", {
    opacity:0,
    duration:1,
    y:30,
    delay:1,
    stagger:0.4
})

// On #box
gsap.to("#box", {
    x:500,
    duration:2,
    delay:1,
    rotate:360,
    // 1 means 2t, 2 means repeats 3t, -1 means repeats infinite
    repeat:-1,
    // to go and come back we use yoyo
    yoyo: true
})

// Animating 3 boxes
// gsap.to("#box1", {
//     x:700,
//     duration:1.5,
//     delay:1,
//     rotate:360
// })

// // to delay boxes we calc duration and delay
// gsap.to("#box2", {
//     x:700,
//     backgroundColor: "yellow",
//     duration:1.5,
//     delay:2.5
// })

// gsap.to("#box3", {
//     x:700,
//     scale:0.5,
//     borderRadius: "50%",
//     duration:1.5,
//     delay: 4
// })

// GSAP Timeline
// This makes the elements to move Synchronously
// one by one without calc it's delay
// var tl = gsap.timeline()

// tl.to("#box1", {
//     x:700,
//     duration:1.5,
//     delay:1
// })

// tl.to("#box2", {
//     x:700,
//     duration:1.5,
//     delay:1,
//     backgroundColor: "yellow"
// })
// tl.to("#box3", {
//     x:700,
//     duration:1.5,
//     delay:1,
//     borderRadius: "50%"
// })

// Animating Navbar
var tl = gsap.timeline()

tl.from("h2", {
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5
})

tl.from("h4", {
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger: 0.3
})