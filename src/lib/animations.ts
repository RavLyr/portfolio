import type { Variants } from 'framer-motion';

// Fade up animation - used for elements entering from bottom
export const fadeUpVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    }
  },
};

// Stagger children animation - used for lists/grids
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  },
};

// Card hover animation
export const cardHoverVariants: Variants = {
  initial: { 
    scale: 1,
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
  },
  hover: { 
    scale: 1.03,
    boxShadow: '0 0 30px 4px rgba(59, 130, 246, 0.2), 0 12px 40px rgba(0, 0, 0, 0.3)',
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    }
  },
};

// Button glow animation
export const buttonGlowVariants: Variants = {
  initial: { 
    scale: 1,
    boxShadow: '0 0 15px 2px rgba(59, 130, 246, 0.2), inset 0 0 10px rgba(59, 130, 246, 0.1)',
  },
  hover: { 
    scale: 1.02,
    boxShadow: '0 0 25px 5px rgba(59, 130, 246, 0.4), inset 0 0 15px rgba(59, 130, 246, 0.2)',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    }
  },
  tap: {
    scale: 0.98,
  }
};

// Parallax scroll effect (for hero elements)
export const parallaxVariants = (offset: number = 50) => ({
  hidden: { y: 0 },
  visible: { y: offset },
});

// Fade in simple (no movement)
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    }
  },
};

// Scale in animation
export const scaleInVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    }
  },
};

// Slide in from left
export const slideInLeftVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    }
  },
};

// Slide in from right
export const slideInRightVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: 50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    }
  },
};
