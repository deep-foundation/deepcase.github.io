import React, { ReactElement } from 'react';
import { useRef, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { Button } from '../framework';


export const useDimensions = ref => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};


const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const Path = React.memo<any>(props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
));

const MenuToggle = React.memo<any>(({ toggle }) => (
  <Button 
    onClick={toggle}
    variant='ghost'
    sx={{
      outline: 'none',
      border: 'none',
      userSelect: 'none',
      cursor: 'pointer',
      position: 'absolute',
      top: 18,
      left: 15,
      width: 50,
      height: 50,
      borderRadius: '50%',
      background: 'transparent',
    }}
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </Button>
));

export const DocumentationMenuMobile = React.memo<any>(({menuList}:{menuList?: ReactElement}) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return ( <motion.div
    initial={false}
    animate={isOpen ? "open" : "closed"}
    custom={height}
    ref={containerRef}
    style={{position: 'relative'}}
  >
    <motion.div 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: '100%',
        background: '#fff',
      }} 
      variants={sidebar} 
    />
    {menuList}
    <MenuToggle toggle={() => toggleOpen()} />
  </motion.div>)
})