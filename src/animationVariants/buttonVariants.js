export const buttonVariant = {
  initial: { opacity: 0.8 },
  animate: {
    scale: 1.2,
    opcaity: 1,
  },
  grow: {
    scale: [0.9, 1, 1.1, 1, 0.9],
    transition: {
      type: 'tween',
      duration: 2,
      repeat: 'Infinity',
    },
  },
  tap: {
    scale: 0.8,
  },
};
