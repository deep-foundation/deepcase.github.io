import { Variants, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { memo, useEffect } from "react";

const boxVariant: Variants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

const Box = memo(function Box({num}:{num: number}) {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      style={{background: 'yellow', width: '5rem', height: '5rem', marginBottom: '10rem'}}
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <h1>Box {num} </h1>
    </motion.div>
  );
});

export const AppSS = memo(() => {
  return (
    <div className="App">
      <Box num={1} />
      <Box num={2} />
      <Box num={3} />
    </div>
  );
})