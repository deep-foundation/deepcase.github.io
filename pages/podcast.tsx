import React from 'react';
import { CgArrowLongLeftC, CgArrowLongRightC } from "react-icons/cg";
import { Carousel, CarouselItem } from 'react-round-carousel';
import { Podcast } from '../imports/podcast/podcast-card';
import { Provider } from '../imports/provider';
import { ICardPodcast, IProvider } from '../imports/podcast/podcast-card';
import { VStack } from '../imports/framework';



const button = {
  position: 'absolute',
  top: 0,
  height: '100%',
  zIndex: 11,
  background: '#202a3887',
};

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
const soundcloudProvider: IProvider = { 
  icon: '/source/soundcloud.png', 
  alt: 'Soundcloud',
  title: 'Soundcloud',
};

const podcasts: ICardPodcast[] = [
  {
    id: '1',
    date: '28.07.22',
    duration: '0:28:54',
    published: true,
    privateCast: false,
    links: [
      {
        provider: youTubeProvider,
        href: 'https://www.youtube.com/watch?v=OBem0jEQsVA&ab_channel=DeepFoundation',
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
      //   provider: soundcloudProvider,
      //   href: '/',
      // },
    ],
    // imgs: [{
    //   id: 'c',
    //   altLogo: '',
    //   srcLogo: '/logo-speakers/ultratendency.svg',
    //   topLogo: 80,
    //   leftLogo: 12,
    //   widthLogo: 24,
    // }],
    speakers: [{
      id: '1',
      guestImgSrcPng: '/speakers/asset_1.png',
      // guestImgSrcWebp: '/speakers/ivan-ermolaev.webp',
      guestName: 'Павел Лукаш',
      occupation: 'Software engineer', 
    }],
  },
  {
    id: '2',
    date: '08.12.21',
    duration: '16:20',
    published: true,
    links: [
      {
        provider: youTubeProvider,
        href: 'abc',
      },
      {
        provider: yaProvider,
        href: 'abc',
      },
      {
        provider: appleProvider,
        href: 'abc',
      },
      {
        provider: telegramProvider,
        href: 'abc',
      },
      {
        provider: soundcloudProvider,
        href: 'abc',
      },
    ],
    imgs: [{
      id: 'b',
      altLogo: '',
      srcLogo: '/logo-speakers/nite.png',
      topLogo: 55,
      leftLogo: 75,
      widthLogo: 20,
    }],
    speakers: [{
      id: '1',
      guestImgSrcPng: '/speakers/ivan-ermolaev.png',
      guestImgSrcWebp: '/speakers/ivan-ermolaev.webp',
      guestName: 'Иван Ермолаев',
      occupation: 'Developer', 
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
];

const items: CarouselItem[] = podcasts.map( p => ({
    alt: '',
		image: '',
		content: (
			<Podcast card={p} />
		)
}));

export const CarouselPodcast = React.memo(() => {
  return (<div style={{marginTop: '5rem'}}>
    <Carousel items={items} itemWidth={600} nextButtonContent={<CgArrowLongLeftC />} prevButtonContent={<CgArrowLongRightC />} />
  </div>
  )}
);

export const Podcasts = React.memo(() => {
  return (<div style={{marginTop: '7rem'}}>
    <VStack spacing='7rem'>
      {podcasts.map( p => (
        <div style={{
          position: 'relative',
          width: 'calc(21.875rem + 1.5vmax)', 
          height: 'calc(14rem + 1vmax)',
          }}
        >
          <Podcast card={p} />
        </div>
      ))}
    </VStack>
  </div>
  )}
);


export default function Page () {
  return (
    <Provider>
      <Podcasts />
    </Provider>
  );
};
