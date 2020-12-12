//HERO ANIMATION
const hero = document.querySelector(".header__hero");
const slider = document.querySelector(".slider");
const headinger = document.querySelector(".heading-secondary");


const tl = new TimelineMax();
tl.fromTo(
    hero,
    1, {
        height: '0%'
    }, {
        height: '75%',
        ease: Power2.easeInOut
    }
).fromTo(
    hero,
    1.2, {
        width: '100%'
    }, {
        width: '80%',
        ease: Power2.easeInOut
    }
).fromTo(
    slider,
    1.2, {
        x: '-100%'
    }, {
        x: '0%',
        ease: Power2.easeInOut
    }, '-=1.2');



    let tl2 = gsap.timeline( {
        scrollTrigger: {
        trigger: '.heading-secondary-2',
        start: "top center",
         // markers: true,
        toggleActions: 'restart pause restart reverse'
        }
    });
    tl2.to('.heading-secondary-2', {
        color: 'black',
        translateY: 1, 
        duration: .03,
        ease: Power2.easeInOut,
    });
    
    let tl3 = gsap.timeline( {
        scrollTrigger: {
        // markers: true,
        trigger: '.heading-secondary-3',
        start: "top center",
        toggleActions: 'restart pause restart reverse'
        }
    });
    tl3.to('.heading-secondary-2', {
        color: 'transparent',
        translateY: 1, 
        duration: .03,
        ease: Power2.easeInOut
    }).to('.heading-secondary-3', {
        color: 'black',
        translateY: 1, 
        duration: .03,
        ease: Power2.easeInOut
    })


   let tl4 = gsap.timeline( {
        scrollTrigger: {
        // markers: true,
        trigger: '.heading-secondary-4',
        start: "top center",
        toggleActions: 'restart pause restart reverse'
        }
    });
    tl4.to('.heading-secondary-3', {
        color: 'transparent',
        translateY: 1, 
        duration: .03,
        ease: Power2.easeInOut
    }).to('.heading-secondary-4', {
        color: 'black',
        translateY: 1, 
        duration: .03,
        ease: Power2.easeInOut
    })

    let tl5 = gsap.timeline( {
        scrollTrigger: {
        // markers: true,
        trigger: '.heading-secondary-5',
        start: "top center",
        toggleActions: 'restart pause restart reverse'
        }
    });
    tl5.to('.heading-secondary-4', {
        color: 'transparent',
        translateY: 1, 
        duration: .03,
        ease: Power2.easeInOut
    }).to('.heading-secondary-5', {
        color: 'black',
        translateY: 1, 
        duration: .03,
        ease: Power2.easeInOut
    })

    let tl6 = gsap.timeline( {
        scrollTrigger: {
        // markers: true,
        trigger: '.heading-secondary-6',
        start: "top center",
        toggleActions: 'restart pause restart reverse'
        }
    });
    tl6.to('.heading-secondary-5', {
        color: 'transparent',
        translateY: 1, 
        duration: .03,
        ease: Power2.easeInOut
    }).to('.heading-secondary-6', {
        color: 'black',
        translateY: 1, 
        duration: .03,
        ease: Power2.easeInOut
    })

    let tl7 = gsap.timeline( {
        scrollTrigger: {
        // markers: true,
        trigger: '.heading-secondary-7',
        start: "top center",
        toggleActions: 'restart pause restart reverse'
        }
    });
    tl7.to('.heading-secondary-6', {
        color: 'transparent',
        translateY: 1, 
        duration: .03,
        ease: Power2.easeInOut
    }).to('.heading-secondary-7', {
        color: 'black',
        translateY: 1, 
        duration: .03,
        ease: Power2.easeInOut
    })

    let tl8 = gsap.timeline( {
        scrollTrigger: {
        // markers: true,
        trigger: '.heading-secondary-8',
        start: "top center",
        toggleActions: 'restart pause restart reverse'
        }
    });
    tl8.to('.heading-secondary-7', {
        color: 'transparent',
        translateY: 1, 
        duration: .03,
        ease: Power2.easeInOut
    }).to('.heading-secondary-8', {
        color: 'black',
        translateY: 1, 
        duration: .03,
        ease: Power2.easeInOut
    })