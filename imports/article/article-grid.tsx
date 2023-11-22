import { useRef, useLayoutEffect, useEffect, memo } from "react";
import { Variants, motion, useAnimation, useInView } from "framer-motion";
import { Box } from "@chakra-ui/react";


type ArticleGridProps = {
  delayPerPixel?: number;
  numItems?: number;
};

export const ArticleGrid = memo(function ArticleGrid({ delayPerPixel = 0.0008, numItems = 50 }: ArticleGridProps) {
  const originOffset = useRef({ top: 0, left: 0 });
  const controls = useAnimation();

  const ref = useRef(null)
  const isInView = useInView(ref);

  useEffect(() => {
    controls.start("visible");
  }, [isInView]);

  // const inViewport = useDebounceCallback(() => {
  //   setCurrent(0);
  // }, 2000);

  return (
    <motion.div initial="hidden" ref={ref} animate={controls}>
      {Array.from({ length: numItems }).map((_, i) => (
        <ArticleCell
          key={i}
          i={i}
          originIndex={26}
          delayPerPixel={delayPerPixel}
          originOffset={originOffset}
        >
          <Box w={40} h={35} bg='red'></Box>
        </ArticleCell>
      ))}
    </motion.div>
  );
})

type ArticleCell = {
  delayPerPixel: number;
  i: number;
  originIndex: number;
  originOffset: React.MutableRefObject<{ top: number; left: number }>;
  children: React.ReactNode;
};

const ArticleCell = memo(function GridItem({ delayPerPixel, i, originIndex, originOffset, children }: ArticleCell) {
  const delayRef = useRef(0);
  const offset = useRef({ top: 0, left: 0 });
  const ref = useRef(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    offset.current = {
      // @ts-ignore
      top: element.offsetTop,
      // @ts-ignore
      left: element.offsetLeft
    };

    if (i === originIndex) {
      originOffset.current = offset.current;
    }
  }, [delayPerPixel, i, originIndex, offset, originOffset, ref]);



  useEffect(() => {
    const dx = Math.abs(offset.current.left - originOffset.current.left);
    const dy = Math.abs(offset.current.top - originOffset.current.top);
    const d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    delayRef.current = d * delayPerPixel;
  }, [delayPerPixel]);

  return (<Box as={motion.div} ref={ref} variants={itemVariants} custom={delayRef} sx={{width: '100%', height: '100%'}}>
      {children}
    </Box>
  );
})

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5
  },
  visible: delayRef => ({
    opacity: 1,
    scale: 1,
    transition: { delay: delayRef.current }
  })
};
