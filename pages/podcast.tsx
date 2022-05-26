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
    date: '08.12.21',
    duration: '1:17',
    published: true,
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
    imgs: [{
      id: 'c',
      altLogo: '',
      srcLogo: '/logo-speakers/ultratendency.svg',
      topLogo: 80,
      leftLogo: 12,
      widthLogo: 24,
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
    id: '7',
    date: '08.12.21',
    duration: '16:20',
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
    imgs: [{
      id: 'b',
      altLogo: '',
      srcLogo: '/logo-speakers/single.svg',
      topLogo: 70,
      leftLogo: 15,
      widthLogo: 42,
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
    id: '3',
    date: '08.12.21',
    duration: '0:52',
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
    imgs: [{
      id: 'a',
      altLogo: '',
      srcLogo: '/logo-speakers/exel.png',
      topLogo: 2,
      leftLogo: 80,
      widthLogo: 22,
    },{
      id: 'b',
      altLogo: '',
      srcLogo: '/logo-speakers/sql.png',
      topLogo: 55,
      leftLogo: 75,
      widthLogo: 18,
    },{
      id: 'c',
      altLogo: '',
      srcLogo: '/logo-speakers/java.png',
      topLogo: 70,
      leftLogo: 6,
      widthLogo: 14,
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
    id: '17',
    date: '08.12.21',
    duration: '16:20',
    published: true,
    links: [
      {
        provider: youTubeProvider,
        href: '/',
      },
      {
        provider: yaProvider,
        href: '/',
      },
      {
        provider: appleProvider,
        href: '/',
      },
      {
        provider: telegramProvider,
        href: '/',
      },
      {
        provider: soundcloudProvider,
        href: '/',
      },
    ],
    imgs: [{
      id: 'b',
      altLogo: 'java',
      srcLogo: '/logo-speakers/java.png',
      topLogo: 70,
      leftLogo: 78,
      widthLogo: 16,
    },
    {
      id: 'b',
      altLogo: 'aws',
      srcLogo: '/logo-speakers/aws.png',
      topLogo: 0,
      leftLogo: 65,
      widthLogo: 24,
    },
    {
      id: 'b',
      altLogo: 'spring',
      srcLogo: '/logo-speakers/spring.png',
      topLogo: 50,
      leftLogo: 65,
      widthLogo: 24,
    },
    {
      id: 'b',
      altLogo: 'rust',
      srcLogo: '/logo-speakers/rust.svg',
      topLogo: 70,
      leftLogo: 10,
      widthLogo: 14,
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
    id: '4',
    date: '14.12.21',
    duration: '16:20',
    published: true,
    links: [
      {
        provider: youTubeProvider,
        href: '/',
      },
      {
        provider: yaProvider,
        href: '/',
      },
      {
        provider: appleProvider,
        href: '/',
      },
      {
        provider: telegramProvider,
        href: '/',
      },
      {
        provider: soundcloudProvider,
        href: '/',
      },
    ],
    imgs: [{
      id: 'a',
      altLogo: '',
      srcLogo: '/logo-speakers/php.png',
      topLogo: 32,
      leftLogo: 73,
      widthLogo: 22,
    },{
      id: 'b',
      altLogo: '',
      srcLogo: '/logo-speakers/ims.png',
      topLogo: 65,
      leftLogo: 5,
      widthLogo: 25,
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
    id: '5',
    date: '14.12.21',
    duration: '16:20',
    published: true,
    links: [
      {
        provider: youTubeProvider,
        href: '/',
      },
      {
        provider: yaProvider,
        href: '/',
      },
      {
        provider: appleProvider,
        href: '/',
      },
      {
        provider: telegramProvider,
        href: '/',
      },
      {
        provider: soundcloudProvider,
        href: '/',
      },
    ],
    imgs: [{
      id: 'a',
      altLogo: '',
      srcLogo: '/logo-speakers/php.png',
      topLogo: 32,
      leftLogo: 73,
      widthLogo: 22,
    },{
      id: 'b',
      altLogo: '',
      srcLogo: '/logo-speakers/single.svg',
      topLogo: 75,
      leftLogo: 5,
      widthLogo: 25,
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
    id: '6',
    date: '14.12.21',
    duration: '0:38',
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
      //   provider: soundcloudProvider,
      //   href: '/',
      // },
    ],
    imgs: [{
      id: 'a',
      altLogo: '',
      srcLogo: '/logo-speakers/sibur.png',
      topLogo: 32,
      leftLogo: 73,
      widthLogo: 22,
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
    date: '22.12.21',
    duration: '1:50',
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
      //   provider: soundcloudProvider,
      //   href: '/',
      // },
    ],
    imgs: [{
      id: 'a',
      altLogo: '',
      srcLogo: '/logo-speakers/react.png',
      topLogo: 72,
      leftLogo: 33,
      widthLogo: 8,
    },
    {
      id: 'b',
      altLogo: '',
      srcLogo: '/logo-speakers/dotnet.svg',
      topLogo: 28,
      leftLogo: 82,
      widthLogo: 12,
    },
    {
      id: 'c',
      altLogo: '',
      srcLogo: '/logo-speakers/ts.png',
      topLogo: 42,
      leftLogo: 3,
      widthLogo: 10,
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
    id: '2',
    date: '30.11.21',
    duration: '16:20',
    privateCast: false,
    published: true,
    links: [
      // {
      //   provider: youTubeProvider,
      //   href: 'abc',
      // },
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
          height: 'calc(17.875rem + 1.5vmax)',
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
