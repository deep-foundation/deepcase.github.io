import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { LinkBox, Box, LinkOverlay, Img, Flex, Text, HStack, VStack, Heading, AspectRatio } from './framework';
import { FaEye, FaComment } from 'react-icons/fa';

interface IArticle {
  src?: string;
  alt?: string;
  href?: string;
  title?: string;
  read?: string;
  comments?: number;
}

const HabrButton = React.memo(({text, href}:{text?: string; href?: string;}) => {
  return (<Box
      as={LinkOverlay}
      href={href}
      target='_blank'
      h='max-content'
      w='max-content'
      transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
      textDecoration='underline'
      color='primary'
      _hover={{ 
        textDecoration: 'underline'
      }}
      _active={{
        textDecoration: 'none',
        transform: 'scale(0.98)',
      }}
      _focus={{
        boxShadow:
          '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
      }}
    >
      <HStack spacing={0}>
        <Box w='3.5em' display='flex'>
          <Img src='./posts/habr.png' alt='habr' htmlHeight='100%' htmlWidth='100%' />
        </Box>
        <Text 
          fontSize='sm' 
          as='span' 
          fontWeight='semibold' 
          color='primary'
          alignSelf='normal'
          _hover={{ color: 'light' }}
          _active={{
            color: 'light',
            transform: 'scale(0.98)',
          }}
        >
          {text}
        </Text>
      </HStack>
    </Box>
  )
})

export const ArticleCard = React.memo(({src, alt, href, title}:IArticle) => {
  
  const { t } = useTranslation();
  return (<LinkBox as='article' maxW='sm' p='5' borderWidth='1px' borderRadius='5px' rounded='md'>
      <Box className="clip-block">
        <Box
          display='block' 
          pos='relative'
          w='18.5rem'
          h='18.5rem'
          clipPath='url("#hexagon-clip")'
          transition='all 0.2s ease-in'
          >
          <Box
            w='18.5rem'
            h='18.5rem'
            bgImage={src}
            bgRepeat='no-repeat'
            bgSize='cover'
            bgColor='#ad6996'
            backgroundBlendMode='hard-light'
            _after={{
              content: '""',
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              clipPath: 'url("#triangle-clip")',
              background: '#9E566E',
              zIndex: 1,
              width: '100%',
              height: 0,
              transition: 'all 0.2s linear',
              pointerEvents: 'none',
            }}
            _hover={{
              height: 155,
              transition: 'all 0.45s ease-in',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                bottom: 20,
                right: 75,
                color: '#fff',
                fontSize: '70%',
                zIndex: 2,
              }}
            >
              <Box as='span' className="social-each">
                <Text fontSize='xl'>
                  {title}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>	
      </Box>

      <svg>
        <defs>
          <clipPath id="hexagon-clip" clipPathUnits="objectBoundingBox">
            <polygon points="0.25 0.05, 0.75 0.05, 1 0.5, 0.75 0.95, 0.25 0.95, 0 0.5" />
          </clipPath>
        </defs>
      </svg>	

      <svg>
        <defs>
          <clipPath id="triangle-clip" clipPathUnits="objectBoundingBox">
            <polygon points="1 0.03, 0.17 1, 1 1" />
          </clipPath>
        </defs>
      </svg>
    </LinkBox>
  )
});

const Article = React.memo<any>(({src, alt, href, title,  read, comments}:IArticle) => {
  const { t } = useTranslation();
  return (
    // <Box
    //   sx={{
    //     width: '100%',
    //     height: 100,
    //     position: 'relative',
    //   }}
    // >
    //   <Box
    //     sx={{
    //       width: '100%',
    //       height: '100%',
    //       position: 'relative',
    //       transformStyle: 'preserve-3d',
    //       transition: 'transform 1s',
    //       transformOrigin: 'center',
    //       perspectiveOrigin: '100% 100%',
    //       _hover: {
    //         transform:  'rotateX( 90deg)',
    //       }
    //     }}
    //   >
    //     <Box
    //       sx={{
    //         display: 'block',
    //         position: 'absolute',
    //         width: '100%',
    //         height: '100%',
    //         border: 'none',
    //         transform: 'translate3d(0, 0, 50px)',
    //       }}
    //     >
    //       <LinkBox as='article' width={['100%', null, 'xl']} maxW='100%' pl='5' borderLeftWidth='1px' borderLeftColor='light' display='flex' flexDirection='row' alignItems='center'>
    //         <AspectRatio maxW='20rem' width={['3em', null, '6em']} ratio={4 / 3} mr={5}>
    //           <Img
    //             src={src}
    //             alt={alt}
    //             htmlHeight='100%'
    //             htmlWidth='100%'
    //             objectFit='cover'
    //             backgroundColor='dark'
    //           />
    //         </AspectRatio>
    //         <VStack alignItems='flex-start'>
    //           <Heading fontSize={{sm: 'sm', md: 'lg'}} fontWeight={{sm: 'light', md: 'medium'}}>
    //             <LinkOverlay href={href} isExternal>
    //               {title}
    //             </LinkOverlay>
    //           </Heading>
    //           <Flex>
    //             <Box w={['2em', null, '3.5em']} mr='1em'>
    //               <Img src='./posts/habr.png' alt='habr' htmlHeight='100%' htmlWidth='100%' />
    //             </Box> 
    //             <HStack mr='2em'>
    //               <FaEye />
    //               <Box as='span'>{read}</Box>
    //             </HStack>
    //             <HStack>
    //               <FaComment />
    //               <Box as='span'>{comments}</Box>
    //             </HStack>
    //           </Flex>
    //         </VStack>	
    //       </LinkBox>
    //     </Box>
    //     <Box
    //       sx={{
    //         display: 'block',
    //         position: 'absolute',
    //         width: 100,
    //         height: 100,
    //         border: 'none',
    //         background: 'rgba(196, 0, 196, 0.7)',
    //         transform: 'rotateX(-90deg) translateZ(50px)',
    //       }}
    //     >6</Box>
    //   </Box>
    // </Box>
    <LinkBox as='article' width={['100%', null, 'xl']} maxW='100%' pl='5' borderLeftWidth='1px' borderLeftColor='light' display='flex' flexDirection='row' alignItems='center'>
      <AspectRatio maxW='20rem' width={['3em', null, '6em']} ratio={4 / 3} mr={5}>
        <Img
          src={src}
          alt={alt}
          htmlHeight='100%'
          htmlWidth='100%'
          objectFit='cover'
          backgroundColor='dark'
        />
      </AspectRatio>
      <VStack alignItems='flex-start'>
        <Heading fontSize={{sm: 'sm', md: 'lg'}} fontWeight={{sm: 'light', md: 'medium'}}>
          <LinkOverlay href={href} isExternal>
            {title}
          </LinkOverlay>
        </Heading>
        <Flex>
          <Box w={['2em', null, '3.5em']} mr='1em'>
            <Img src='./posts/habr.png' alt='habr' htmlHeight='100%' htmlWidth='100%' />
          </Box> 
          <HStack mr='2em'>
            <FaEye />
            <Box as='span'>{read}</Box>
          </HStack>
          <HStack>
            <FaComment />
            <Box as='span'>{comments}</Box>
          </HStack>
        </Flex>
      </VStack>	
    </LinkBox>
  )
});

export const ArticlesGrid = React.memo(() => {
  const articles=[
    {
      id: '1',
      src: './posts/factors.jpeg',
      alt: 'Фактор рефакторинга',
      title: 'Фактор рефакторинга',
      read: '5.6К',
      comments: 36,
      href: 'https://habr.com/ru/post/576326/'
    },
    {
      id: '2',
      src: './posts/links.png',
      alt: 'Ассоциативные связи',
      title: 'Ассоциативные связи',
      read: '3.7К',
      comments: 8,
      href: 'https://habr.com/ru/post/576398/'
    },
    {
      id: '3',
      src: './posts/math.jpeg',
      alt: 'Math introduction to Deep Theory',
      title: 'Math introduction to Deep Theory',
      read: '2.4К',
      comments: 0,
      href: 'https://habr.com/ru/post/658705/'
    },
    {
      id: '4',
      src: './posts/startup.png',
      alt: 'Стартап с другой планеты',
      title: 'Стартап с другой планеты',
      read: '8.3К',
      comments: 26,
      href: 'https://habr.com/ru/post/656879/'
    },
    {
      id: '5',
      src: './posts/article.png',
      alt: 'Хроники безумного стартапа. День 581',
      title: 'Хроники безумного стартапа. День 581',
      read: '2.7К',
      comments: 26,
      href: 'https://habr.com/ru/companies/deepfoundation/articles/745454/'
    },
  ];
  return (<VStack spacing={10}>
      {articles.map(a => (<Article src={a.src} alt={a.alt} title={a.title} key={a.id} href={a.href} read={a.read} comments={a.comments} />))}
    </VStack>)
});