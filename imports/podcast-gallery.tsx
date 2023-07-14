import React, { useRef, useState } from 'react';
import { ICardPodcast, IProvider, Podcast } from './podcast/podcast-card';
import { Box, IconButton } from '@chakra-ui/react';
import { TbArrowBigLeft, TbArrowBigRight } from "react-icons/tb";
import { AnimatePresence, motion, MotionConfig, useScroll } from "framer-motion";


const youTubeProvider: IProvider = { 
  icon: '/source/youtube.png', 
  alt: 'YouTube',
  title: 'YouTube',
};
const yaProvider: IProvider = { 
  icon: '/source/ya.png', 
  alt: 'Yandex Music',
  title: 'Yandex Music',
};
const appleProvider: IProvider = { 
  icon: '/source/apple.png', 
  alt: 'Apple Podcast',
  title: 'Apple Podcast',
};
const telegramProvider: IProvider = { 
  icon: '/source/telegram.png', 
  alt: 'Telegram',
  title: 'Telegram',
};
const spotifyProvider: IProvider = { 
  icon: '/source/spotify.svg', 
  alt: 'spotify',
  title: 'Spotify',
};

const podcasts: ICardPodcast[] = [
  {
    id: '1',
    duration: '1:17',
    privateCast: false,
    date: '08.12.21', 
    published: true,
    links: [
      {
        provider: youTubeProvider,
        href: 'https://www.youtube.com/watch?v=OBem0jEQsVA&ab_channel=DeepFoundation',
      },
      {
        provider: appleProvider,
        href: 'https://podcasts.apple.com/ru/podcast/%D0%BF%D0%B5%D1%89%D0%B5%D1%80%D0%B0-%D0%B4%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%B0-%D0%B5%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9-%D0%B8%D0%B7-ultratendency/id1613381730?i=1000553342935&l=en',
      },
      {
        provider: spotifyProvider,
        href: 'https://open.spotify.com/episode/32XBeQQThbwjyPeaPUlYYb',
      },
    ],
    imgs: [{
      id: 'c',
      altLogo: 'ultratendency',
      srcLogo: '/logo-speakers/ultratendency.svg',
      topLogo: 80,
      leftLogo: 8,
      widthLogo: 24,
    }],
    speakers: [{
      id: '1',
      guestImgSrcPng: '/speakers/eugene.png',
      guestImgSrcWebp: '/speakers/eugene.webp',
      guestName: 'Евгений',
      occupation: 'BigData Engineer из Ultra tendency International (Германия)', 
    }],
  },
  {
    id: '2',
    date: '30.11.21',
    duration: '16:20',
    privateCast: false,
    published: true,
    links: [
      {
        provider: youTubeProvider,
        href: 'https://www.youtube.com/watch?v=z6I5Qjfjhlo&ab_channel=DeepFoundation',
      },
    ],
    imgs: [
      {
        id: '1',
        altLogo: '',
        srcLogo: '/logo-speakers/rust.svg',
        topLogo: 35,
        leftLogo: 73,
        widthLogo: 20,
      },
      {
        id: '2',
        altLogo: '',
        srcLogo: '/logo-speakers/aws.png',
        topLogo: 5,
        leftLogo: 75,
        widthLogo: 20,
      },
      {
        id: '3',
        altLogo: '',
        srcLogo: '/logo-speakers/spring.png',
        topLogo: 45,
        leftLogo: 5,
        widthLogo: 20,
      },
      {
        id: '4',
        altLogo: '',
        srcLogo: '/logo-speakers/azure.png',
        topLogo: 65,
        leftLogo: 10,
        widthLogo: 16,
      },
      {
        id: '5',
        altLogo: '',
        srcLogo: '/logo-speakers/java.png',
        topLogo: 65,
        leftLogo: 80,
        widthLogo: 20,
      },
    ],
    speakers: [{
      id: '1',
      guestImgSrcPng: '/speakers/ivan-ermolaev.png',
      guestImgSrcWebp: '/speakers/ivan-ermolaev.webp',
      guestName: 'Иван Ермолаев',
      occupation: 'Developer', 
    }],
  },
  {
    id: '7',
    duration: '0:17',
    privateCast: false,
    date: '08.12.21', 
    published: true,
    links: [
      {
        provider: youTubeProvider,
        href: 'https://www.youtube.com/watch?v=V28SFyLvO5g&t=2s&ab_channel=DeepFoundation',
      },
      {
        provider: appleProvider,
        href: 'https://podcasts.apple.com/ru/podcast/%D0%BF%D0%B5%D1%89%D0%B5%D1%80%D0%B0-%D0%B4%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%B0-%D0%B2%D0%B8%D1%82%D0%B0%D0%BB%D0%B8%D0%B9-%D1%88%D1%83%D0%B1%D0%B8%D0%BD-%D0%B8%D0%B7-single-broker/id1613381730?i=1000553342989&l=en',
      },
      {
        provider: spotifyProvider,
        href: 'https://open.spotify.com/episode/6eHqXxsA8NXpmcadUK2ruI',
      },
    ],
    imgs: [{
      id: 'b',
      altLogo: 'single',
      srcLogo: '/logo-speakers/single.svg',
      topLogo: 70,
      leftLogo: 5,
      widthLogo: 42,
    }],
    speakers: [{
      id: '1',
      guestImgSrcPng: '/speakers/asset_1.png',
      guestName: 'Виталий Шубин',
      occupation: 'владелец компании по IT разработке', 
    }],
  },
  {
    id: '3',
    duration: '0:52',
    privateCast: false,
    date: '08.12.21',  
    published: true,
    links: [
      {
        provider: youTubeProvider,
        href: 'https://www.youtube.com/watch?v=cSv0hcCb2zI',
      },
      {
        provider: appleProvider,
        href: 'https://podcasts.apple.com/ru/podcast/%D0%BF%D0%B5%D1%89%D0%B5%D1%80%D0%B0-%D0%B4%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%B0-%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D1%82%D0%B8%D0%BA/id1613381730?i=1000553342857&l=en',
      },
      {
        provider: spotifyProvider,
        href: 'https://open.spotify.com/episode/1T2GkMC5Y5y0pDUXDOQmYk',
      },
    ],
    imgs: [{
      id: 'a',
      altLogo: 'exel',
      srcLogo: '/logo-speakers/exel.png',
      topLogo: 22,
      leftLogo: 80,
      widthLogo: 22,
    },{
      id: 'b',
      altLogo: 'sql',
      srcLogo: '/logo-speakers/sql.png',
      topLogo: 55,
      leftLogo: 75,
      widthLogo: 18,
    },{
      id: 'c',
      altLogo: 'java',
      srcLogo: '/logo-speakers/java.png',
      topLogo: 70,
      leftLogo: 6,
      widthLogo: 14,
    }],
    speakers: [{
      id: '1',
      guestImgSrcPng: '/speakers/alexey.png',
      guestImgSrcWebp: '/speakers/alexey.webp',
      guestName: 'Алексей',
      occupation: 'аналитик в области оценки риска юр. лиц',
    }],
  },
  {
    id: '4',
    duration: '0:33',
    privateCast: false,
    date: '14.12.21',  
    published: true,
    links: [
      {
        provider: youTubeProvider,
        href: 'https://www.youtube.com/watch?v=tqv0CTcB9x4&ab_channel=DeepFoundation',
      },
      {
        provider: appleProvider,
        href: 'https://podcasts.apple.com/ru/podcast/%D0%BF%D0%B5%D1%89%D0%B5%D1%80%D0%B0-%D0%B4%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%B0-%D1%81%D0%B5%D0%BC%D1%91%D0%BD-%D0%B3%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%BE%D0%B2-%D0%B2%D0%B5%D0%B4%D1%83%D1%89%D0%B8%D0%B9-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%81%D1%82/id1613381730?i=1000553342925&l=en',
      },
      {
        provider: spotifyProvider,
        href: 'https://open.spotify.com/episode/6ayHEt57FQrCiafQxFqUDS',
      },
    ],
    imgs: [{
      id: 'a',
      altLogo: 'php',
      srcLogo: '/logo-speakers/php.png',
      topLogo: 32,
      leftLogo: 73,
      widthLogo: 22,
    },{
      id: 'b',
      altLogo: 'ims',
      srcLogo: '/logo-speakers/ims.png',
      topLogo: 65,
      leftLogo: 5,
      widthLogo: 25,
    }],
    speakers: [{
      id: '1',
      guestImgSrcPng: '/speakers/semen.png',
      guestImgSrcWebp: '/speakers/semen.webp',
      guestName: 'Семен Гординов',
      occupation: 'ведущий программист',
    }],
  },
  {
    id: '16',
    duration: '1:50',
    privateCast: false,
    date: '22.12.21',  
    published: true,
    links: [
      {
        provider: youTubeProvider,
        href: 'https://www.youtube.com/watch?v=Xe81O3fQKHU&ab_channel=DeepFoundation',
      },
    ],
    imgs: [{
      id: 'a',
      altLogo: 'react',
      srcLogo: '/logo-speakers/react.png',
      topLogo: 72,
      leftLogo: 33,
      widthLogo: 10,
    },
    {
      id: 'b',
      altLogo: 'dotnet',
      srcLogo: '/logo-speakers/dotnet.svg',
      topLogo: 28,
      leftLogo: 82,
      widthLogo: 12,
    },
    {
      id: 'c',
      altLogo: 'ts',
      srcLogo: '/logo-speakers/ts.png',
      topLogo: 52,
      leftLogo: 3,
      widthLogo: 10,
    }],
    speakers: [{
      id: '1',
      guestImgSrcPng: '/speakers/asset_1.png',
      guestName: 'Сергей',
      occupation: 'fullstack web developer',
    }],
  },
  {
    id: '6',
    duration: '0:38',
    privateCast: false,
    date: '14.12.21',  
    published: true,
    links: [
      {
        provider: youTubeProvider,
        href: 'https://www.youtube.com/watch?v=_JFOhNdB9x4',
      },
    ],
    imgs: [{
      id: 'a',
      altLogo: 'sibur',
      srcLogo: '/logo-speakers/sibur.png',
      topLogo: 32,
      leftLogo: 73,
      widthLogo: 22,
    }],
    speakers: [{
      id: '1',
      guestImgSrcPng: '/speakers/ivanSh.png',
      guestImgSrcWebp: '/speakers/ivanSh.webp',
      guestName: 'Иван Шилов',
      occupation: 'аналитик',
    }],
  },
  {
    id: '22',
    duration: '1:35',
    privateCast: false,
    published: true,
    date: '21.12.21', 
    format: 'video',
    links: [
      {
        provider: youTubeProvider,
        href: 'https://www.youtube.com/watch?v=LqHU6M-ykPo&ab_channel=DeepFoundation',
      },
    ],
    speakers: [
      {
        id: '1',
        guestImgSrcPng: '/speakers/pavel.png',
        guestImgSrcWebp: '/speakers/pavel.webp',
        guestName: 'Павел Московой',
      },
      {
        id: '2',
        guestImgSrcPng: '/speakers/andrei.png',
        guestImgSrcWebp: '/speakers/andrei.webp',
        guestName: 'Андрей', 
      }
    ],
  },
];


export const PodcastsGallery = React.memo(() => {
  let [index, setIndex] = useState(0);
  const lng = podcasts.length;

  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <Box height='100%' width='100%' display='flex' flexDirection='column' justifyContent='center'>
        <Box 
          position='relative' 
          overflow='hidden'
          height='100%'
          display='flex'
          justifyContent='flex-start'
          paddingLeft='4rem'
        >
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(8, 20rem)',
            overflowX: 'scroll',
            columnGap: '5rem',
            gridTemplateRows: '15rem',
            position: 'absolute',
            height: '100%',
            alignContent: 'center',
            }}
          >
            {podcasts.map(podcast => (
              <Box key={podcast.id} as={motion.div} animate={{ x: `${index * -100}%` }}>
                <Podcast card={podcast} />
              </Box>
            ))}
          </Box>
          <AnimatePresence initial={false}>
            {index > 0 && (
              <IconButton as={motion.div}
                aria-label='previous'
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0, pointerEvents: "none" }}
                whileHover={{ opacity: 1 }}
                sx={{
                  position: 'absolute', 
                  left: '2%',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  // width: '8%',
                  // height: '8%', 
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                }}                
                onClick={() => {
                  setIndex(index - 1);
                  console.log('index-1', index);
                  console.log('lng', lng);
                }}
                icon={<TbArrowBigLeft />}
              />
                
            )}
          </AnimatePresence>

          <AnimatePresence initial={false}>
            {index < podcasts.length && (
              <IconButton as={motion.div}
                aria-label='next'
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0, pointerEvents: "none" }}
                whileHover={{ opacity: 1 }}
                sx={{
                  position: 'absolute',
                  right: '2%',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  // width: '8%',
                  // height: '8%',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                }}
                onClick={() => {
                  setIndex(index + 1);
                  console.log('index+1', index);
                  console.log('lng', lng);
                }}
                icon={<TbArrowBigRight />}
              />
                
            )}
          </AnimatePresence>
          
        </Box>
      </Box>
    </MotionConfig>
  );
})

export const PodcastsScroll = React.memo(() => {

  return (<>
    <Box 
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 20rem)',
        overflowX: 'scroll',
        columnGap: '5rem',
        gridTemplateRows: '15rem',
        position: 'absolute',
        width: '80%',
        padding: '4rem 0',
        alignContent: 'center',
        '&::-webkit-scrollbar': {
          height: '0.2rem',
          width: '0.2rem',
          background: '#fff3',
          borderRadius: '1ex',
        },
        '&::-webkit-scrollbar-track': {
          background: '#080d11',
          borderRadius: '1ex',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#dfdfdf',
          borderRadius: '1ex',
        },
        '&::-webkit-scrollbar-corner': {
          background: '#fff3'
        }
      }}
    >
      {podcasts.map(podcast => (
        // <Box key={podcast.id} as={motion.div} animate={{ x: `${index * -100}%` }}>
          <Podcast card={podcast} />
        // </Box>
      ))}
    </Box>
  </>

  )
})



