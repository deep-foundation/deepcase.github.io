import { AnimatePresence, motion } from "framer-motion";
import React from 'react';
import { TbArrowTopCircle } from 'react-icons/tb';
import { Button } from '../framework';

export interface IMenuItem {
  id: number;
  title: string;
  body?: any;
  children?: IMenuItem[];
}

interface IMenuItemProps extends IMenuItem {
  i?: number;
  expanded?: boolean | number;
  onOpen?: (e: any) => any;
  style?: any;
  variants?: any;
  transition?: any;
}

export type Menu = IMenuItem[];

const variantsLi = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const SubMenu = React.memo<any>(({isOpen, title, onClick}) => {
  return (<AnimatePresence>
    {isOpen && (
      <motion.section
        key="content"
        initial="collapsed"
        animate="open"
        exit="collapsed"
        variants={{
          open: { opacity: 1, height: "auto" },
          collapsed: { opacity: 0, height: 0 }
        }}
        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
        onClick={onClick}
      >
        <motion.div
          variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
          transition={{ duration: 0.8 }}
          style={{ originY: 1, originX: 1 }}
        >
          {title}
        </motion.div>
      </motion.section>
    )}
  </AnimatePresence>)
});


export const DocumentationMenuItem = React.memo<any>(({
  // i, 
  id,
  expanded, 
  onOpen, 
  title, 
  children, 
  style,
  variants = {},
  transition = {},
}:IMenuItemProps) => {
  // const open = expanded === id ? true : false;
  const open = expanded;

  return (<motion.li variants={variantsLi} style={{listStyle: "none"}}>
      <Button variant='ghost' as={motion.div}
        width='100%'
        animate={{ 
          color: open ? "#FF0088" : "#0055FF", 
        }}
        variants={variants}
        transition={transition}
        onClick={(e) => onOpen(e)}
        rightIcon={children && (
          <motion.div animate={{ rotate: open ? 180 : 0 }}>
            <TbArrowTopCircle />
          </motion.div>
        )}
        sx={{
          justifyContent: 'flex-start',
          p: 0,
          ...style
        }}
      >{title}</Button>
      {children && children.map((c, i) =>(
        expanded && <AnimatePresence>
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <DocumentationMenuItem 
              key={c.id}
              // i={i}
              expanded={expanded}
              onOpen={(e) => onOpen(e)}
              title={c.title}
              id={c.id}
              variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
              transition={{ duration: 0.8 }}
              children={c.children}
            />
          </motion.section>
          </AnimatePresence>
        ))
      }
    </motion.li>
  )
})