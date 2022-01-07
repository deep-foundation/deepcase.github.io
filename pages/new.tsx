import { darken } from '@material-ui/core/styles';
import { ArrowDropDown } from '@material-ui/icons';
import BathtubIcon from '@material-ui/icons/Bathtub';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols';
import AppleIcon from '@material-ui/icons/Apple';
import { default as GitHubIcon } from '@material-ui/icons/GitHub';
import * as Sentry from '@sentry/nextjs';
import cn from 'classnames';
import detectBrowserLanguage from 'detect-browser-language';
import disableScroll from 'disable-scroll';
import { times } from 'lodash';
import moment from 'moment';
import dynamic from "next/dynamic";
import { useCallback, useRef, useState } from 'react';
import { CrewCard } from '../imports/crew-card';
import { Button, ButtonGroup, GravityCard, IconButton, Link, makeStyles, Menu, MenuItem, Paper, Typography, Grid } from '../imports/framework';
import { IFrame } from '../imports/iframe';
import { SpecialCard } from '../imports/special-card';
import { Podcast } from '../imports/podcast/podcast-card';
import { Provider } from '../imports/provider';
import { Slider } from '../imports/slider';
import { UpperMenu } from '../imports/upper-menu';

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

const podcasts = times(15, (i) => ({
  id: i,
  src: '/mask.png',
  guestName: 'Elon Mask',
  occupation: 'magician',
  date: new Date(),
  length: '16:20',
  imgs: [{
    id: 'a',
    src: '/paypal.png',
    top: 2,
    left: 76,
    width: 22,
  },{
    id: 'b',
    src: '/tesla.png',
    top: 80,
    left: 82,
    width: 12,
  },{
    id: 'c',
    src: '/spacex.png',
    top: 50,
    left: 16,
    width: 24,
  }]
}));

const crew = [
  {
    id: 1,
    src: '/avatars/ivan.webp',
    alt: 'founder',
  },
  {
    id: 2,
    src: '/avatars/const.webp',
    alt: 'founder',
  },
  {
    id: 3,
    src: '/avatars/serg.webp',
    alt: 'founder',
  },
  {
    id: 4,
    src: '/avatars/sergey.webp',
    alt: 'founder',
  },
  {
    id: 5,
    src: '/avatars/tim.webp',
    alt: 'founder',
  },
  {
    id: 6,
    src: '/avatars/petr.webp',
    alt: 'founder',
  }
]

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
  screen1GridItem: {
    paddingTop: 100, paddingBottom: 100,
    position: 'relative'
  },
  screen1Buttons: {
    position: 'absolute',
    bottom: 100, right: 0,
  },
  screen2: {
    background: darken(theme?.palette?.background?.default, 0.3),
    paddingTop: 100,
    paddingBottom: 100,
    borderTop: '1px dashed #ffffff40',
  },
  screen2accent: {
    // background: darken(theme?.palette?.background?.default, 0.5),
    // width: '100%',
    // height: '100%',
  },
  screen3: {
    background: darken(theme?.palette?.background?.default, 0.4),
    paddingTop: 100,
    paddingBottom: 100,
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
    height: '20rem',
  },
  gridCrew: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    columnGap: '4vmin',
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

  const handleClick = useCallback((event) => {
    setElectronOpen(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setElectronOpen(null);
  }, []);

  return (<><UpperMenu scrollContainer={refScrollContainer} />
    <Grid container className={classes.root} justify="center" alignItems="center" ref={refScrollContainer}>
      <Grid item xs={12} sm={10} md={8} lg={7}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={10} className={classes.screen1GridItem} component={Paper} elevation={0}>
            <div style={{ marginBottom: -45, zIndex: 1, position: 'relative' }}>
              <Typography align="left" variant="h4">Deep.Case</Typography>
              <Typography align="left" variant="h5">pre alpha version</Typography>
            </div>
            <img src="/screen1.png" style={{ width: '100%' }}/>
            {/* <IFrame src='/screen1.png' /> */}
            <Grid container className={classes.screen1Buttons} spacing={1} justify="flex-end">
              <Grid item><Button
                variant="outlined" color="primary"
                size="large"
              ><div>
                <Typography>GitPod</Typography>
                <Typography variant="caption">(cloud demo)</Typography>
              </div></Button></Grid>
              <Grid item>
                <ButtonGroup variant="outlined">
                  <Button
                    variant="contained" color="primary"
                    size="large"
                  ><div>
                    <Typography>Download</Typography>
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
      <Grid container style={{ position: 'relative', flexWrap: 'nowrap' }} direction='row' onMouseOver={() => {
        disableScroll.on();
      }} onMouseLeave={() => {
        disableScroll.off();
      }}>
        <Paper className={classes.screenPodcast}>
        <Slider items={podcasts} width={400} visible={5}>
          {(p) => (
            <div style={{ height: '20rem', padding: '2rem 2rem', boxSizing: 'border-box' }}>
              <Podcast guestName={p.guestName} guestImgSrc={p.src} date={moment().format('D MMM YY')} length={p.length} imgs={p.imgs} occupation={p.occupation} />
            </div>
          )} 
        </Slider>
        </Paper>
      </Grid>
      <Grid item xs={12} className={cn(classes.screen2)} component={Paper} container justify="center" alignItems="center">
        <Grid item xs={12} sm={10} md={8} lg={10}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <SpecialCard
                icon={<BathtubIcon />}
                title='Операционное пространство' 
                description='Немного текста о том, почему это хорошо или просто необходимо'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <SpecialCard
                icon={<BeachAccessIcon />}
                title='Новая парадигма программирования' 
                description='Немного текста о том, почему это хорошо или просто необходимо'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <SpecialCard
                icon={<EmojiSymbolsIcon />}
                title='Любые языки и стеки' 
                description='Немного текста о том, почему это хорошо или просто необходимо'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <SpecialCard
                icon={<AppleIcon />}
                title='Гибкие правила' 
                description='Немного текста о том, почему это хорошо или просто необходимо'
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className={cn(classes.screen3)} component={Paper} container justify="center" alignItems="center">
        <Grid item xs={12} sm={10} md={8} lg={7}>
          <Typography align="left" variant="h3">Crew</Typography>
          <Grid container alignItems='center' justify='center' spacing={6}>
            {crew.map(i => (<Grid item xs={12} sm={4} md={3} lg={2}>
              <CrewCard key={i.id} src={i.src} alt={i.alt} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className={cn(classes.screen3)} component={Paper} container justify="center" alignItems="center">
        <Grid item xs={12} sm={10} md={8} lg={7}>
          <Typography align="right" variant="h3">Associative handlers</Typography>
          <Typography align="left">Coming soon...</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} className={cn(classes.screen4)} component={Paper} container justify="center" alignItems="center">
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
