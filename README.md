# 🎩 Vintage Vibes with Modern Motion ✨

A retro-styled website infused with cutting-edge animations using GSAP, ScrollTrigger, and Lenis. Combines nostalgic design with buttery-smooth interactions for a unique user experience. Perfect for portfolios, creative agencies, or experimental projects.

![{BC0C13C8-A154-42E1-8BEA-9E538832A708}](https://github.com/user-attachments/assets/5cc6459c-2ef4-4efe-81b1-11180a642524)


![{0E672432-C0B2-445B-8B58-3C10DF1155EF}](https://github.com/user-attachments/assets/d9971389-d9a8-4415-bb58-61ab19801de4)




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
