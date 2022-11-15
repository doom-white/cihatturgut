export const ScreenVariant = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.3,
      stiffness: 150,
    },
  },
};

export const ScreenButtonsVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      type: "tween",
      delay: 0.1,
      duration: 1.5,
      stiffness: 280,
    },
  },
};

export const ScreenHeaderVariant = {
  hidden: {
    opacity: 0,
    y: "-100vw",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      delay: 1,
      stiffness: 100,
    },
  },
};

export const ScreenMedalVariant = {
  hidden: {
    opacity: 0,
    y: "-100vw",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      delay: 1.5,
      duration: 1,
      stiffness: 30,
    },
  },
};

export const ScreenMedalButtonsVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      type: "tween",
      delay: 2.2,
      duration: 1.5,
      stiffness: 280,
    },
  },
};

export const Screen404ButtonsVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      type: "tween",
      delay: 0.5,
      duration: 0.7,
      stiffness: 280,
    },
  },
};
