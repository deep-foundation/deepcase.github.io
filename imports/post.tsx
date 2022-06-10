import React from 'react';
import { useTranslation } from 'react-i18next';
import { LinkBox, Box, LinkOverlay, Stack, Img, Button, Text } from './framework';

interface IPost {
  src?: string;
  alt?: string;
  href: string;
  title: string;
}

export const PostCard = React.memo(({src, alt, href, title}:IPost) => {
  const { t } = useTranslation();
  return (<LinkBox as='article' maxW='sm' p='5' borderWidth='1px' borderRadius='5px' rounded='md'>
      <Box>
        <Img 
          src={src} 
          alt={alt} 
          htmlHeight='100%' 
          htmlWidth='100%' 
          objectFit='contain'
        />
      </Box>
      <Text fontSize='xl'>
        {title}
      </Text>
      <LinkOverlay href={href} isExternal>
        <Button leftIcon={<Img src='./posts/habr.png' alt='habr logo' htmlHeight='100%' htmlWidth='100%' objectFit='cover' boxSize='48px' />} colorScheme='white' variant='solid'>
          {t('posts-read')}
        </Button>
      </LinkOverlay>
    </LinkBox>
  )
})

export const PostCards = React.memo(() => {
  const posts=[
    {
      id: '1',
      src: './posts/factors.jpeg',
      alt: 'Фактор рефакторинга',
      title: 'Фактор рефакторинга',
      href: 'https://habr.com/ru/post/576326/'
    },
    {
      id: '2',
      src: './posts/links.png',
      alt: 'Ассоциативные связи',
      title: 'Ассоциативные связи',
      href: 'https://habr.com/ru/post/576398/'
    },
    {
      id: '3',
      src: './posts/math.jpeg',
      alt: 'Math introduction to Deep Theory',
      title: 'Math introduction to Deep Theory',
      href: 'https://habr.com/ru/post/658705/'
    },
    {
      id: '4',
      src: './posts/startup.png',
      alt: 'Стартап с другой планеты',
      title: 'Стартап с другой планеты',
      href: 'https://habr.com/ru/post/656879/'
    },
  ];
  return (<Box display='grid' columnGap='1em' gridTemplateColumns='repeat(4, 1fr)'>
      {posts.map(p => <PostCard key={p.id} src={p.src} href={p.href} title={p.title} />)}
    </Box>
  )
})