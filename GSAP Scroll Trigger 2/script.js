gsap.from("#page1 #box", {
    scale: 0,
    delay: 1,
    duartion: 2,
    rotate: 360
})

// gsap.from("#page2 #box", {
//     scale: 0,
//     delay: 1,
//     duartion: 2,
//     rotate: 360,
//     // To perform animation when we scroll to that specific page
//     // scrollTrigger: "#page2 #box" //normal properties

//     /* Scroll Trigger - specific properties in depth */
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers: true,
//         start: "top 60%"
//     }
// })

// gsap.from("#page2 h1", {
//     opacity: 0,
//     duration: 2,
//     x:500,
//     scrollTrigger: {
//         trigger: "#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// })

// gsap.from("#page2 h2", {
//     opacity: 0,
//     duration: 2,
//     x:-500,
//     scrollTrigger: {
//         trigger: "#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// })

gsap.from("#page2 #box", {
    scale:0,
    opacity: 0,
    duration: 1,
    rotate: 720,
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller:"body",
        markers: true,
        start:"top 60%",
        end: "top 30%",
        // we need to make it animate when we scroll, so show animation smoothly we use Scrub
        scrub:2

    }
})