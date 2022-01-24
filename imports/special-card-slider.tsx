import React, { useEffect } from 'react';

import { Carousel, CarouselItem } from 'react-round-carousel';
import { ICard, IProvider } from '../pages/new';
import { Podcast } from './podcast/podcast-card';
import { useSpringCarousel } from 'react-spring-carousel-js';
import ArrowLeftRoundedIcon from '@material-ui/icons/ArrowLeftRounded';
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';
import { SpecialCard } from './special-card';
import { useMediaQuery, makeStyles, Box, Button } from './framework';


const useStyles = makeStyles(theme => ({
  containerSpecialCardSlider: {
    display: 'flex',
    flexDirection: 'row',
    height: '33rem',
    position: 'relative',
    '& > :nth-child(1)': {
      left: 0,
    },
    '& > :nth-child(3)': {
      right: 0,
    }
  },
  button: {
    position: 'absolute',
    top: 0,
    height: '100%',
    zIndex: 11,
    background: '#202a3887',
  },
  buttonRoot: {
    '&:hover': {
      background: '#202a3887',
    }
  }
}));

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
    length: '16:20',
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
      id: 'c',
      alt: '',
      src: '/logo-speakers/ultratendency.svg',
      top: 58,
      left: 72,
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
    length: '16:20',
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
      top: 45,
      left: 68,
      width: 22,
    }]
  },
  {
    id: '7',
    src: '/speakers/asset_1.png',
    srcPng: '/speakers/dima.png',
    guestName: 'Виталий Шубин',
    occupation: 'владелец компании по IT разработке',
    date: '08.12.21',
    length: '16:20',
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
    length: '16:20',
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
    id: '4',
    src: '/speakers/semen.webp',
    srcPng: '/speakers/semen.png',
    guestName: 'Семен Гординов',
    occupation: 'ведущий программист',
    date: '14.12.21',
    length: '16:20',
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
];

const items: CarouselItem[] = podcasts.map( p => ({
    alt: '',
		image: '',
		content: (
			<Podcast card={p} />
		)
}));

export const CarouselPodcast = () => <Carousel items={items} itemWidth={600} />;


export const SpecialCardSlider = ({
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
				<SpecialCard
					icon1={c.icon1}
					icon2={c.icon2}
					icon3={c.icon3}
					title={c.title} 
					description={c.description}
				/>
			</div>)
		})),
  });
	
  const classes = useStyles();

  return (
    <div className={classes.containerSpecialCardSlider}>
      <Button className={classes.button} classes={{root: classes.buttonRoot}} onClick={slideToPrevItem}>
        <ArrowLeftRoundedIcon fontSize='large' />
      </Button>
      	{carouselFragment}
      <Button className={classes.button} classes={{root: classes.buttonRoot}} onClick={slideToNextItem}>
        <ArrowRightRoundedIcon fontSize='large' />
      </Button>
    </div>
  );
}
