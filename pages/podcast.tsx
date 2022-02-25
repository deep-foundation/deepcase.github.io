import React from 'react';
import { CgArrowLongLeftC, CgArrowLongRightC } from "react-icons/cg";
import { Carousel, CarouselItem } from 'react-round-carousel';
import { Podcast } from '../imports/podcast/podcast-card';
import { Provider } from '../imports/provider';
import { ICard, IProvider } from '../pages/parallax';
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

const podcasts: ICard[] = [
  {
    id: '1',
    src: '/speakers/eugene.webp',
    srcPng: '/speakers/eugene.png',
    guestName: 'Евгений',
    occupation: 'BigData Engineer из Ultra tendency International (Германия)',
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
      alt: '',
      src: '/logo-speakers/ultratendency.svg',
      top: 80,
      left: 12,
      width: 24,
    }]
  },
  {
    id: '2',
    src: '/speakers/dima_n.webp',
    srcPng: '/speakers/dima.png',
    guestName: 'Дмитрий Сотсков',
    occupation: 'директор компании Нэти Вэб',
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
      alt: '',
      src: '/logo-speakers/nite.png',
      top: 55,
      left: 75,
      width: 20,
    }]
  },
  {
    id: '7',
    src: '/speakers/asset_1.png',
    srcPng: '/speakers/dima.png',
    guestName: 'Виталий Шубин',
    occupation: 'владелец компании по IT разработке',
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
      alt: '',
      src: '/logo-speakers/single.svg',
      top: 70,
      left: 15,
      width: 42,
    }]
  },
  {
    id: '3',
    src: '/speakers/alexey.webp',
    srcPng: '/speakers/alexey.png',
    guestName: 'Алексей',
    occupation: 'аналитик в области оценки риска юр. лиц',
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
      alt: '',
      src: '/logo-speakers/exel.png',
      top: 2,
      left: 80,
      width: 22,
    },{
      id: 'b',
      alt: '',
      src: '/logo-speakers/sql.png',
      top: 55,
      left: 75,
      width: 18,
    },{
      id: 'c',
      alt: '',
      src: '/logo-speakers/java.png',
      top: 70,
      left: 6,
      width: 14,
    }]
  },
  {
    id: '17',
    src: '/speakers/ivan-speaker.webp',
    srcPng: '/speakers/ivan-speaker.png',
    guestName: 'Иван Ермолаев',
    occupation: 'Pазработчик',
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
      alt: 'java',
      src: '/logo-speakers/java.png',
      top: 70,
      left: 78,
      width: 16,
    },
    {
      id: 'b',
      alt: 'aws',
      src: '/logo-speakers/aws.png',
      top: 0,
      left: 65,
      width: 24,
    },
    {
      id: 'b',
      alt: 'spring',
      src: '/logo-speakers/spring.png',
      top: 50,
      left: 65,
      width: 24,
    },
    {
      id: 'b',
      alt: 'rust',
      src: '/logo-speakers/rust.svg',
      top: 70,
      left: 10,
      width: 14,
    }]
  },
  
  {
    id: '4',
    src: '/speakers/semen.webp',
    srcPng: '/speakers/semen.png',
    guestName: 'Семен Гординов',
    occupation: 'ведущий программист',
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
      alt: '',
      src: '/logo-speakers/php.png',
      top: 32,
      left: 73,
      width: 22,
    },{
      id: 'b',
      alt: '',
      src: '/logo-speakers/ims.png',
      top: 65,
      left: 5,
      width: 25,
    }]
  },
  {
    id: '5',
    src: '/speakers/vitaly.webp',
    srcPng: '/speakers/vitaly.png',
    guestName: 'Виталий',
    occupation: 'devOps / backend',
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
      alt: '',
      src: '/logo-speakers/php.png',
      top: 32,
      left: 73,
      width: 22,
    },{
      id: 'b',
      alt: '',
      src: '/logo-speakers/single.svg',
      top: 75,
      left: 5,
      width: 25,
    }
  ]
  },
  {
    id: '6',
    src: '/speakers/ivanSh.webp',
    srcPng: '/speakers/ivanSh.png',
    guestName: 'Иван Шилов',
    occupation: 'аналитик',
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
      alt: '',
      src: '/logo-speakers/sibur.png',
      top: 32,
      left: 73,
      width: 22,
    },
  ]
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
        <div style={{width: 'calc(21.875 + 1.5vmax)', height: 'calc(17.875 + 1.5vmax)'}}>
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
