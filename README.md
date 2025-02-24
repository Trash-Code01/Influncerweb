# 🎩 Vintage Vibes with Modern Motion ✨  

**A retro-inspired website infused with cutting-edge animations**, blending nostalgic aesthetics with buttery-smooth interactions. Built using GSAP, ScrollTrigger, and Lenis for an immersive experience. Perfect for portfolios, creative agencies, and experimental web projects.  

[![Live Demo](https://img.shields.io/badge/Live_Demo-Explore-FF4088?style=for-the-badge)](https://trash-code01.github.io/Influncerweb/Index.html)  

---

## 🖼 Preview  
![Hero Section](https://github.com/user-attachments/assets/96f8f95f-7a30-4565-a87f-9c0a2de253dc)  
![Gallery Section](https://github.com/user-attachments/assets/2e7495fa-31ec-4c24-892c-b0f3bb41ef77)  

---

## ⚡ Features  
🔹 **Lenis-powered** butter-smooth scrolling  
🔹 **Custom GSAP-animated cursor** with real-time tracking  
🔹 **Scroll-triggered magic**:  
   - Navbar fade-in transitions  
   - Hero section bounce effects  
   - Grid element staggered reveals  
   - Contact section parallax movements  
   - Infinite horizontal image scroll  
🔹 **Hover interactions**: Element scale animations  

---

## 🎯 GSAP Animation Toolkit  
### Custom Cursor  
```javascript
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

🛠 Setup Guide
Clone the repo:
git clone https://github.com/yourusername/vintage-modern-website.git

🌟 Tech Stack
✅ GSAP - Professional-grade animations
✅ Lenis - Silk-smooth scrolling engine
✅ ScrollTrigger - Scroll-driven animation orchestration

🌍 Performance & SEO
✅ Semantic HTML5 structure
✅ Lazy-loaded responsive images
✅ CLS-optimized animation sequencing
✅ Device-agnostic smooth scrolling

🤝 Contribute
We welcome pull requests!

Fork the repository

Create a feature branch (git checkout -b feature/YourFeature)

Commit changes (git commit -m 'Add revolutionary feature')

Push to branch (git push origin feature/YourFeature)

Open a Pull Request

📜 License
MIT © Laraib Asjad

⭐ Star this repo if it makes your developer heart flutter!
