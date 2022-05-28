import React from 'react';
import { a, useTransition } from 'react-spring';
import { Box, Center, HStack, Img, Text, VStack } from '../framework';
import { ICardPodcast } from './podcast-card';


const PodcastSourceButton = React.memo(({
  src,
  alt,
  title,
  href,
}:{
  src: string;
  alt?: string;
  title?: string;
  href?: string;
}) => {
  return (<Box
      as='a'
      h='max-content'
      w='100%' 
      lineHeight='1.2'
      transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
      border={0}
      px='8px'
      target='_blank'
      borderRadius={0}
      fontSize='14px'
      fontWeight='semibold'
      bg='transparent'
      color='#4b4f56'
      _hover={{ bg: 'dark' }}
      _active={{
        bg: 'dark',
      }}
      _focus={{
        bg: 'dark'
      }}
      href={href}
      aria-label={alt}
    >
      <HStack>
        <Center w='40px' h='40px'>
          <Img src={src} alt={alt} htmlWidth='100%' htmlHeight='100%' />
        </Center>
        <Text fontSize='xs' as='div' color='light'>{title}</Text>
      </HStack>
    </Box>
  )
})


export const PodcastSource = React.memo(({
  switcher,
  card: { links },
}:{
  switcher?: boolean;
  card: ICardPodcast;
}) => {

  const transitions = useTransition(!switcher, {
    initial: { opacity: 0, transform: 'scale(0.8)', pointerEvents: 'none' },
    enter: { opacity: 0, transform: 'scale(0.8)', pointerEvents: 'none' },
    leave: { opacity: 1, transform: 'scale(1.2)', pointerEvents: 'all' },
    reverse: switcher,
    trail: 2000,
    expires: false,
    config: { mass: 1.7, tension: 65, friction: 25 },
  });

  // @ts-ignore
  return(<>{transitions((style, item) => (item && <a.div style={{
        boxShadow: '0 0 1px 1px #393d40, 0 0 1px 2px rgb(0 0 0 / 16%), 0 0 2px 3px rgb(0 0 0 / 14%), 0 0 4px 5px rgb(0 0 0 / 12%)',
        background: '#19202B',
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: 0,
        zIndex: 11,
        ...style}}>
      <VStack spacing={5} p='1rem'>
        {links.map(s => (
          <PodcastSourceButton 
            key={s.provider.alt}
            src={s.provider.icon} 
            alt={s.provider.alt} 
            title={s.provider.title}
            href={s.href} 
          />
        ))}
      </VStack>
    </a.div>))}</>
  )
})