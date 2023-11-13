import { Box, Img, useMediaQuery } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Article } from "./article-new";
// import { GenerationButton } from "./yachts-generation-image";
// import { OpenGallery } from "./open-gallery";


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
    src: './posts/links.png',
    alt: 'Ассоциативные связи',
    title: 'Ассоциативные связи',
    views: '4.2К',
    comments: 8,
    href: 'https://habr.com/ru/post/576398/'
  },
  {
    id: '3',
    src: './posts/math.jpeg',
    alt: 'Math introduction to Deep Theory',
    title: 'Math introduction to Deep Theory',
    views: '2.9К',
    comments: 0,
    href: 'https://habr.com/ru/post/658705/'
  },
  {
    id: '4',
    src: './posts/startup.png',
    alt: 'Стартап с другой планеты',
    title: 'Стартап с другой планеты',
    views: '10К',
    comments: 28,
    href: 'https://habr.com/ru/post/656879/'
  },
  {
    id: '5',
    src: './posts/article.png',
    alt: 'Хроники безумного стартапа. День 581',
    title: 'Хроники безумного стартапа. День 581',
    views: '3.5К',
    comments: 1,
    href: 'https://habr.com/ru/companies/deepfoundation/articles/745454/'
  },
  {
    id: '6',
    src: './posts/startup.png',
    alt: 'Ассоциативный Эксель и Сквозная валидация',
    title: 'Ассоциативный Эксель и Сквозная валидация',
    views: '2.1К',
    comments: 2,
    href: 'https://habr.com/ru/companies/deepfoundation/articles/750140/'
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
  delayPerPixel = 0.0008, 
}:{
  delayPerPixel?: number;
}) => {
  const originOffset = useRef({ top: 0, left: 0 });
  const controls = useAnimation();
  const [selected, setSelected] = useState(null);
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  useEffect(() => {
    controls.start("visible");
  }, []);

  return (<><Box as={motion.div} initial="hidden" animate={controls} variants={{}} textAlign='center'>
        <Box 
          height='100%'
          display="flex" 
          flexWrap="wrap" 
          justifyContent={"center"}>
          {articles.map((article, i) => {
            return (<Box key={article.id}>
              {<Thumbnail 
              display="flex"
                setSelected={setSelected} 
                i={i}
                originIndex={26}
                delayPerPixel={delayPerPixel}
                originOffset={originOffset}
                id={article.id}
                src={article.src}
                alt={article.alt}
              /> }

              {/* {selected 
              ? (<OpenGallery 
                    key={`galery ${photo.id}`}
                    photos={photos}
                    selectedImage={selected} 
                    onClose={() => setSelected(null)} 
                    src={photo.src}
                    alt={photo.alt}
                  />) 
              : null} */}
              {/* {selected 
              ? (<DetailView 
                    photos={photos}
                    selected={selected} 
                    onClose={() => setSelected(null)} 
                    src={photo.src}
                    alt={photo.alt}
                  />) 
              : null} */}
            </Box>)
          })}
        </Box>
      </Box>
    </>
  );
})

const Thumbnail = React.memo(({ 
  delayPerPixel, 
  i, 
  originIndex, 
  originOffset,
  ...props
}:{
  delayPerPixel: number;
  i: number;
  originIndex: number;
  originOffset: any;
  [x:string]: any;
}) => {
  const delayRef = useRef(0);
  const offset = useRef({ top: 0, left: 0 });
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    offset.current = {
      top: element.offsetTop,
      left: element.offsetLeft
    };

    if (i === originIndex) {
      originOffset.current = offset.current;
    }
  }, [delayPerPixel]);

  useEffect(() => {
    const dx = Math.abs(offset.current.left - originOffset.current.left);
    const dy = Math.abs(offset.current.top - originOffset.current.top);
    const d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    delayRef.current = d * delayPerPixel;
  }, [delayPerPixel]);


  const [isSmallerThan650] = useMediaQuery('(max-width: 650px)');
  return (<Box as={motion.div}
      sx={{
        margin: '0.5rem',
        display: 'inline-block',
        height: '100%',
        width: '100%',
        backgroundColor: 'blue.100',
        borderRadius: '0.5rem',
        // borderWidth: '4px',
        overflow: 'hidden',
      }}
      ref={ref} 
      variants={itemVariants} 
      custom={delayRef}  
    >
      <Article 
        title={props.title}
        views={props.views}
        comments={props.comments}
        src={props.src}
        alt={props.alt}
        onClick={() => props.setSelected(props.id)}
        layoutId={props.id}
      />
      <Img loading="lazy" as={motion.img}
        // zIndex={1}
        src={props.src}
        alt={props.alt}
        sx={{
          width: '100%',
          height: '100%',
          margin: '0 1rem 1rem 0',
          cursor: 'pointer',
        }}
      />
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

// export const DetailView = React.memo(({
//   photos, 
//   ...props
// }:{
//   photos?: any;
//   [key:string]: any;
// }) => {
//   const { src, alt } = photos.find(
//     (photo) => photo.id === props.selected
//   );

//   return (<>
//       <Box as={motion.div}
//         sx={{
//           zIndex: 1,
//           width: '100%',
//           background: 'rgba(206 198 198 / 7%)',
//           position: 'fixed',
//           top: 0,
//           bottom: 0,
//           left: '50%',
//           transform: 'translateX(-50%)',
//           willChange: 'opacity',
//           pointerEvents: 'auto',
//         }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         //@ts-ignore
//         transition={{ delay: 0.15 }}
//         onTap={props.onClose}
//       />

//       <Box as={motion.div}
//         sx={{
//           zIndex: 1,
//           width: '500px',
//           maxWidth: '100%',
//           height: '281px',
//           position: 'fixed',
//           top: 'calc(50% - 140px)',
//           left: 'calc(50% - 250px)',
//           cursor: 'zoom-out',
//           borderRadius: '0.5rem',
//           border: 'thin solid #E5E5E5',
//           overflow: 'hidden',
//         }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         //@ts-ignore
//         transition={{ delay: 0.15 }}
//         onTap={props.onClose}
//       >
//         <Img loading="lazy" as={motion.img}
//           layoutId={props.selected}
//           src={src}  //`https://picsum.photos/id/${i}/800`
//           alt={alt}
//           onTap={() => props.onClose}
//           sx={{
//             width: '100%',
//             height: '100%',
//             margin: '0 1rem 1rem 0',
//             cursor: 'pointer',
//           }}
//         />
//       </Box>
//     </>
//   );
// })