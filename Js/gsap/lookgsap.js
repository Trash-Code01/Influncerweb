
document.addEventListener('DOMContentLoaded', () => {
const lenis = new Lenis({
    autoRaf: true,
    easing: "easeInSine",
  });
  gsap.registerPlugin(ScrollTrigger);

  const customCursor = () => {
    const cursor = document.getElementById("cursor");
    const body = document.body;
  
    body.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power1.inOut",
      });
    });
  };
  customCursor();

  const lookbookanimation = () => {
    let tl = gsap.timeline();
    tl.from("#nav .nav-link li, #test", {
        y: -50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        stagger: 0.1, // Animates each element sequentially
      });
    
     const headingAnimations = [
        { id: "heading1", y: -100, delay: 0 },
        { id: "heading2", y: -100, delay: 0 },
      ];

      headingAnimations.forEach(({ id, y, delay }) => {
        tl.from(`#${id}`, {
          y,
          opacity: 0,
          scale: 0.5,
          duration: 1.2,
          delay,
          ease: "bounce.out"
        });
      });
  
    gsap.registerPlugin(ScrollTrigger);

const lookbookHero = document.querySelectorAll(".lookbook-hero");
lookbookHero.forEach(hero => {
    gsap.to(hero, {
        scrollTrigger: {
            trigger: hero,
        start: "top center",
        end: "bottom center",
        scrub: true,
        // markers: true, // Enable for debugging
    },
    scale: 1.4,
    duration: 1,
    ease: "none"
        });
    });
     // Animate grid sections
     const gridSections = document.querySelectorAll('.gridele');

     gridSections.forEach((grid, index) => {
         gsap.from(grid, {
             y: 100, // Start from below
             opacity: 0,
             duration: 1,
             delay: 0.3,
             scale: 0.5,
             ease: "power2.out",
             scrollTrigger: {
                 trigger: grid,
                 start: "top 80%",
                 end: "top 20%",
                 scrub: 1, // Smooth scrubbing effect
                 toggleActions: "play reverse play reverse",
                 // markers: true, // Remove this in production
             }
         });
     });
     // ... existing code ...

// Animation for the "Let's Talk" section
gsap.from("#letsget", {
    scrollTrigger: {
      trigger: "#letsget",
      start: "top center+=100",
      end: "top center-=100",
      scrub: 1,
      toggleActions: "play reverse play reverse"
    },
    scale: 0.5,
    opacity: 0,
    duration: 1.5,
    delay: 0.4,
    ease: "power2.out"
  });
  }

  lookbookanimation();

  // lookbook animation page 

  const lookAnimation = () => {
    // Define the animation configuration for each image
    const imageAnimations = [
      { id: "look1", x: -50, delay: 0.4 },
      { id: "look2", x: 50, delay: 0.4 },
      // Add more images as needed
    ];
  
    // Apply animations to each image
    imageAnimations.forEach(({ id, x, delay }) => {
      gsap.from(`#${id}`, {
        x,
        opacity: 0,
        duration: 1,
        delay,
        scrollTrigger: {
          trigger: `#${id}`,
          scroller: "body",
          toggleActions: "play reset play reset"
        }
      });
    });
  }
  lookAnimation();


  const upAnimations = [
    { id: "centercont", y: 50, delay: 0.4 },
    { id: "contact", y: 50, delay: 0.4 }
  ];
  
  upAnimations.forEach(({ id, y, delay }) => {
    gsap.from(`#${id}`, {
      y,
      opacity: 0,
      duration: 1,
      delay,
      scrollTrigger: {
        trigger: `#${id}`,
        scroller: "body",
        toggleActions: "play reset play reset",
        // markers: true, // Uncomment for debugging
        start: "top 80%"
      },
    });
  });

  const rightAnimations = [
    { id: "rightcont", x: 50, delay: 0.4 },
    { id: "rightcont2", x: -50, delay: 0.4 },
    { id: "rightcont3", x: 50, delay: 0.4 },
    { id: "rightcont4", x: -50, delay: 0.4 },
    { id: "rightcont5", x: 50, delay: 0.4 },
    { id: "rightcont6", x: 50, delay: 0.4 },
    { id: "rightcont7", x: -50, delay: 0.4 },
    { id: "rightcont8", x: 50, delay: 0.4 },
    { id: "leftpt2", x: -50, delay: 0.4 },
    { id: "rightpt2", x: 50, delay: 0.4 },
    // Add more items as needed
  ];
  
  rightAnimations.forEach(({ id, x, delay }) => {
    gsap.from(`#${id}`, {
      x,
      opacity: 0,
      duration: 1,
      delay,
      scrollTrigger: {
        trigger: `#${id}`,
        scroller: "body",
        toggleActions: "play reset play reset",
        // markers: true, // Uncomment for debugging
        start: "top 80%"
      },
    });
  });


  const downAnimations = [
    { id: "downcont", y: 100, delay: 0.4 },
    { id: "downcont2", y: 100, delay: 0.4 },
    { id: "downcont3", y: 100, delay: 0.4 },
    { id: "downcont4", y: 50, delay: 0.4 },
    { id: "downcont5", y: -60, delay: 0.4 },
    // Add more items as needed
  ];
  
  downAnimations.forEach(({ id, y, delay }) => {
    gsap.from(`#${id}`, {
      y,
      opacity: 0,
      duration: 1,
      delay,
      scrollTrigger: {
        trigger: `#${id}`,
        scroller: "body",
        toggleActions: "play reset play reset",
        // markers: true, // Uncomment for debugging
        start: "top 80%"
      },
    });
  });
  
   const shootpageanimation = () => {
// Animation for shoot heading
const shootHeading = document.querySelector("#shootheading");
shootHeading.addEventListener("mouseenter", () => {
  gsap.to("#shootheading", {
    scale: 0.5,
    duration: 1.5,
    ease: "bounce.out"
  });
});

shootHeading.addEventListener("mouseleave", () => {
  gsap.to("#shootheading", {
    scale: 1,
    duration: 1.5,
    ease: "bounce.out"
  });
});
   }
   shootpageanimation();
  
});

gsap.registerPlugin(ScrollTrigger);

const aboutpageanimation = () => {
  // Select the image gallery
  const gallery = document.querySelector("#image-gallery");
  const images = gsap.utils.toArray("#image-gallery img");

  // GSAP Horizontal Loop Function
  function horizontalLoop(elements, config) {
    config = config || {};
    const tl = gsap.timeline({
      repeat: -1,
      paused: config.paused,
      defaults: { ease: "none" },
    });
    const totalWidth = elements.length * elements[0].offsetWidth; // Total width of all images

    tl.to(elements, {
      x: -totalWidth / 2, // Scroll the entire width
      duration: totalWidth / 100, // Adjust speed
      ease: "linear",
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth), // Seamless looping
      },
    });

    return tl;
  }

  // Create the loop animation
  const horizontalScroll = horizontalLoop(images, { paused: true });

  // Set up ScrollTrigger for the gallery
  ScrollTrigger.create({
    trigger: "#image-gallery",
    start: "top center",
    end: "bottom center",
    onEnter: () => horizontalScroll.play(),
    onLeave: () => horizontalScroll.pause(),
    onEnterBack: () => horizontalScroll.play(),
    onLeaveBack: () => horizontalScroll.pause(),
  });

  // image animation
  const imageAnimations = [
    { id: "second", x: -50, delay: 0.2 },
    { id: "third", x: 50, delay: 0.2 },
    { id: "first", x: 50, delay: 0.2 },
    { id: "fourth", x: -50, delay: 0.4 },
    { id: "fifth", x: 50, delay: 0.4 },
    { id: "sixth", x: -50, delay: 0.4 },
    { id: "seventh", x: 50, delay: 0.4 },
    { id: "eighth", x: -50, delay: 0.4 },
    { id: "ninth", x: 50, delay: 0.4 }
  ];

  imageAnimations.forEach(({ id, x, delay }) => {
    gsap.from(`#${id}`, {
      x,
      opacity: 0,
      duration: 1,
      delay,
      scrollTrigger: {
        trigger: `#${id}`,
        scroller: "body",
        toggleActions: "play reset play reset",
      },
    });
  });

 // ... existing code ...
 const scaleElements = [
  { class: "imgsacleup" },
  { class: "imgsacleup2" },
  // Add more elements here as needed, for example:
  // { class: "imgsacleup3" },
  // { class: "imgsacleup4" },
];

scaleElements.forEach(({ class: className }) => {
  const element = document.querySelector(`.${className}`);
  if (element) {
    element.addEventListener("mouseenter", () => {
      gsap.to(`.${className}`, {
        scale: 1.1,
        duration: 0.5,
        ease: "none"
      });
    });

    element.addEventListener("mouseleave", () => {
      gsap.to(`.${className}`, {
        scale: 1,
        duration: 0.5,
        ease: "none"
      });
    });
  }
});
// ... existing code ...
}
// Make sure to call the function
aboutpageanimation();