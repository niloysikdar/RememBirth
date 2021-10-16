export const flip = {
  hidden: {
    transform: 'scale(0) rotateX(-360deg)',
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: 'scale(1) rotateX(0deg)',
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: 'scale(0) rotateX(360deg)',
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const badSuspension = {
  hidden: {
    y: '-100vh',
    opacity: 0,
    transform: 'scale(0) rotateX(-360deg)',
  },
  visible: {
    y: '-25vh',
    opacity: 1,
    transition: {
      duration: 0.2,
      type: 'spring',
      damping: 15,
      stiffness: 500,
    },
  },
  exit: {
    y: '-100vh',
    opacity: 0,
  },
};
