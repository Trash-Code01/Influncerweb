// gsap code
// lenis scroll
// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
  easing: "easeInSine",
});
gsap.registerPlugin(ScrollTrigger);

const homeanimation = () => {
  let tl = gsap.timeline();

  tl.from("#nav .nav-link li, #test", {
    y: -50,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    stagger: 0.1, // Animates each element sequentially
  });
  tl.from(".landing-content #gaspleft", {
    x: -200,
    opacity: 0,
    duration: 1,
    delay: 0.1,
    stagger: 0.1,
  });

  // Enhanced heading animations with bounce and scale
  const headings = ["#heading1", "#heading2", "#heading3", "#heading4",];

  headings.forEach((heading, index) => {
    // Initial scroll trigger animation with bounce
    gsap.from(heading, {
      y: -100,
      opacity: 0,
      scale: 0.5,
      duration: 1.2,
      delay: 0.1 * index,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: heading,
        scroller: "body",
        start: "top 75%",
        end: "top 25%",
        toggleActions: "play reset play reset",
      },
    });

    // Mouse interactions with bouncy scale effect
    const element = document.querySelector(heading);

    element.addEventListener("mouseenter", () => {
      gsap.to(element, {
        scale: 1.2,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)", // Bouncy elastic effect
        transformOrigin: "center center",
      });
    });

    element.addEventListener("mouseleave", () => {
      gsap.to(element, {
        scale: 1,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)", // Bouncy return animation
        transformOrigin: "center center",
      });
    });

    element.style.cursor = "pointer";
  });

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
    { id: "secondImage", x: -50, delay: 0.2 },
    { id: "thirdImage", x: 50, delay: 0.2 },
    { id: "firstImage", x: 50, delay: 0.2 },
    { id: "fourthImage", x: -50, delay: 0.4 },
    { id: "fifthImage", x: 50, delay: 0.4 },
    { id: "sixthImage", x: -50, delay: 0.4 },
    { id: "seventhImage", x: 50, delay: 0.4 },
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
  gsap.from("#mailcard", {
    y: -50,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    scrollTrigger: {
      trigger: "#mailcard",
      scroller: "body",
      toggleActions: "play reset play reset",
    },
  });

  // left right animation

  const lefrighttanimation = [
    { id: "left", x: -50, delay: 0.4 },
    { id: "leftpt2", x: -50, delay: 0.4 },
    { id: "right", x: 50, delay: 0.4 },
    { id: "rightpt2", x: 50, delay: 0.4 },
  ];
  lefrighttanimation.forEach(({ id, x, delay }) => {
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

  // moving up and down animation

  const UpDownanimation = [
    { class: "down", y: -50, delay: 0.4 },
    { class: "up", y: 50, delay: 0.4 },
    { class: "talk", y: 50, delay: 1.4 },
  ];

  UpDownanimation.forEach(({ class: value, y, delay }) => {
    gsap.from(`.${value}`, {
      // Remove extra parenthesis, add comma
      y,
      opacity: 0,
      duration: 1,
      delay,
      scrollTrigger: {
        trigger: `.${value}`,
        scroller: "body",
        toggleActions: "play reset play reset",
      },
    }); // Remove extra parenthesis
  }); // Remove trailing comma

  // video animation
  const videoanimation = [
    { id: "vid1", x: -50, delay: 0.4 },
    { id: "vid2", x: 50, delay: 0.4 },
  ];
  videoanimation.forEach(({ id, x, delay }) => {
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

  // Scale up animation for elements with .scaleup class
  const scaleUpElements = document.querySelectorAll(".scaleup");

  scaleUpElements.forEach((element) => {
    // Initial scroll trigger animation
    gsap.from(element, {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        scroller: "body",
        start: "top 75%",
        end: "top 25%",
        toggleActions: "play reset play reset",
      },
    });

    // Mouse hover animations with elastic effect
    element.addEventListener("mouseenter", () => {
      gsap.to(element, {
        scale: 1.2,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
        transformOrigin: "center center",
      });
    });

    element.addEventListener("mouseleave", () => {
      gsap.to(element, {
        scale: 1,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
        transformOrigin: "center center",
      });
    });
  });
};
homeanimation();


// custom cursor code
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
