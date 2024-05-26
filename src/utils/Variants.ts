import { delay } from "framer-motion";

export const LoaderVariants = {
    defaultState: {
      initial: { x: 0 },
      animate: { x: 0 },
      exit: { opacity: 0 },
    },
    progressLoader: {
      initial: { width: '0%' },
      animate: {
        width: "100%",
        transition: {
          type: "tween",
          duration: 1.5,
          ease: "easeOut",
          delay: 0.5,
        },
      },
    },
    progressFade: {
      initial: { width: "200px" },
      animate: {
        width: "0",
        transition: {
          duration: 1,
          delay: 2
        },
      },
      exit: { opacity: 0 },
    },
    textPopUp: {
      initial: { y: 30, opacity: 0 },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      },
    },
    textShrink:{
        initial:{width: "fit-content"},
        animate:{width: 0,
            transition:{
                delay: 2.3
            }
        }
    },
    circleScale:{
        initial:{scale: 1},
        animate: {scale: 999,
            transition:{
                delay: 2.5,
                duration: 2,
                type: "tween",
                ease: "easeOut"
            }
        }
    }
  }