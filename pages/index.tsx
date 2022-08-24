import * as Sentry from '@sentry/nextjs';
import { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { BsArrowsFullscreen } from 'react-icons/bs';
import { ButtonGroupDownload } from '../imports/button-group-download';
import { CrewCard } from '../imports/crew-card';
import { CarouselPodcast } from '../imports/flags-slider';
import { FlagsWithText } from '../imports/flags-with-text';
import { Footer } from '../imports/footer';
import { Box, Button, HStack, IconButton, keyframes, Link, Stack, Text, useMediaQuery, usePrefersReducedMotion, Wrap, WrapItem, Center } from '../imports/framework';
import { H2 } from '../imports/headers';
import { IFrame } from '../imports/iframe';
import { IntroMobile } from '../imports/intro/intro-mobile';
import { IntroDesktop } from '../imports/intro/intro-desktop';
import { FlexSection, GridArea } from '../imports/layout';
import { Provider } from '../imports/provider';
import { AdaptiveSpace, Space } from '../imports/space';
import { TalkingPoints } from '../imports/talking-points';
import { TalksForm } from '../imports/talks-form';
import { theme } from '../imports/theme/build';
import { UpperMenu, useSwitcherModalTalks } from '../imports/upper-menu';
import { ArticlesGrid } from '../imports/article';
import { DeepMainTheses } from '../imports/deep-main-theses';


Sentry.init({
  dsn: "https://eb433b917ff04aa88678e074f4ee3c61@o871361.ingest.sentry.io/5940912",
  
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});


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
    alt: 'Petr DevOps',
    name: 'Petr',
    role: 'DevOps',
  },
  {
    id: 4,
    src: '/avatars/sergey.webp',
    alt: 'Sergey Business Operations',
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
  
const keyframe = keyframes`
  from {
    background-size: 65px 65px, 65px 65px, 65px 65px, 65px 65px, 65px 65px, 65px 65px;
  }
  to {
    background-size: 80px 80px, 80px 80px, 80px 80px, 80px 80px, 80px 80px, 80px 80px;
  }
`;
const root = {
  position: 'absolute', 
  top: 0, 
  bottom: 0, 
  right: 0, 
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: theme?.colors?.dark,
  backgroundImage: 'linear-gradient(-90deg, rgba(255, 255, 255,.08) 1px, transparent 1px), linear-gradient(rgba(255, 255, 255,.08) 1px, transparent 1px), linear-gradient(transparent 0px, #202a38 1px, #202a38 80px, transparent 80px), linear-gradient(-90deg, rgba(255, 255, 255,.8) 1px, transparent 1px), linear-gradient(-90deg, transparent 0px, #202a38 1px, #202a38 80px, transparent 80px), linear-gradient(rgba(255, 255, 255,.8) 1px, transparent 1px)',
  backgroundSize:'80px 80px, 80px 80px, 80px 80px, 80px 80px, 80px 80px, 80px 80px',
  backgroundPosition: 'center',
  overflowY: 'scroll',
  overflowX: 'hidden',
};


export default function Page () {
  return (
    <Provider>
      <PageContent/>
    </Provider>
  );
};

export function PageContent() {
  const { i18n, t } = useTranslation();
  // const [language, setLanguage] = useState(process.browser ? detectBrowserLanguage() : 'en-US');
  const changeLanguage = useCallback((lng) => {
    i18n.changeLanguage(lng);
  }, []);
  
  const [ openTalksModal, setOpenTalksModal ] = useSwitcherModalTalks();
  const scrollingRef = useRef(null);
  const refMenuButtons = useRef();

  const [desktop] = useMediaQuery('(min-width: 768px)');
  const [max825] = useMediaQuery('(max-width: 825px)');
  const [max900] = useMediaQuery('(max-width: 900px)');

  const onOpenTalksModal = useCallback(() => setOpenTalksModal(true), []);
  const onCloseTalksModal = useCallback(() => setOpenTalksModal(false), []);

  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${keyframe} 5s ease`;

  return (<>
      <UpperMenu scrollContainer={scrollingRef} refMenuButtons={refMenuButtons} onChangeLanguage={changeLanguage} />
      <Box as='main' ref={scrollingRef} sx={root} animation={animation}>
        <Space unit={6} />
         
        { max825 && <>
          <HStack ref={refMenuButtons} pl={1}>
            <Button 
              aria-label='documentation'
              as='a' target='_blank'
              variant='ghost'
              size='sm'
              href='https://ivansglazunov.notion.site/documentation-83e8d1fc18e644b6a66ff05cd3a2e157'
            >
              Docs
            </Button>
            <Button 
              aria-label='talks' 
              variant='ghost' 
              size='sm' 
              as='button' 
              onClick={onOpenTalksModal}
            >
              Talks
            </Button>
            <Button 
              as='a' 
              target='_blank'
              variant='ghost'
              aria-label='github repository deep foundation'
              size='sm'
              href='https://github.com/deep-foundation'
            >
              GitHub
            </Button>
          </HStack>
          <Space />
          <TalksForm portalOpen={openTalksModal} onClosePortal={onCloseTalksModal} />
        </> }
        
        <AdaptiveSpace unit={{sm: '2rem', md: '6rem'}} />
        <DeepMainTheses />
        <AdaptiveSpace unit={{sm: '2rem', md: '6rem'}} />
        
        <GridArea>
          <FlagsWithText />
        </GridArea>

        <Space unit={10} />
        <FlexSection direction='row' px={0}>
          {desktop 
          ? <IntroDesktop />
          : <IntroMobile />}
        </FlexSection>

        <Space unit={max900 ? 9 : 6} />
        
        <Box as='section'>
          <GridArea component='div'>
            <H2>{t('posts-header')}</H2>
          </GridArea>
          <Space unit={3} />
          <GridArea component='div' justifyItems='flex-start'>
            <ArticlesGrid />
          </GridArea>
        </Box>

        <Space unit={max900 ? 9 : 6} />

        <Box as='section'>
          <GridArea component='div'>
            <H2>{t('podcasts-header')}</H2>
          </GridArea>
          <Space unit={3} />
          <Box 
            w='100%'
            height='33rem'
            display='flex'
            flexDir='column'
            alignItems='center'
            justifyContent='center'
          >
            <CarouselPodcast />
          </Box>
        </Box>
        
        <Space unit={max900 ? 14 : 6} />

        <GridArea>
          <H2>Crew</H2>
          <Space unit={5} />
          <Wrap justify='center' spacing='7rem'>
            {crew.map(i => (
              <WrapItem key={i.id} >
                <CrewCard src={i.src} alt={i.alt} name={i.name} role={i.role} />
              </WrapItem>
            ))}
          </Wrap>
        </GridArea>
        
        <Space unit={max900 ? 14 : 6} />
        <Footer />
      </Box>
    </>
  );
};