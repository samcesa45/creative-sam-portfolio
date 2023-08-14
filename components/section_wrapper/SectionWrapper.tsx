import { styles } from "@/styles";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

export default function SectionWrapper(
  Component: React.ComponentType,
  idName: string
) {
  return function HOC() {
    return (
      <motion.section
        variants={staggerContainer(1, 30)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        id={idName}
      >
        <span className="hash-span">&nbsp;</span>
        <Component />
      </motion.section>
    );
  };
}
