function marqueAnimation() {
    window.addEventListener("wheel", function(dets) {
        if(dets.deltaY>0) {
            gsap.to(".marque", {
                transform:"translateX(-200%)",
                // -1 here means infinity
                repeat:-1,
                duration:4,
                ease: "none"
            })
            gsap.to(".marque img", {
                rotate: 180
            })
        }else {
            gsap.to(".marque", {
                transform:"translateX(0%)",
                // -1 here means infinity
                repeat:-1,
                duration:4,
                ease: "none"
            })
    
            gsap.to(".marque img", {
                rotate: 0
            })
        }
    })
}

marqueAnimation()