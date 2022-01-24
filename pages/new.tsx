import { useMediaQuery } from '@material-ui/core';
import { darken } from '@material-ui/core/styles';
import { ArrowDropDown } from '@material-ui/icons';
import AppleIcon from '@material-ui/icons/Apple';
import BathtubIcon from '@material-ui/icons/Bathtub';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols';
import { default as GitHubIcon } from '@material-ui/icons/GitHub';
import * as Sentry from '@sentry/nextjs';
import cn from 'classnames';
import detectBrowserLanguage from 'detect-browser-language';
import moment from 'moment';
import dynamic from "next/dynamic";
import { useCallback, useRef, useState } from 'react';
import { CrewCard } from '../imports/crew-card';
import { Button, ButtonGroup, GravityCard, Grid, Link, makeStyles, Menu, MenuItem, Paper, Typography } from '../imports/framework';
import { Podcast } from '../imports/podcast/podcast-card';
import { Provider } from '../imports/provider';
import { Slider } from '../imports/slider';
import { Space } from '../imports/space';
import { SpecialCard } from '../imports/special-card';
import { UpperMenu } from '../imports/upper-menu';
import { CarouselPodcast, SpecialCardSlider } from '../imports/special-card-slider';
import { TalkingPoints } from '../imports/talking-points';
import { IFrame } from '../imports/iframe';

Sentry.init({
  dsn: "https://eb433b917ff04aa88678e074f4ee3c61@o871361.ingest.sentry.io/5940912",
  
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const Waitlist: any= dynamic(() => import("waitlistapi").then(w => w.Waitlist), { ssr: false });

export function NPMBadge({ name } : { name: string }) {
  return <a href={`https://badge.fury.io/js/${encodeURIComponent(name)}`}><img src={`https://badge.fury.io/js/${encodeURIComponent(name)}.svg`} alt="npm version" height="18"/></a>;
}

const deepgraphProject = <Link href="https://github.com/deepcase/deepgraph"><GravityCard style={{ height: 150 }}><div style={{ padding: 16, width: '100%' }}>
<Typography variant="body1">Deep.Links</Typography>
<Typography variant="body2">Graphql access to links models with gui, admin panel, permissions...</Typography>
<GitHubIcon /> <NPMBadge name="@deepcase/deepgraph"/>
</div></GravityCard></Link>;

const deepgraphPackage = <Link href="https://github.com/deepcase/deepgraph"><GravityCard style={{ height: 150 }}><div style={{ padding: 16, width: '100%' }}>
<Typography variant="body2">@deepcase/deepgraph</Typography>
<Typography variant="body2">Graphql access to links models with multilang event handlers.</Typography>
<GitHubIcon /> <NPMBadge name="@deepcase/deepgraph"/>
</div></GravityCard></Link>;

const deepview = <GravityCard style={{ height: 150 }} disabled><div style={{ padding: 16, width: '100%' }}>
<Typography variant="body1">Deep.View</Typography>
<Typography variant="body2">Virtual DOM react/vue/angular in Deep.Graph.</Typography>
<Typography variant="body2">Coming soon...</Typography>
</div></GravityCard>;
export interface IProvider { 
  icon: string;
  alt: string;
  title: string;
}

export interface ICard {
  id: string;
  src: string;
  srcPng: string;
  guestName: string;
  occupation: string;
  date: string;
  length: string;
  links: { provider: IProvider, href: string }[];
  imgs: {
    id: string;
    alt: string;
    src: string;
    top: number;
    left: number;
    width: number;
  }[];
  privateCast?: boolean;
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

const _podcasts: ICard[] = [
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
const podcasts = ([
  ..._podcasts,
  ..._podcasts,
  ..._podcasts,
  ..._podcasts,
  ..._podcasts,
  ..._podcasts,
]).map((v: any, i) => { v.id = `${i}`; return v; });

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
    role: 'WHO',
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
// const specialCards = ([
//   ..._specialCards,
//   ..._specialCards,
//   ..._specialCards,
//   ..._specialCards,
// ]).map((v: any, i) => { v.id = `${i}`; return v; });

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
    overflowY: 'scroll',
    overflowX: 'hidden',
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
  titleDC: {
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
  screen2: {
    paddingTop: 100,
    paddingBottom: 100,
    userSelect: 'none',
  },
  screen2accent: {
  },
  screen2InnerContainer: {
  },
  specialCardContainer: {
    height: '35rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(250px, 1fr))',
    columnGap: '1rem',
  },
  specialCardContainerMobile: {
    height: '33rem',
  },
  screen3: {
    background: '#00000040',
    paddingTop: 100,
    paddingBottom: 100,
    border: '1px dashed #ffffff40',
  },
  screen4: {
    background: darken(theme?.palette?.background?.default, 0.45),
    paddingTop: 100,
    paddingBottom: 100,
  },
  screen5: {
    paddingTop: 100,
    paddingBottom: 100,
  },
  screen6: {
    background: darken(theme?.palette?.background?.default, 0.45),
    paddingTop: 100,
    paddingBottom: 100,
  },
  screen7: {
    background: darken(theme?.palette?.background?.default, 0.4),
    paddingTop: 100,
    paddingBottom: 100,
  },
  screen8: {
    background: darken(theme?.palette?.background?.default, 0.3),
    paddingTop: 100,
    paddingBottom: 100,
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
  }
}));

export default function Page() {
  return (
    <Provider>
      <PageContent/>
    </Provider>
  );
}

export function PageContent() {
  const classes = useStyles();
  const [language, setLanguage] = useState(process.browser ? detectBrowserLanguage() : 'en-US');
  const [electronOpen, setElectronOpen] = useState(null);
  const refScrollContainer = useRef();
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

  return (<><UpperMenu scrollContainer={refScrollContainer} refMenuButtons={refMenuButtons} />
    <Grid container className={classes.root} justify="center" alignItems="center" ref={refScrollContainer} component='main'>
      <Space unit={7} />
      { max825 
      ? <>
          <div className={classes.menuButtons} ref={refMenuButtons}>
            <Button variant="text">Docs</Button>
            <Button variant="text">Talks</Button>
            <Button variant="text" href="https://github.com/deepcase/deepcase">GitHub</Button>
            {/* <IconButton component={'a'} href="https://github.com/deepcase/deepcase"><GitHub style={{color: '#fff'}}/></IconButton> */}
          </div>
          <Space />
        </>
      : <Space unit={4} />
      }
      <Grid item xs={12} component='section' className={classes.talkingPoints}>
        <TalkingPoints refScrollContainer={refScrollContainer}/>
      </Grid>
      <Grid item xs={12} component='section'>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={8} className={classes.screen1GridItem} component={Paper} elevation={0}>
            
            <div className={ classes.titleDC }>
              <Typography align="left" variant="h4">Deep.Case</Typography>
              <Typography align="left" variant="body2">pre alpha version</Typography>
            </div>
            <img src="/screen1.png" style={{ width: '100%' }}/>
            {/* <IFrame src='http://deep.deep.foundation:3007/' /> */}
            <Grid container className={classes.screen1Buttons} spacing={1} justify="flex-end">
              <Grid item xs={12}><Button
                variant="outlined" color="primary"
                size="large"
              ><div>
                <Typography variant='body2'>GitPod</Typography>
                <Typography variant="caption">(cloud demo)</Typography>
              </div></Button></Grid>
              <Grid item xs={12}>
                <ButtonGroup variant="outlined">
                  <Button
                    variant="contained" color="primary"
                    size="large"
                  ><div>
                    <Typography variant='body2'>Download</Typography>
                    <Typography variant="caption">(electron)</Typography>
                  </div></Button>
                  <Button
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
      <Space unit={4} />
      <Grid container style={{ position: 'relative', flexWrap: 'nowrap' }} direction='row' component='section' className={classes.section}>
        <Paper className={classes.screenPodcast}>
          {/* <Slider items={podcasts} width={400} visible={5}>
            {(p) => (
              <div key={p.id} style={{ height: '20rem', padding: '2rem 2rem', boxSizing: 'border-box' }}>
                <Podcast card={p}/>
              </div>
            )} 
          </Slider> */}
          <CarouselPodcast />
          {/* <div className={classes.gridPodcast}>
            {podcasts.map((p) => (
              <div key={p.id} style={{ height: '20rem', padding: '2rem 2rem', boxSizing: 'border-box' }}>
                <Podcast guestName={p.guestName} guestImgSrc={p.src} date={moment().format('D MMM YY')} length={p.length} imgs={p.imgs} occupation={p.occupation} />
              </div>
            )) }
          </div> */}
        </Paper>
      </Grid>
      <Grid item xs={12} className={cn(classes.screen2, classes.section)} component='section' container justify="center" alignItems="center">
        <Grid item xs={12} lg={11} xl={8} className={classes.screen2InnerContainer}>
          <div className={!smDown ? classes.specialCardContainer : classes.specialCardContainerMobile}>
            { smDown
            ? <SpecialCardSlider cardsContent={specialCards} itemsPerSlide={up870 ? 2 : 3} />
            // <Slider items={specialCards} width={400} visible={2}>
            // {(s) => (
            //   <div key={s.id} style={{ height: 'auto', padding: '2rem 2rem', boxSizing: 'border-box' }}>
            //     <SpecialCard
            //       icon1={s.icon1}
            //       icon2={s.icon2}
            //       icon3={s.icon3}
            //       title={s.title} 
            //       description={s.description}
            //     />
            //   </div>
            //   )} 
            // </Slider>
            : specialCards.map(c => (
                <SpecialCard
                  key={c.id}
                  icon1={c.icon1}
                  icon2={c.icon2}
                  icon3={c.icon3}
                  title={c.title}
                  description={c.description}
                />
                ))}
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12} className={cn(classes.screen3, classes.section)} component='section' container justify="center" alignItems="center">
        <Grid item xs={12} sm={10} md={8} className={classes.sectionContent}>
          <Typography align="left" variant="h2">Crew</Typography>
          <Space />
          <div className={classes.crewContainer}>
            {crew.map(i => (
                <CrewCard key={i.id} src={i.src} alt={i.alt} name={i.name} role={i.role} />
            ))}
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12} className={cn(classes.screen3, classes.section)} component='section' container justify="center" alignItems="center">
        <Grid item xs={12} sm={10} md={8} lg={7} className={classes.sectionContent}>
          <Typography align="right" variant="h3">Associative handlers</Typography>
          <Typography align="left">Coming soon...</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} className={cn(classes.screen4, classes.section)} component='section' container justify="center" alignItems="center">
        <Grid item xs={12} sm={10} md={8} lg={7}>
          <Typography align="left" variant="h3">Associative models</Typography>
          <Typography align="left">Coming soon...</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} className={cn(classes.screen5)} container justify="center" alignItems="center">
        <Grid item xs={12} sm={10} md={8} lg={7} component={Paper} elevation={0}>
          <Typography align="center" variant="h3">Used technologies</Typography>
          <Typography align="left">Coming soon...</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} className={cn(classes.screen6)} component={Paper} container justify="center" alignItems="center">
        <Grid item xs={12} sm={10} md={8} lg={7}>
          <Typography align="right" variant="h3">Performance</Typography>
          <Typography align="left">Coming soon...</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} className={cn(classes.screen7)} component={Paper} container justify="center" alignItems="center">
        <Grid item xs={12} sm={10} md={8} lg={7}>
          <Typography align="left" variant="h3">Transactions</Typography>
          <Typography align="left">Coming soon...</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} className={cn(classes.screen8)} component={Paper} container justify="center" alignItems="center">
        <Grid item xs={12} sm={10} md={8} lg={7}>
          <Typography align="right" variant="h3">Engines</Typography>
          <Typography align="left">Coming soon...</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} className={cn(classes.screen5)} container justify="center" alignItems="center">
        <Grid item xs={12} sm={10} md={8} lg={7} component={Paper} elevation={0}>
          <Typography align="center" variant="h3">Cloud solution</Typography>
          <Typography align="left">Coming soon...</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} className={cn(classes.screen2)} component={Paper} container justify="center" alignItems="center">
        <Grid item xs={12} sm={10} md={8} lg={7}>
          <Typography align="right" variant="h3">Roadmap</Typography>
          <Typography align="left">Coming soon...</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} className={cn(classes.screen3)} component={Paper} container justify="center" alignItems="center">
        <Grid item xs={12} sm={10} md={8} lg={7}>
          <Typography align="left" variant="h3">Articles</Typography>
          <Typography align="left">Coming soon...</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} className={cn(classes.screen4)} component={Paper} container justify="center" alignItems="center">
        <Grid item xs={12} sm={10} md={8} lg={7}>
          <Typography align="right" variant="h3">Invest</Typography>
          <Typography align="left">Coming soon...</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} className={cn(classes.screen5)} container justify="center" alignItems="center">
        <Grid item xs={12} sm={10} md={8} lg={7} component={Paper} elevation={0}>
          <Typography align="center" variant="h3">Community</Typography>
          <Typography align="left">Coming soon...</Typography>
        </Grid>
      </Grid>
    </Grid>
  </>);
};
