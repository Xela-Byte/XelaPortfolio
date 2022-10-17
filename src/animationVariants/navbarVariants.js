export const navBarTabContainerVariant = {
  initial: {},
  animate: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.5,
    },
  },
};

export const navBarTabVariant = {
  initial: {
    x: '100vw',
  },
  animate: {
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
    x: 0,
  },
};
