export const fadeUp = {
  hidden:{
    opacity:0,
    y:50
  },

  show:{
    opacity:1,
    y:0,
    transition:{
      duration:0.6,
      ease:"easeOut"
    }
  }
};



export const fadeLeft = {
  hidden:{
    opacity:0,
    x:-50
  },

  show:{
    opacity:1,
    x:0,
    transition:{
      duration:0.6,
      ease:"easeOut"
    }
  }
};



export const fadeRight = {
  hidden:{
    opacity:0,
    x:50
  },

  show:{
    opacity:1,
    x:0,
    transition:{
      duration:0.6,
      ease:"easeOut"
    }
  }
};



export const stagger = {
  hidden:{
    opacity:0
  },

  show:{
    opacity:1,

    transition:{
      staggerChildren:0.15
    }
  }
};