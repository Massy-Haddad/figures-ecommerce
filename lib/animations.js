// Global Animations
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

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

const buttonVariant = {
  hover: {
    scale: 1.05,
  },
  tap: {
    scale: 0.95,
  },
};

// Cart
const cartVariants = {
  open: {
    x: "0%",
    transition: {
      type: "Tween",
      stiffness: 30,
      restDelta: 0.5,
      // staggerChildren: stagger,
    },
  },
  closed: {
    x: "100%",
    transition: {
      // delay: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 20,
      // staggerChildren: stagger,
    },
  },
};

const filterVariants = {
  open: {
    opacity: 1,
    display: "block",
    visibility: "visible",
    transition: {
      duration: 1,
    },
  },
  closed: {
    opacity: 0,
    display: "none",
    transition: {
      duration: 1,
    },
  },
};

const cartItemVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
};

const cartItemsVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.02,
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      staggerChildren: 0.5,
      staggerDirection: -1,
      x: { stiffness: 1000 },
    },
  },
};

// Product
const productItemsVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      delay: 0.2,
      y: { stiffness: 1000 },
    },
  },
};

export {
  buttonVariant,
  fadeInUp,
  stagger,
  productItemsVariants,
  cartVariants,
  cartItemVariants,
  cartItemsVariants,
  filterVariants,
};
