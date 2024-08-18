gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "play none none reverse"
})


gsap.to('.img-container', {
  scale: 52,
  ease: "ease",
  scrollTrigger: {
    trigger: '.video-section',
    scrub: 1,
    start: "top top",
    end: "bottom",
    pin: true
  }
})


gsap.to('.right', {
  autoAlpha: 0,
  x: 500,
  duration: 1.5,
  scrollTrigger: {
    start: 1
  }
})
gsap.to('.left', {
  autoAlpha: 0,
  x: -500,
  duration: 1.5,
  scrollTrigger: {
    start: 1
  }
})


gsap.to('.txt-bottom', {
  autoAlpha: 0,
  letterSpacing: -10,
  duration: 2,
  scrollTrigger: {
    start: 2
  }
})


const tl = gsap.timeline();

tl.from('.left-side div', {
  y: 150,
  opacity: 0,
  stagger: {
    amount: .4
  },
  delay: .5
}).from('.right-side', { opacity: 0, duration: 2 }, .5)
  .to('.wrapper', { x: -window.innerWidth })



ScrollTrigger.create({
  animation: tl,
  trigger: '.wrapper',
  start: "top top",
  end: "+=600",
  scrub: 1,
  pin: true,
  ease: "ease"
})



gsap.utils.toArray('.col').forEach(image => {
  gsap.fromTo(image, {
    opacity: .3,
    x: 0
  }, {
    opacity: 1,
    x: -50,
    scrollTrigger: {
      trigger: image,
      start: "10%",
      stagger: {
        amount: .4
      }
    }
  })
})

const timeline = gsap.timeline();

timeline.from('.title span', {
  y: 150,
  skewY: 7,
  duration: 3
}).from('.txt-bottom', {
  letterSpacing: -10,
  opacity: 0,
  duration: 3
})

// Script2:


const lenis = new Lenis();
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".pinned",
  start: "top top",
  endTrigger: ".whitespace",
  end: "bottom top",
  pin: true,
  pinSpacing: false,
});

ScrollTrigger.create({
  trigger: ".header-info",
  start: "top top",
  endTrigger: ".whitespace",
  end: "bottom top",
  pin: true,
  pinSpacing: false,
});

ScrollTrigger.create({
  trigger: ".pinned",
  start: "top top",
  endTrigger: ".header-info",
  end: "bottom bottom",
  onUpdate: (self) => {
    const rotation = self.progress * 360;
    gsap.to(".revealer", { rotation });
  },
});

ScrollTrigger.create({
  trigger: ".pinned",
  start: "top top",
  endTrigger: ".header-info",
  end: "bottom bottom",
  onUpdate: (self) => {
    const progress = self.progress;
    const clipPath = `polygon(
   ${45 - 45 * progress}% ${0 + 0 * progress}%,
   ${55 + 45 * progress}% ${0 + 0 * progress}%,
   ${55 + 45 * progress}% ${100 - 0 * progress}%,
   ${45 - 45 * progress}% ${100 - 0 * progress}%
)`;
    gsap.to(".revealer-1, .revealer-2", {
      clipPath: clipPath,
      ease: "none",
      duration: 0,
    });
  },
});

ScrollTrigger.create({
  trigger: ".header-info",
  start: "top top",
  end: "bottom 50%",
  scrub: 1,
  onUpdate: (self) => {
    const progress = self.progress;
    const left = 35 + (50 - 35) * progress;
    gsap.to(".revealer", {
      left: `${left}%`,
      ease: "none",
      duration: 0,
    });
  },
});

ScrollTrigger.create({
  trigger: ".whitespace",
  start: "top 50%",
  end: "bottom bottom",
  scrub: 1,
  onUpdate: (self) => {
    const scale = 1 + 12 * self.progress;
    gsap.to(".revealer", {
      scale: scale,
      ease: "none",
      duration: 0,
    });
  },
});
