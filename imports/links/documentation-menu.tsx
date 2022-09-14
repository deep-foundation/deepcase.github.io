import { Accordion, AccordionItem, Button, AccordionIcon, AccordionPanel, Box } from '../framework';
import React, { ReactElement, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { TbArrowTopCircle } from 'react-icons/tb';


export interface IMenuItem {
  i?: number;
  expanded?: boolean | number;
  setExpanded?: (i: any) => any;
  id: number;
  title: string;
  body?: any;
  children?: IMenuItem[];
}

interface IMenuItemProps extends IMenuItem {
  style?: any;
}

export type Menu = IMenuItem[];

const variantsUl = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

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
  return (<AnimatePresence initial={false}>
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
          style={{ originY: 0 }}
        >
          {title}
        </motion.div>
      </motion.section>
    )}
  </AnimatePresence>)
});


export const DocumentationMenu = React.memo<any>(({
  i, 
  expanded, 
  setExpanded, 
  title, 
  children, 
  style
}:IMenuItemProps) => {
  const isOpen = i === expanded;

  return (<motion.ul variants={variantsUl}>
      <motion.li variants={variantsLi} style={{listStyle: "none"}}>
        <Button variant='ghost' as={motion.div}
          width='100%'
          initial={false}
          animate={{ color: isOpen ? "#FF0088" : "#0055FF" }}
          onClick={() => setExpanded(isOpen ? false : i)}
          rightIcon={<TbArrowTopCircle />}
          {...style}
        >{title}</Button>
        {children && children.map(c => (<SubMenu key={c.id} title={c.title} isOpen={isOpen} onClick={() => setExpanded(isOpen ? false : i)} />))}
      </motion.li>
    </motion.ul>
  )
})