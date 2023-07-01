import { useMediaQuery } from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';
import AppleIcon from '@material-ui/icons/Apple';
import BathtubIcon from '@material-ui/icons/Bathtub';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import detectBrowserLanguage from 'detect-browser-language';
import { useCallback, useRef, useState } from 'react';
import { CrewCard } from '../imports/crew-card';
import { Button, ButtonGroup, Grid, makeStyles, Menu, MenuItem, Paper, Typography } from '@material-ui/core';
import { IFrame } from '../imports/iframe';
import { ParallaxFlags } from '../imports/parallax-flags';
import { Provider } from '../imports/provider';
import { Space } from '../imports/space';
import { CarouselPodcast, FlagsSlider } from '../imports/flags-slider';
import { TalkingPoints } from '../imports/talking-points';
import { TalksForm } from '../imports/talks-form';
import { UpperMenu, useSwitcherModalTalks } from '../imports/upper-menu';
import * as Sentry from '@sentry/nextjs';
import { ICardPodcast } from '../imports/podcast/podcast-card';


Sentry.init({
  dsn: "https://eb433b917ff04aa88678e074f4ee3c61@o871361.ingest.sentry.io/5940912",
  
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});


export interface IProvider { 
  icon: string;
  alt: string;
  title: string;
}

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

const _podcasts: ICardPodcast[] = [
  {
    id: '1',
    duration: '16:20',
    date: '08.12.21',  
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
      altLogo: 'ultratendency',
      srcLogo: '/logo-speakers/ultratendency.svg',
      topLogo: 58,
      leftLogo: 72,
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
    duration: '16:20',
    date: '08.12.21', 
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
      altLogo: 'nite',
      srcLogo: '/logo-speakers/nite.png',
      topLogo: 45,
      leftLogo: 68,
      widthLogo: 22,
    }],
    speakers: [{
      id: '1',
      guestImgSrcPng: '/speakers/dima.png',
      guestImgSrcWebp: '/speakers/dima_n.webp',
      guestName: 'Дмитрий Сотсков',
      occupation: 'директор компании Нэти Вэб', 
    }],
  },
  {
    id: '7',
    duration: '16:20',
    date: '08.12.21', 
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
      altLogo: 'single',
      srcLogo: '/logo-speakers/single.svg',
      topLogo: 70,
      leftLogo: 15,
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
    duration: '16:20',
    date: '08.12.21',
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
      altLogo: 'exel',
      srcLogo: '/logo-speakers/exel.png',
      topLogo: 2,
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
    duration: '16:20',
    date: '14.12.21', 
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
];

const crew = [
  {
    id: 1,
    src: '/avatars/ivan.webp',
    alt: 'Ivan CEO',
    name: 'Ivan',
    role: 'CEO',
  },
  {
    id: 2,
    src: '/avatars/const.webp',
    alt: 'Konstantin Data',
    name: 'Konstantin',
    role: 'Data',
  },
  {
    id: 3,
    src: '/avatars/petr.webp',
    alt: 'founder',
    name: 'Petr DevOps',
    role: 'DevOps',
  },
  {
    id: 4,
    src: '/avatars/sergey.webp',
    alt: 'Sergey WHO',
    name: 'Sergey',
    role: 'Business Operations',
  },
  {
    id: 5,
    src: '/avatars/tim.webp',
    alt: 'Timothy Writer',
    name: 'Timothy',
    role: 'Writer',
  },
  {
    id: 6,
    src: '/avatars/serg.webp',
    alt: 'Sergey People',
    name: 'Sergey',
    role: 'People',
  },
  {
    id: 7,
    src: '/avatars/ya.webp',
    alt: 'Anastasia Front',
    name: 'Anastasia',
    role: 'Front',
  }
];

const specialCards = [
  {
    id: '1',
    icon1: <BathtubIcon />,
    icon2: <BathtubIcon color='secondary' />,
    icon3: <BathtubIcon color='error' />,
    title: 'Операционное пространство',
    description: 'Больше нет разницы между вашим рабочим столом и пространством вашего мышления',
  },
  {
    id: '2',
    icon1: <BeachAccessIcon />,
    icon2: <BeachAccessIcon color='secondary' />,
    icon3: <BeachAccessIcon color='error' />,
    title: 'Новая парадигма программирования',
    description: 'Мы реализовали язык без семантической и смысловой предрасположенности',
  },
  {
    id: '3',
    icon1: <EmojiSymbolsIcon />,
    icon2: <EmojiSymbolsIcon color='secondary' />,
    icon3: <EmojiSymbolsIcon color='error' />,
    title: 'Любые языки и стеки',
    description: 'Вы можете написать ExecutionProvider для любых языков программирования',
  },
  {
    id: '4',
    icon1: <AppleIcon />,
    icon2: <AppleIcon color='secondary' />,
    icon3: <AppleIcon color='error' />,
    title: 'Семантическая система прав',
    description: 'Всегда именно та система прав, которую вы хотите',
  },
];

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme?.palette?.background?.default,
     
    },
  },
  '@keyframes deeplinksBackground': {
    from: {
      backgroundSize: '65px 65px, 65px 65px, 65px 65px, 65px 65px, 65px 65px, 65px 65px',
    },
    to: {
      backgroundSize: '80px 80px, 80px 80px, 80px 80px, 80px 80px, 80px 80px, 80px 80px',
    },
  },
  section: {
    color: '#fff',
  },
  sectionContent: {
    padding: '0 2rem',
    '@media(max-width: 826px)': {
      padding: '0 1rem',
    }
  },
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: theme?.palette?.background?.default,
    backgroundImage: 'linear-gradient(-90deg, rgba(255, 255, 255,.08) 1px, transparent 1px), linear-gradient(rgba(255, 255, 255,.08) 1px, transparent 1px), linear-gradient(transparent 0px, #202a38 1px, #202a38 80px, transparent 80px), linear-gradient(-90deg, rgba(255, 255, 255,.8) 1px, transparent 1px), linear-gradient(-90deg, transparent 0px, #202a38 1px, #202a38 80px, transparent 80px), linear-gradient(rgba(255, 255, 255,.8) 1px, transparent 1px)',
    backgroundSize:'80px 80px, 80px 80px, 80px 80px, 80px 80px, 80px 80px, 80px 80px',
    backgroundPosition: 'center',
    overflow: 'hidden',
    animation: '5s $deeplinksBackground ease'
  },
  
  waitlistgrid: {
    '& *': {
      fontFamily: `${theme.typography.fontFamily} !important`,
    },
    '& > * > *': {
      maxWidth: '100% !important',
      padding: '0 !important',
    },
  },
  menuButtons: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginLeft: -8,
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
  talkingPoints: {
    paddingTop: 'calc(1rem + 0.9vmax)', 
    paddingBottom: 'calc(1rem + 0.9vmax)',
  },
  screen1GridItem: {
    paddingTop: 'calc(1rem + 0.9vmax)', paddingBottom: 'calc(1rem + 0.9vmax)',
    position: 'relative',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    '@media(max-width: 825px)': {
      paddingLeft: '1rem',
      paddingRight: '1rem',
    }
  },
  screen1Buttons: {
    width: 'min-content',
    position: 'absolute',
    bottom: 'calc(2rem + 0.5vmax)', right: '2rem',
    '@media(max-width: 825px)': {
      right: '1rem',
    },
    '@media(max-width: 675px)': {
      // bottom: 200
    }
  },
  screenPodcast: {
    width: '100%',
    height: '33rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  crewContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
    gridAutoRows: 'minmax(245px, 1fr)',
    justifyItems: 'center',
    alignItems: 'center',
    columnGap: '4vmin',
    rowGap: '4vmax',
  },
  gridPodcast: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridAreaWrap: {
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
  },
  sectionPositioningZone: {
    gridColumn: '2 / 8',
  },
  titleDC: {
    position: 'absolute',
    top: '-1rem',
    left: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    '& > :nth-child(1)': {
      marginRight: 'calc(1rem + 0.5vmax)',
    },
    '@media(max-width: 400px)': {
      flexDirection: 'column',
      marginBottom: '2rem',
    },
  },
  typographyDownload: {
    color: '#090b10',
  },
}));

export default function Page () {
  return (
    <Provider>
      <PageContent/>
    </Provider>
  );
};

export function PageContent() {
  const classes = useStyles();
  const [language, setLanguage] = useState(process.browser ? detectBrowserLanguage() : 'en-US');
  const [electronOpen, setElectronOpen] = useState(null);
  
  const [ openTalksModal, setOpenTalksModal ] = useSwitcherModalTalks();
  const parallaxRef = useRef<any>(null);
  const refMenuButtons = useRef();

  const handleClick = useCallback((event) => {
    setElectronOpen(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setElectronOpen(null);
  }, []);
  const smDown = useMediaQuery('@media(max-width: 1420px');
  const max825 = useMediaQuery('@media(max-width: 825px');
  const up870 = useMediaQuery('max-width: 870px');

  const onOpenTalksModal = useCallback(() => setOpenTalksModal(true), []);
  const onCloseTalksModal = useCallback(() => setOpenTalksModal(false), []);

  return (<>
      <UpperMenu scrollContainer={parallaxRef} refMenuButtons={refMenuButtons} />
      <div ref={parallaxRef} className={classes.root}>
        <Parallax pages={6}> 
          
            {/* <Space unit={7} /> */}
         <ParallaxLayer offset={max825 ? 0.2 : 0} speed={0}>
          { max825 && <>
              <div className={classes.menuButtons} ref={refMenuButtons}>
                <Button aria-label='documents' variant="text">Docs</Button>
                <Button aria-label='talks' variant="text" onClick={onOpenTalksModal}>Talks</Button>
                <Button aria-label='github ' variant="text" href="https://github.com/deepcase/deepcase">GitHub</Button>
              </div>
              <Space />
              <TalksForm portalOpen={openTalksModal} onClosePortal={onCloseTalksModal} />
            </>
          }
         </ParallaxLayer>
          
          <ParallaxLayer offset={0.1} speed={0}>
            <TalkingPoints refScrollContainer={parallaxRef}/>
          </ParallaxLayer>
          
          <ParallaxLayer offset={0.7} speed={0}>
          <Grid item xs={12} component='section'>
              <Grid container justify="center" alignItems="center">
                <Grid item xs={12} md={8} className={classes.screen1GridItem} component={Paper} elevation={0}>
                  <div className={ classes.titleDC }>
                    <Typography align="left" variant="h1">Deep.Case</Typography>
                    <Typography align="left" variant="body2">pre alpha version</Typography>
                  </div>
                  {/* <img src="/screen1.png" style={{ width: '100%' }}/> */}
                  <IFrame src='http://deep.deep.foundation:3007/' />
                  <Grid container className={classes.screen1Buttons} spacing={1} justify="flex-end">
                    <Grid item xs={12}><Button aria-label='gitpod'
                      variant="outlined" color="primary"
                      size="large"
                    ><div>
                      <Typography variant='body2'>GitPod</Typography>
                      <Typography variant="caption">(cloud demo)</Typography>
                    </div></Button></Grid>
                    <Grid item xs={12}>
                      <ButtonGroup aria-label='download deep case' variant="outlined">
                        <Button aria-label='download deep cased'
                          variant="contained" color="primary"
                          size="large"
                        ><div>
                          <Typography variant='body2' className={classes.typographyDownload}>Download</Typography>
                          <Typography variant="caption" className={classes.typographyDownload}>(electron)</Typography>
                        </div></Button>
                        <Button aria-label='select format file '
                          variant="outlined" color="primary"
                          onClick={handleClick}
                        ><div>
                        <ArrowDropDown />
                      </div></Button>
                      </ButtonGroup>
                      <Menu
                        anchorEl={electronOpen}
                        keepMounted
                        open={!!electronOpen}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={handleClose}>.app</MenuItem>
                        <MenuItem onClick={handleClose} disabled>.exe</MenuItem>
                        <MenuItem onClick={handleClose} disabled>.deb</MenuItem>
                      </Menu>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </ParallaxLayer>
          { smDown
          ?  <ParallaxLayer offset={2} speed={0}>
              <FlagsSlider cardsContent={specialCards} itemsPerSlide={up870 ? 2 : 3} />
             </ParallaxLayer>
          : <ParallaxFlags />
          }
          <ParallaxLayer offset={4.5} speed={0}>
            {smDown && <Space unit={4} />}
            <div className={classes.gridAreaWrap}>
              <div className={classes.sectionPositioningZone}>
                <Typography align="left" variant="h2">Podcasts</Typography>
              </div>
            </div>
              <Space unit={5} />
            <Paper className={classes.screenPodcast}>
              <CarouselPodcast />
            </Paper>
          </ParallaxLayer>
          
          <ParallaxLayer offset={5.3} speed={0.1}>
            <div className={classes.gridAreaWrap}>
              <div className={classes.sectionPositioningZone}>
                <Typography align="left" variant="h2">Crew</Typography>
                <Space unit={5} />
                <div className={classes.crewContainer}>
                  {crew.map(i => (
                    <CrewCard key={i.id} src={i.src} alt={i.alt} name={i.name} role={i.role} />
                  ))}
                </div>
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
};