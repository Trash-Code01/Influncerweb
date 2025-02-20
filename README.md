🎩 Vintage Vibes with Modern Motion ✨
A retro-inspired website infused with cutting-edge animations, blending nostalgic aesthetics with buttery-smooth interactions. Built using GSAP, ScrollTrigger, and Lenis, this project offers an immersive experience, perfect for portfolios, creative agencies, and experimental web projects.

Live Demo https://trash-code01.github.io/Influncerweb/Index.html

![image](https://github.com/user-attachments/assets/96f8f95f-7a30-4565-a87f-9c0a2de253dc)

![image](https://github.com/user-attachments/assets/2e7495fa-31ec-4c24-892c-b0f3bb41ef77)

⚡ Features
🔹 Lenis-powered smooth scrolling
🔹 Custom animated cursor using GSAP tracking
🔹 Scroll-triggered animations for:

Navbar fade-in
Hero section bounce effects
Grid element staggered reveals
Contact section parallax movements
Horizontal infinite-scroll image gallery
Hover-triggered scale animations

🎯 GSAP Animation Highlights

// Custom Cursor Animation
const customCursor = () => {
  const cursor = document.getElementById("cursor");
  document.body.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.2,
      ease: "power1.inOut"
    });
  });
};

// Scroll-triggered Hero Animation
gsap.to(".lookbook-hero", {
  scrollTrigger: {
    trigger: ".lookbook-hero",
    start: "top center",
    scrub: true
  },
  scale: 1.4,
  duration: 1
});

🛠 Installation
Clone the repository
git clone https://github.com/yourusername/vintage-modern-website.git

🌟 Built With
✅ GSAP - High-performance animations
✅ Lenis - Smooth scrolling library
✅ ScrollTrigger - Scroll-based animations

🌍 SEO & Performance Optimization
✅ Semantic HTML5 markup
✅ Responsive images with lazy loading
✅ Optimized smooth scrolling for better UX metrics
✅ Reduced CLS (Cumulative Layout Shift) via proper animation sequencing

🤝 Contributing
Pull requests are welcome! If you're making major changes, please open an issue first to discuss your ideas.

📜 License
MIT © Laraib Asjad
