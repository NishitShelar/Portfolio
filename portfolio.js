gsap.registerPlugin(ScrollTrigger);

// Loader Animation - Continuous sliding
document.querySelectorAll(".loader-row").forEach((row, index) => {
  const speed = parseFloat(row.dataset.speed);
  gsap.set(row, { x: "-100%" });
  
  // Continuous sliding animation
  gsap.to(row, {
    x: speed > 0 ? "100%" : "-300%",
    duration: 3,
    ease: "none",
    repeat: -1,
    delay: index * 0.2
  });
});

// Seamless transition to hero
gsap.timeline({ delay: 3 })
  .to(".loader-row", {
    scale: 0.8,
    opacity: 0.6,
    duration: 1,
    ease: "power2.inOut"
  })
  .to("#loader", {
    opacity: 0,
    duration: 1,
    onComplete: () => {
      document.getElementById("loader").style.display = "none";
    }
  }, "-=0.5")
  .from(".hero-bg .bg-img", {
    scale: 0,
    rotation: 180,
    opacity: 0,
    duration: 1.5,
    stagger: 0.2,
    ease: "back.out(1.7)"
  }, "-=0.8");

// Hero Parallax
gsap.set(".hero-text", { y: 100, opacity: 0 });
gsap.to(".hero-text", {
  y: 0,
  opacity: 1,
  duration: 2,
  delay: 4,
  ease: "power3.out"
});

// Hero background parallax
document.querySelectorAll(".bg-layer").forEach(layer => {
  const speed = parseFloat(layer.dataset.speed);
  gsap.to(layer, {
    y: () => -window.innerHeight * speed,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
});

// Story Section - God Level Parallax
gsap.set(".story-layout", { y: 150, opacity: 0, scale: 0.8 });
gsap.set(".image-placeholder", { x: 100, opacity: 0, rotation: 10 });

ScrollTrigger.create({
  trigger: ".story",
  start: "top 80%",
  end: "bottom 20%",
  onEnter: () => {
    gsap.timeline()
      .to(".story-layout", {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out"
      })
      .to(".image-placeholder", {
        x: 0,
        opacity: 1,
        rotation: 0,
        duration: 1,
        ease: "back.out(1.7)"
      }, "-=0.8");
  }
});

// Story parallax layers - Multiple speeds for depth
document.querySelectorAll(".parallax-layer").forEach(layer => {
  const speed = parseFloat(layer.dataset.speed);
  gsap.to(layer, {
    y: () => -window.innerHeight * speed * 1.5,
    ease: "none",
    scrollTrigger: {
      trigger: ".story",
      start: "top bottom",
      end: "bottom top",
      scrub: 1 // Smooth scrub for buttery effect
    }
  });
});

// Individual parallax images with rotation and scale
document.querySelectorAll(".parallax-img").forEach((img, index) => {
  gsap.to(img, {
    y: () => -200 - (index * 50),
    rotation: () => (index % 2 === 0 ? 5 : -5),
    scale: () => 1.1 + (index * 0.05),
    ease: "none",
    scrollTrigger: {
      trigger: ".story",
      start: "top bottom",
      end: "bottom top",
      scrub: 2
    }
  });
});

// Contact Section
gsap.set(".contact-content", { y: 100, opacity: 0, scale: 0.9 });

ScrollTrigger.create({
  trigger: ".contact",
  start: "top 70%",
  onEnter: () => {
    gsap.to(".contact-content", {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "back.out(1.7)"
    });
  }
});

// Floating elements
document.querySelectorAll(".float-element").forEach((element, index) => {
  gsap.to(element, {
    y: () => -100 - (index * 30),
    rotation: () => (index % 2 === 0 ? 360 : -360),
    ease: "none",
    scrollTrigger: {
      trigger: ".contact",
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    }
  });
});

// Smooth scroll
gsap.to(window, {
  scrollTo: { y: 0, autoKill: false },
  duration: 0
});

// Gradient animations
gsap.to(".hero-text h1", {
  backgroundPosition: "200% center",
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "power2.inOut"
});

gsap.to(".story-text h2", {
  backgroundPosition: "200% center",
  duration: 4,
  repeat: -1,
  yoyo: true,
  ease: "power2.inOut"
});

// Contact background animation
gsap.to(".contact", {
  backgroundPosition: "200% center",
  duration: 8,
  repeat: -1,
  yoyo: true,
  ease: "power2.inOut"
});

// PROJECTS SECTION - God Level Parallax
gsap.set(".projects-content", { y: 100, opacity: 0 });
gsap.set(".project-card", { y: 150, opacity: 0, scale: 0.8, rotationY: 15 });
gsap.set(".additional-project", { x: -100, opacity: 0 });

// Projects parallax background
document.querySelectorAll(".projects-bg .parallax-layer").forEach(layer => {
  const speed = parseFloat(layer.dataset.speed);
  gsap.to(layer, {
    y: () => -window.innerHeight * speed * 2,
    rotation: () => speed * 10,
    ease: "none",
    scrollTrigger: {
      trigger: ".projects",
      start: "top bottom",
      end: "bottom top",
      scrub: 1.5
    }
  });
});

// Projects content entrance
ScrollTrigger.create({
  trigger: ".projects",
  start: "top 80%",
  onEnter: () => {
    gsap.timeline()
      .to(".projects-content", {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out"
      })
      .to(".project-card", {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "back.out(1.7)"
      }, "-=1")
      .to(".additional-project", {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.5");
  }
});

// Individual project card hover enhancements
document.querySelectorAll(".project-card").forEach(card => {
  const preview = card.querySelector(".card-preview");
  const bg = card.querySelector(".card-bg img");
  
  card.addEventListener("mouseenter", () => {
    gsap.timeline()
      .to(bg, {
        scale: 1.15,
        rotation: 2,
        duration: 0.8,
        ease: "power2.out"
      })
      .to(preview, {
        scale: 1.1,
        rotation: -3,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.4");
  });
  
  card.addEventListener("mouseleave", () => {
    gsap.timeline()
      .to(bg, {
        scale: 1,
        rotation: 0,
        duration: 0.8,
        ease: "power2.out"
      })
      .to(preview, {
        scale: 1,
        rotation: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.6");
  });
});

// Project cards parallax on scroll
document.querySelectorAll(".project-card").forEach((card, index) => {
  gsap.to(card, {
    y: () => -50 - (index * 20),
    rotation: () => (index % 2 === 0 ? 1 : -1),
    ease: "none",
    scrollTrigger: {
      trigger: ".projects",
      start: "top bottom",
      end: "bottom top",
      scrub: 2
    }
  });
});

// Section headers gradient animation
gsap.to(".section-header h2", {
  backgroundPosition: "200% center",
  duration: 4,
  repeat: -1,
  yoyo: true,
  ease: "power2.inOut"
});

// EXPERIENCE SECTION - Creative Timeline Animation
gsap.set(".experience-content", { y: 100, opacity: 0 });
gsap.set(".experience-card", { x: -200, opacity: 0, rotationY: -15 });
gsap.set(".timeline-dot", { scale: 0, rotation: 180 });
gsap.set(".timeline-line", { scaleY: 0, transformOrigin: "top center" });

// Experience floating elements parallax
document.querySelectorAll(".float-item").forEach((item, index) => {
  const speed = parseFloat(item.dataset.speed);
  gsap.to(item, {
    y: () => -100 * speed,
    x: () => (index % 2 === 0 ? 30 : -30),
    rotation: () => 360 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: ".experience",
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    }
  });
});

// Experience content entrance
ScrollTrigger.create({
  trigger: ".experience",
  start: "top 70%",
  onEnter: () => {
    gsap.timeline()
      .to(".experience-content", {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out"
      })
      .to(".timeline-line", {
        scaleY: 1,
        duration: 1.5,
        ease: "power2.out"
      }, "-=1")
      .to(".timeline-dot", {
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: "back.out(2)"
      }, "-=0.8")
      .to(".experience-card", {
        x: 0,
        opacity: 1,
        rotationY: 0,
        duration: 1.5,
        ease: "back.out(1.7)"
      }, "-=0.5");
  }
});

// Experience card hover enhancements
document.querySelectorAll(".experience-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      scale: 1.02,
      rotationY: 2,
      duration: 0.6,
      ease: "power2.out"
    });
  });
  
  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      scale: 1,
      rotationY: 0,
      duration: 0.6,
      ease: "power2.out"
    });
  });
});

// Timeline dot pulsing animation
gsap.to(".timeline-dot", {
  boxShadow: "0 0 30px rgba(0, 242, 254, 0.8)",
  scale: 1.2,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "power2.inOut"
});

// Additional projects stagger reveal on scroll
// ScrollTrigger.create({
//   trigger: ".additional-projects-grid",
//   start: "top 80%",
//   onEnter: () => {
//     gsap.from(".additional-project", {
//       y: 100,
//       opacity: 0,
//       scale: 0.8,
//       duration: 1,
//       stagger: 0.2,
//       ease: "back.out(1.7)"
//     });
//   }
// });

// Continuous floating animation for project icons
gsap.to(".project-icon", {
  y: -10,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "power2.inOut",
  stagger: 0.3
});

// Feature tags animation on hover
document.querySelectorAll(".feature-tag").forEach(tag => {
  tag.addEventListener("mouseenter", () => {
    gsap.to(tag, {
      scale: 1.1,
      backgroundColor: "rgba(0, 242, 254, 0.4)",
      duration: 0.3,
      ease: "power2.out"
    });
  });
  
  tag.addEventListener("mouseleave", () => {
    gsap.to(tag, {
      scale: 1,
      backgroundColor: "rgba(0, 242, 254, 0.2)",
      duration: 0.3,
      ease: "power2.out"
    });
  });
});
