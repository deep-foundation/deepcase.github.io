import * as Sentry from '@sentry/nextjs';
import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticlesGrid } from '../imports/article';
import { CrewCard } from '../imports/crew-card';
import { DeepMainTheses } from '../imports/deep-main-theses-copy';
import { CarouselPodcast } from '../imports/flags-slider';
import { FlagsWithText } from '../imports/flags-with-text';
import { Footer } from '../imports/footer';
import { Box, Button, ChakraProvider, HStack, keyframes, useMediaQuery, usePrefersReducedMotion, Wrap, WrapItem } from '../imports/framework';
import { H2 } from '../imports/headers';
import { IntroDesktop } from '../imports/intro/intro-desktop';
import { IntroMobile } from '../imports/intro/intro-mobile';
import { FlexSection, GridArea } from '../imports/layout';
import { Provider } from '../imports/provider';
import { AdaptiveSpace, Space } from '../imports/space';
import { TalksForm } from '../imports/talks-form';
import { theme } from '../imports/theme/build';
import { UpperMenu, useSwitcherModalTalks } from '../imports/upper-menu';
import { GitpodButton, GitpodButton2 } from '../imports/gitpod-button';


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

export default function Page () {
  return (
    <ChakraProvider theme={theme}>
      <Provider>
        <PageContent/>
      </Provider>
    </ChakraProvider>
  );
};

export function PageContent() {
  const { i18n, t } = useTranslation();
  // const [language, setLanguage] = useState(process.browser ? detectBrowserLanguage() : 'en-US');
  const changeLanguage = useCallback((lng) => {
    i18n.changeLanguage(lng);
  }, []);
  
  const [ openTalksModal, setOpenTalksModal ] = useSwitcherModalTalks();
  const scrollingRef = useRef<any>();
  const refMenuButtons = useRef();
  
  const [desktop] = useMediaQuery('(min-width: 768px)');
  const [max825] = useMediaQuery('(max-width: 825px)');
  const [min826] = useMediaQuery('(min-width: 826px)');
  const [max900] = useMediaQuery('(max-width: 900px)');

  const onOpenTalksModal = useCallback(() => setOpenTalksModal(true), []);
  const onCloseTalksModal = useCallback(() => setOpenTalksModal(false), []);

  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${keyframe} 5s ease`;

  return (<>
      <UpperMenu scrollContainer={scrollingRef} refMenuButtons={refMenuButtons} onChangeLanguage={changeLanguage} />
      <Box 
        as='main' 
        ref={scrollingRef} 
        sx={{
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
        }} 
        animation={animation}
      >
        <Space unit={6} />
         
        { max825 && <>
          <Box display='flex' justifyContent='space-between'>

            <HStack ref={refMenuButtons}>
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
            <GitpodButton2 />
          </Box>
          <Space />
          <TalksForm portalOpen={openTalksModal} onClosePortal={onCloseTalksModal} />
        </> }
        
        {/* <Box 
          as='section'
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            maxH: '80vh',
          }}
        >
          <Blob />
        </Box> */}

        {min826 
        ? (<><AdaptiveSpace unit={{sm: 0, md: 3}} />
            <Box w='100%' h='max-content' display='flex' justifyContent='flex-end'>
              <GitpodButton />
            </Box>
          <AdaptiveSpace unit={{sm: '2rem', md: '3rem'}} /></>) 
        : null}

        <AdaptiveSpace unit={{sm: 2, md: 0}} />
        <DeepMainTheses />
        <AdaptiveSpace unit={{sm: '2rem', md: '6rem'}} />

        
        <GridArea>
          <FlagsWithText />
        </GridArea>

        <Space unit={10} />
        <FlexSection direction='row' pl={{sm: '1rem', md: '2rem'}}>
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
            {/* <CarouselPodcast /> */}
          </Box>
        </Box>
        
        <Space unit={max900 ? 14 : 6} />

        <GridArea>
          <H2>Crew</H2>
          <AdaptiveSpace unit={{sm: 0, md: 5}} />
          <Wrap 
            justify='center' 
            align='center' 
            spacing='7rem' 
            display='flex'
            alignItems='center'
            width='calc(100% + 2rem)'
            height='calc(100% + 4rem)'
          >
            {crew.map(i => (
              <WrapItem key={i.id} >
                <CrewCard src={i.src} alt={i.alt} name={i.name} role={i.role} />
              </WrapItem>
            ))}
          </Wrap>
        </GridArea>
        
        <Space unit={max900 ? 14 : 8} />
        <Footer />
      </Box>
    </>
  );
};
