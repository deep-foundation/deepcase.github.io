import React from 'react';
import { CgArrowLongLeftC, CgArrowLongRightC } from "react-icons/cg";
import { Carousel, CarouselItem } from 'react-round-carousel';
import { useSpringCarousel } from 'react-spring-carousel-js';
import { ICardPodcast, IProvider } from './podcast/podcast-card';
import { IconButton, VStack } from './framework';
import { Podcast } from './podcast/podcast-card';
import { Flag } from './flag';



// podcast's source providers
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
      // {
      //   provider: yaProvider,
      //   href: 'abc',
      // },
      // {
      //   provider: appleProvider,
      //   href: 'abc',
      // },
      // {
      //   provider: telegramProvider,
      //   href: 'abc',
      // },
      // {
      //   provider: spotifyProvider,
      //   href: 'abc',
      // },
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
      // {
      //   provider: yaProvider,
      //   href: '/',
      // },
      {
        provider: appleProvider,
        href: 'https://podcasts.apple.com/ru/podcast/%D0%BF%D0%B5%D1%89%D0%B5%D1%80%D0%B0-%D0%B4%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%B0-%D0%B2%D0%B8%D1%82%D0%B0%D0%BB%D0%B8%D0%B9-%D1%88%D1%83%D0%B1%D0%B8%D0%BD-%D0%B8%D0%B7-single-broker/id1613381730?i=1000553342989&l=en',
      },
      // {
      //   provider: telegramProvider,
      //   href: '/',
      // },
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
      // {
      //   provider: yaProvider,
      //   href: '/',
      // },
      {
        provider: appleProvider,
        href: 'https://podcasts.apple.com/ru/podcast/%D0%BF%D0%B5%D1%89%D0%B5%D1%80%D0%B0-%D0%B4%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%B0-%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D1%82%D0%B8%D0%BA/id1613381730?i=1000553342857&l=en',
      },
      // {
      //   provider: telegramProvider,
      //   href: '/',
      // },
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
      // {
      //   provider: yaProvider,
      //   href: '/',
      // },
      {
        provider: appleProvider,
        href: 'https://podcasts.apple.com/ru/podcast/%D0%BF%D0%B5%D1%89%D0%B5%D1%80%D0%B0-%D0%B4%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%B0-%D1%81%D0%B5%D0%BC%D1%91%D0%BD-%D0%B3%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%BE%D0%B2-%D0%B2%D0%B5%D0%B4%D1%83%D1%89%D0%B8%D0%B9-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%81%D1%82/id1613381730?i=1000553342925&l=en',
      },
      // {
      //   provider: telegramProvider,
      //   href: '/',
      // },
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
    id: '24',
    duration: '1:50',
    privateCast: false,
    date: '22.12.21',  
    published: true,
    links: [
      {
        provider: youTubeProvider,
        href: 'https://www.youtube.com/watch?v=Xe81O3fQKHU&ab_channel=DeepFoundation',
      },
      // {
      //   provider: yaProvider,
      //   href: '/',
      // },
      // {
      //   provider: appleProvider,
      //   href: '/',
      // },
      // {
      //   provider: telegramProvider,
      //   href: '/',
      // },
      // {
      //   provider: spotifyProvider,
      //   href: '/',
      // },
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
      // {
      //   provider: yaProvider,
      //   href: '/',
      // },
      // {
      //   provider: appleProvider,
      //   href: '/',
      // },
      // {
      //   provider: telegramProvider,
      //   href: '/',
      // },
      // {
      //   provider: spotifyProvider,
      //   href: '/',
      // },
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
    id: '16',
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
      // {
      //   provider: yaProvider,
      //   href: '/',
      // },
      // {
      //   provider: appleProvider,
      //   href: '/',
      // },
      // {
      //   provider: telegramProvider,
      //   href: '/',
      // },
      // {
      //   provider: spotifyProvider,
      //   href: '/',
      // },
    ],
    // imgs: [{
    //   id: 'a',
    //   altLogo: '',
    //   srcLogo: '/logo-speakers/react.png',
    //   topLogo: 32,
    //   leftLogo: 73,
    //   widthLogo: 22,
    // },
    // {
    //   id: 'b',
    //   altLogo: '',
    //   srcLogo: '/logo-speakers/dotnet.png',
    //   topLogo: 32,
    //   leftLogo: 73,
    //   widthLogo: 22,
    // },
    // {
    //   id: 'c',
    //   altLogo: '',
    //   srcLogo: '/logo-speakers/ts.png',
    //   topLogo: 32,
    //   leftLogo: 73,
    //   widthLogo: 22,
    // }],
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
  // {
  //   id: '16',
  //   duration: '1:35',
  //   privateCast: false,
  //   published: true,
  //   date: '14.12.21', 
  //   links: [
  //     {
  //       provider: youTubeProvider,
  //       href: 'https://www.youtube.com/watch?v=LqHU6M-ykPo&ab_channel=DeepFoundation',
  //     },
  //     // {
  //     //   provider: yaProvider,
  //     //   href: '/',
  //     // },
  //     // {
  //     //   provider: appleProvider,
  //     //   href: '/',
  //     // },
  //     // {
  //     //   provider: telegramProvider,
  //     //   href: '/',
  //     // },
  //     // {
  //     //   provider: spotifyProvider,
  //     //   href: '/',
  //     // },
  //   ],
  //   // imgs: [{
  //   //   id: 'a',
  //   //   altLogo: '',
  //   //   srcLogo: '/logo-speakers/react.png',
  //   //   topLogo: 32,
  //   //   leftLogo: 73,
  //   //   widthLogo: 22,
  //   // },
  //   // {
  //   //   id: 'b',
  //   //   altLogo: '',
  //   //   srcLogo: '/logo-speakers/dotnet.png',
  //   //   topLogo: 32,
  //   //   leftLogo: 73,
  //   //   widthLogo: 22,
  //   // },
  //   // {
  //   //   id: 'c',
  //   //   altLogo: '',
  //   //   srcLogo: '/logo-speakers/ts.png',
  //   //   topLogo: 32,
  //   //   leftLogo: 73,
  //   //   widthLogo: 22,
  //   // }],
  //   speakers: [
  //     {
  //       id: '1',
  //       guestImgSrcPng: '/speakers/vitaly.png',
  //       guestImgSrcWebp: '/speakers/vitaly.webp',
  //       guestName: 'Виталий',
  //       occupation: 'devOps / backend',
  //     },
  //   ],
  // },
];

const items: CarouselItem[] = podcasts.map( p => ({
    alt: '',
		image: '',
		content: (
			<Podcast card={p} />
		)
}));

export const CarouselPodcast = React.memo(() => <Carousel items={items} itemWidth={600} nextButtonContent={<CgArrowLongLeftC />} prevButtonContent={<CgArrowLongRightC />} />);


export const FlagsSlider = React.memo(({
	cardsContent, 
  itemsPerSlide = 2,
}:{
	cardsContent: any; 
	itemsPerSlide?: number;
}) => {

  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
  } = useSpringCarousel({
    initialStartingPosition: "center",
    // withLoop: true,
    // withThumbs: true,
    springConfig: {
      tension: 370,
      mass: 4.7,
    },
    itemsPerSlide: itemsPerSlide,
    items: cardsContent.map((c, i) => ({
      id: i,
      renderItem: (<div key={c.id} style={{ height: 'auto', padding: '2rem 1.5rem', boxSizing: 'border-box', width: 'calc(300px + 3rem)' }}>
				<Flag
					icon1={c.icon1}
					icon2={c.icon2}
					icon3={c.icon3}
					title={c.title} 
					description={c.description}
				/>
			</div>)
		})),
  });

  return (
    <VStack
      h='33rem'
      position='relative'
    >
      <IconButton
        variant='outline'
        colorScheme='teal'
        aria-label='Send email'
        icon={<CgArrowLongLeftC />}
        onClick={slideToPrevItem}
      />
    
      	{carouselFragment}
      <IconButton
        variant='outline'
        colorScheme='teal'
        aria-label='Send email'
        icon={<CgArrowLongRightC />}
        onClick={slideToNextItem}
      />
     
    </VStack>
  );
})
