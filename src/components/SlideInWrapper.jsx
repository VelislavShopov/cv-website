// components/SlideInWrapper.jsx
import { motion } from "framer-motion";

const SlideInWrapper = ({ children, right = false }) => {
  const transition = {
    style: { zIndex: -1 },
    initial: { x: "-50%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: {
      delay: 0.1, // delay before animation starts
      type: "spring",
      stiffness: 70,
      damping: 20,
    },
    viewport: { once: true, amount: 0.1 },
  };

  if (right) {
    transition.initial.x = "50%";
  }

  return <motion.div {...transition}>{children}</motion.div>;
};

export default SlideInWrapper;
