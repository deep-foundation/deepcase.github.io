import { useCallback, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, HStack, useMediaQuery, usePrefersReducedMotion, keyframes, Wrap, WrapItem, Center, VStack } from "@chakra-ui/react";
import { UpperMenu, useSwitcherModalTalks } from "./upper-menu";
import { motion, useAnimate } from "framer-motion";
import { AdaptiveSpace, Space } from "./space";
import { Switch } from "./switch-mode";
import { GitpodButton2 } from "./gitpod-button";
import { TalksForm } from "./talks-form";
import { DeepMainTheses } from "./thesis/deep-main-theses";
import { FlagsWithText } from "./flags-with-text";
import { FlexSection, FluidGrid, GridArea } from "./layout";
import { IntroDesktop, Welcome } from './intro/intro-desktop';
import { IntroMobile } from './intro/intro-mobile';
import { H2 } from './headers';
import { ArticlesGallery } from './article/grid';
import { PodcastsScroll } from './podcast-gallery';
import { CrewCard } from './crew-card';
import { Footer } from './footer';
import { DeepFrameMouseTracking } from './flag/frame-mouse-tracking';
import { DeepFlag } from './flag/deep-flag';
import { Hands } from "./flags-icons/hands";
import { Cat } from "./flags-icons/cat";
import { Stairs } from "./flags-icons/stairs";
import { Tower } from "./flags-icons/tower";
import { DeepFrameMouseShift } from './flag/frame-mouse-shift';
import { Model, Scene } from './three-test/test';


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

const flags = [
  {
    id: 0,
    title: 'flag-title--operational-environment',
    subtitle: 'flag-description--operational-environment',
    description: 'flag-article--operational-environment',
    Icon: Stairs,
  },
  {
    id: 1,
    title: 'flag-title--new-programming-paradigm',
    subtitle: 'flag-description--new-programming-paradigm',
    description: 'flag-article--new-programming-paradigm',
    Icon: Cat,
  },
  {
    id: 2,
    title: 'flag-title--all-languages',
    subtitle: 'flag-description--all-languages',
    description: 'flag-article--all-languages',
    Icon: Tower,
  },
  {
    id: 3,
    title: 'flag-title--semantic-system',
    subtitle: 'flag-description--semantic-system',
    description: 'flag-article--semantic-system',
    Icon: Hands,
  },
];

const keyframe = keyframes`
  from {
    background-size: 65px 65px, 65px 65px, 65px 65px, 65px 65px, 65px 65px, 65px 65px;
  }
  to {
    background-size: 80px 80px, 80px 80px, 80px 80px, 80px 80px, 80px 80px, 80px 80px;
  }
`;

export function PageContent() {
  const { i18n, t } = useTranslation();
  // const [language, setLanguage] = useState(process.browser ? detectBrowserLanguage() : 'en-US');
  const changeLanguage = useCallback((lng) => {
    i18n.changeLanguage(lng);
  }, []);
  
  const [ openTalksModal, setOpenTalksModal ] = useSwitcherModalTalks();
  const scrollingRef = useRef<any>();
  const refMenuButtons = useRef<any>();
  
  useEffect(() => {
  }, []);
  
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
        as={motion.div}
        ref={scrollingRef} 
        sx={{
          position: 'absolute', 
          top: 0, 
          bottom: 0, 
          right: 0, 
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: 'bodyBg',
          backgroundImage: `linear-gradient(-90deg, ${'gridColor'} 1px, transparent 1px), linear-gradient(0deg, ${'gridColor'} 1px, transparent 1px), linear-gradient(transparent 0px, ${'bodyBg'} 1px, ${'bodyBg'} 80px, transparent 80px), linear-gradient(-90deg, ${'gridColor'} 1px, transparent 1px), linear-gradient(-90deg, transparent 0px, ${'bodyBg'} 1px, ${'bodyBg'} 80px, transparent 80px), linear-gradient(0deg, ${'gridColor'} 1px, transparent 1px)`,
          backgroundSize:'80px 80px, 80px 80px, 80px 80px, 80px 80px, 80px 80px, 80px 80px',
          backgroundPosition: 'center',
          overflowY: 'scroll',
          overflowX: 'hidden',
        }} 
        // @ts-ignore
        transition={{ 
          duration: 5,
          ease: "backInOut", 
        }}
      >
        <Space unit={5} />
         
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
        ? (<Box w='100%' h='max-content' display='flex' justifyContent='flex-end'>
            <GitpodButton2 />
          </Box>) 
        : null}

        <Center h='calc(100vh - 7.5rem)' w='100vw'>
          <DeepMainTheses />
        </Center>
        
        <Box display='flex' flexFlow='row' justifyContent='space-between'>

        <Box display='grid' gridTemplateColumns='repeat(2, 385px)' gridTemplateRows='repeat(2, 385px)' alignItems='center' justifyContent='flex-start' justifyItems='center' pl='4rem' position='relative' w='max-content'>
          {/* <FlagsWithText /> */}
          {flags.map((flag, index) => (
            <DeepFrameMouseShift 
              key={flag.id}
              subtitle={flag.subtitle}
              title={flag.title}
              description={flag.description}
              Icon = {flag.Icon}
              index={index}
            />
          ))}
        </Box>
        <Welcome />
        </Box>

        <Space unit={10} />
        <FlexSection direction='row' pl={{sm: '1rem', md: '2rem'}} overflow='hidden'>
          {desktop 
          ? <IntroDesktop />
          : <IntroMobile />}
        </FlexSection>

        <Space unit={max900 ? 9 : 6} />
        
        <Box as='section' overflow='hidden'>
          <GridArea component='div'>
            <H2>{t('posts-header')}</H2>
          </GridArea>
          <Space unit={3} />
          <FluidGrid>
            <ArticlesGallery />
          </FluidGrid>
        </Box>

        <Space unit={max900 ? 9 : 6} />

        <Box as='section'>
          <GridArea component='div'>
            <H2>{t('podcasts-header')}</H2>
          </GridArea>
          {/* <Space unit={3} /> */}
          <Box 
            w='100%'
            height='23rem' //'19rem'
            display='flex'
            flexDir='column'
            alignItems='center'
            justifyContent='center'
          >
            {/* <PodcastsGallery /> */}
            <PodcastsScroll />
          </Box>
        </Box>
        
        <Space unit={max900 ? 1 : 6} />

        {/* <GridArea>
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
        </GridArea> */}
        
        <Space unit={max900 ? 14 : 8} />
        <Scene />
        <Space unit={max900 ? 14 : 8} />
        <Footer />
      </Box>
    </>
  );
};