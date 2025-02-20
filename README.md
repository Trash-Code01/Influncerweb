# 🎩 Vintage Vibes with Modern Motion ✨

A retro-styled website infused with cutting-edge animations using GSAP, ScrollTrigger, and Lenis. Combines nostalgic design with buttery-smooth interactions for a unique user experience. Perfect for portfolios, creative agencies, or experimental projects.

![{5F3373F6-7CB2-403B-8D40-E0C713910CCF}](https://github.com/user-attachments/assets/d638c1ba-840f-4388-99a0-8da8277d4f3f)



![{380D5D55-3593-497B-983B-D6631F69B30B}](https://github.com/user-attachments/assets/95d0c1a5-fb2c-4880-b7d8-7ca783018661)


Try out here the Demo https://trash-code01.github.io/Influncerweb/Index.html

## 🚀 Features
- **Smooth Scrolling** powered by Lenis
- **Custom Animated Cursor** with GSAP tracking
- Scroll-triggered animations for:
  - Navbar fade-in
  - Hero section bounce effects
  - Grid element staggered reveals
  - Contact section parallax movements
- Horizontal infinite-scroll image gallery
- Hover-triggered scale animations

## ⚡ Code Highlight: GSAP Magic
```javascript
// Custom cursor animation
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

// Scroll-triggered hero animation
gsap.to(".lookbook-hero", {
  scrollTrigger: {
    trigger: hero,
    start: "top center",
    scrub: true
  },
  scale: 1.4,
  duration: 1
});

🛠️ Installation
Clone repo

bash
Copy
git clone https://github.com/yourusername/vintage-modern-website.git
Install dependencies

bash
Copy
npm install
Start development server

bash
Copy
npm run dev
🌟 Technologies
GSAP
Lenis
ScrollTrigger

🎨 Customization Tips
Modify animation timing in lookbookanimation()

Adjust scroll trigger positions:

javascript
Copy
start: "top 80%", // When animation starts
end: "top 20%"   // When animation completes
Experiment with GSAP eases ("bounce.out", "power2.inOut")

🌍 SEO Optimization
Semantic HTML5 markup

Responsive images with lazy loading

Smooth scroll behavior for better UX metrics

Reduced CLS (Cumulative Layout Shift) via proper animation sequencing

🤝 Contributing
Pull requests welcome! For major changes, please open an issue first.

📜 License
MIT © laraib asjad
