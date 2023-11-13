import { Box, Center, Img, useMediaQuery, useOutsideClick } from "@chakra-ui/react";
import { AnimatePresence, motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Article } from "./article-version2";
import Viewer from '@react-pdf/renderer';
import { Backdrop, BackdropForward } from "../backdrop";
import { GridMasonry } from "../layout";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";


const articles=[
  {
    id: '1',
    src: './posts/factors.jpeg',
    alt: 'Фактор рефакторинга',
    title: 'Фактор рефакторинга',
    views: '6.1К',
    comments: 39,
    href: 'https://habr.com/ru/post/576326/'
  },
  {
    id: '2',
    src: './posts/startup.png',
    alt: 'Стартап с другой планеты',
    title: 'Стартап с другой планеты',
    views: '10К',
    comments: 28,
    href: 'https://habr.com/ru/post/656879/'
  },
  {
    id: '3',
    src: './posts/article.png',
    alt: 'Хроники безумного стартапа. День 581',
    title: 'Хроники безумного стартапа. День 581',
    views: '3.5К',
    comments: 1,
    href: 'https://habr.com/ru/companies/deepfoundation/articles/745454/'
  },
  {
    id: '4',
    src: './posts/startup.png',
    alt: 'Ассоциативный Excel и сквозная валидация',
    title: 'Ассоциативный Excel и сквозная валидация',
    views: '2.1К',
    comments: 2,
    href: 'https://habr.com/ru/companies/deepfoundation/articles/750140/'
  },
  {
    id: '5',
    src: './posts/links.png',
    alt: 'Ассоциативные связи',
    title: 'Ассоциативные связи',
    views: '4.2К',
    comments: 8,
    href: 'https://habr.com/ru/post/576398/'
  },
  {
    id: '6',
    src: './posts/math.jpeg',
    alt: 'Math introduction to Deep Theory',
    title: 'Math introduction to Deep Theory',
    views: '2.9К',
    comments: 0,
    href: 'https://habr.com/ru/post/658705/'
  },
  {
    id: '7',
    src: './posts/article.png',
    alt: 'Просто о Deep #1',
    title: 'Просто о Deep #1',
    views: '3.9К',
    comments: 8,
    href: 'https://habr.com/ru/companies/deepfoundation/articles/757166/'
  },
];

export const ArticlesGallery = React.memo(({ 
  delayPerPixel = 0.0015,
}:{
  delayPerPixel?: number;
}) => {
  const originOffset = useRef({ top: 0, left: 0 });
  const controls = useAnimation();
  const [selected, setSelected] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  useEffect(() => {
    controls.start("visible");
  }, []);

  const onTap = (id: any) => {
    setSelected(id);
    setIsOpened(true);
  }


  return (<Box width='58.25rem'>
      <ResponsiveMasonry
        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
        gutter='1rem'
      >
        <Masonry>
          {articles.map((article, i) => {
            return (<Box key={article.id} width='100%'>
                {<ArticleThumbnail 
                  i={i}
                  onTap={onTap}
                  originIndex={articles.length - 1}
                  delayPerPixel={delayPerPixel}
                  originOffset={originOffset}
                  id={article.id}
                  title={article.title}
                  views={article.views}
                  comments={article.comments}
                  src={article.src}
                  alt={article.alt}
                />}
              </Box>
            )})
          }
        </Masonry>
      </ResponsiveMasonry>
      {/* <Box as={motion.div} initial="hidden" animate={controls} variants={{}} textAlign='center'>
        <Box
          sx={{
            display: 'grid',
            gridGap: '1rem',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gridAutoRows: '30vh',
            gridAutoFlow: 'dense',
          }}
        >
          {articles.map((article, i) => {
            return (<Box key={article.id}>
                {<ArticleThumbnail 
                  i={i}
                  setSelected={setSelected}
                  originIndex={articles.length - 1}
                  delayPerPixel={delayPerPixel}
                  originOffset={originOffset}
                  id={article.id}
                  title={article.title}
                  views={article.views}
                  comments={article.comments}
                  src={article.src}
                  alt={article.alt}
                />}
              </Box>
            )})
          }

        </Box>
      </Box> */}
    </Box>
  );
});

const ArticleThumbnail = React.memo(({ 
  delayPerPixel = 0.0015, 
  i, 
  originIndex = 0, 
  originOffset,
  ...props
}:{
  delayPerPixel?: number;
  i: number;
  originIndex?: number;
  originOffset: any;
  [key:string]: any;
}) => {
  const delayRef = useRef(0);
  const offset = useRef({ top: 0, left: 0 });
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    offset.current = {
      // @ts-ignore
      top: element.offsetTop || 0,
      // @ts-ignore
      left: element.offsetLeft || 0,
    };

    if (i === originIndex) {
      originOffset.current = offset.current;
    }
  }, [delayPerPixel, i, originIndex]);


  useEffect(() => {
    if(isInView == true) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls, delayPerPixel])
  
  useEffect(() => {
    const dx = Math.abs(offset.current.left - originOffset.current.left);
    const dy = Math.abs(offset.current.top - originOffset.current.top);
    const d = Math.sqrt(Math.pow(dx, 1.4) + Math.pow(dy, 1.1));
    delayRef.current = d * delayPerPixel;
  }, [delayPerPixel]);

  return (<Box as={motion.div}
      sx={{
        display: 'inline-block',
        height: '100%',
        width: '100%',
        borderRadius: '0.5rem',
        overflow: 'hidden',
      }}
      ref={ref} 
      animate={controls}
      variants={itemVariants}  
      custom={delayRef}  
      onTap={() => props.onTap(props.id)}
    >
        <Article 
          title={props.title}
          views={props.views}
          comments={props.comments}
          src={props.src}
          alt={props.alt}
        />
      {/* </Box> */}
    </Box>
  )
})


const itemVariants = {
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


const variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.2 }
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2 }
  },
  initial: {
    opacity: 0,
    scale: 0,
    transition: { duration: 0.2 }
  },
};

export const DetailView = React.memo(({
  articles,
  isOpen, 
  onTap,
  ...props
}:{
  articles?: any;
  isOpen?: boolean;
  onTap?: () => any;
  [key:string]: any;
}) => {

  const { 
    src, 
    alt,
    title,
    views,
    comments,
  } = articles.find(
    (article) => article.id === props.selected
  );

  const [isDesktop] = useMediaQuery('(min-width: 820px)');
  const containerRef = useRef<HTMLElement>(null);
  const controls = useAnimation();

  useOutsideClick({
    ref: containerRef,
    handler: onTap,
  })

  useEffect(() => {
    if (isOpen) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isOpen, controls]);

  return (<AnimatePresence>
        <Center as={motion.div}
            ref={containerRef as React.RefObject<HTMLDivElement>}
            sx={{
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            borderRadius: '0.5rem',
            overflow: 'hidden',
            top: 0,
            left: 0,
            zIndex: 3,
            backdropFilter: 'blur(3px) brightness(0.4)',
          }}
          initial='initial'
          animate={controls}
          variants={variants}
          exit={{ opacity: 0, scale: 0 }}
          onTap={onTap}
        >
          <Article 
            title={props.title}
            views={props.views}
            comments={props.comments}
            src={props.src}
            alt={props.alt}
          />
        </Center>
      </AnimatePresence>
  );
})