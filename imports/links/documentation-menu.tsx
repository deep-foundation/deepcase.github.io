import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box } from '../framework';
import React, { ReactElement, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";


export interface IMenuItem {
  i?: number;
  expanded?: boolean | number;
  setExpanded?: (i: any) => any;
  id: number;
  title: string;
  body?: any;
  children?: IMenuItem[];
}

export type Menu = IMenuItem[];

export const SubMenu = React.memo<any>(({isOpen, title}) => {
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


export const DocumentationMenu = React.memo<any>(({i, expanded, setExpanded, title, children}:IMenuItem) => {
  const isOpen = i === expanded;

  return (<>
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
        onClick={() => setExpanded(isOpen ? false : i)}
      >{title}</motion.header>
      {children && children.map(c => (<SubMenu key={c.id} title={c.title} isOpen={isOpen} />))}
    </>
  )
})