import { motion, Variants } from "framer-motion";

const Heading = ({ title, subTitle }) => {

  const headAnimate = {
    offscreen: { y: 200, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.5
      }
    }
  }

  return (
    <motion.div
      className="text-center"
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ staggerChildren: 0.3 }}
    >
      <motion.h3
        className="title"
        variants={headAnimate}
      >
        {title}
      </motion.h3>
      {
        subTitle &&
        <motion.p
          className="title__desc"
          variants={headAnimate}
        >
          {subTitle}
        </motion.p>
      }

    </motion.div>
  )
}

export default Heading