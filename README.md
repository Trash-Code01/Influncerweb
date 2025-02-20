🎩 Vintage Vibes with Modern Motion ✨
A retro-inspired website infused with cutting-edge animations, blending nostalgic aesthetics with buttery-smooth interactions. Built using GSAP, ScrollTrigger, and Lenis, this project offers an immersive experience, perfect for portfolios, creative agencies, and experimental web projects.

🚀 Live Demo

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
javascript
Copy
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
Clone the repository:

bash
Copy
git clone https://github.com/yourusername/vintage-modern-website.git
Install dependencies:

bash
Copy
npm install
Start the development server:

bash
Copy
npm run dev
🌟 Built With
✅ GSAP - High-performance animations
✅ Lenis - Smooth scrolling library
✅ ScrollTrigger - Scroll-based animations

🎨 Customization Tips
🔸 Modify animation timing inside lookbookanimation()
🔸 Adjust ScrollTrigger positions:

javascript
Copy
start: "top 80%", // When animation starts
end: "top 20%"   // When animation completes
🔸 Experiment with GSAP eases:

"bounce.out" for playful effects
"power2.inOut" for smooth transitions
🌍 SEO & Performance Optimization
✅ Semantic HTML5 markup
✅ Responsive images with lazy loading
✅ Optimized smooth scrolling for better UX metrics
✅ Reduced CLS (Cumulative Layout Shift) via proper animation sequencing

🤝 Contributing
Pull requests are welcome! If you're making major changes, please open an issue first to discuss your ideas.

📜 License
MIT © Laraib Asjad

