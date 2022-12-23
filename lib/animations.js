// Button
const buttonVariant = {
  hover: {
    scale: 1.05,
  },
  tap: {
    scale: 0.95,
  },
};

// Animations
const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: [100, 50, 0],
    opacity: [0, 0, 1],
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export { buttonVariant, fadeInUp, stagger };