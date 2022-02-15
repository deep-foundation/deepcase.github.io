import AppleIcon from '@material-ui/icons/Apple';
import BathtubIcon from '@material-ui/icons/Bathtub';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols';
import * as Sentry from '@sentry/nextjs';
import detectBrowserLanguage from 'detect-browser-language';
import { useCallback, useRef, useState } from 'react';
import { ButtonGroupDownload } from '../imports/button-group-download';
import { CrewCard } from '../imports/crew-card';
import { Box, Button, HStack, keyframes, Stack, Text, useMediaQuery, usePrefersReducedMotion, Wrap, WrapItem, Link } from '../imports/framework';
import { GridArea } from '../imports/grid-area';
import { H2 } from '../imports/headers';
import { IFrame } from '../imports/iframe';
import { Provider } from '../imports/provider';
import { Space } from '../imports/space';
import { CarouselPodcast } from '../imports/special-card-slider';
import { SpecialCardsText } from '../imports/special-cards-text';
import { TalkingPoints } from '../imports/talking-points';
import { TalksForm } from '../imports/talks-form';
import { theme } from '../imports/theme/build';
import { UpperMenu, useSwitcherModalTalks } from '../imports/upper-menu';

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
  const [language, setLanguage] = useState(process.browser ? detectBrowserLanguage() : 'en-US');
  
  const [ openTalksModal, setOpenTalksModal ] = useSwitcherModalTalks();
  const scrollingRef = useRef(null);
  const refMenuButtons = useRef();

  const [max825] = useMediaQuery('(max-width: 825px)');
  const [max900] = useMediaQuery('(max-width: 900px)');

  const onOpenTalksModal = useCallback(() => setOpenTalksModal(true), []);
  const onCloseTalksModal = useCallback(() => setOpenTalksModal(false), []);

  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${keyframe} 5s ease`;

  return (<>
      <UpperMenu scrollContainer={scrollingRef} refMenuButtons={refMenuButtons} />
      <Box as='main' ref={scrollingRef} sx={root} animation={animation}>
        <Space unit={7} />
         
        { max825 && <>
          <HStack ref={refMenuButtons}>
            <Button 
              aria-label='documents' 
              variant='ghost' 
              as='a'
              href='https://ivansglazunov.notion.site/documentation-83e8d1fc18e644b6a66ff05cd3a2e157'
            >Docs</Button>
            <Button aria-label='talks' variant='ghost' as='button' onClick={onOpenTalksModal}>Talks</Button>
            <Button aria-label='github repository deep foundation' as='a' variant='ghost' href="https://github.com/deep-foundation">GitHub</Button>
            {/* <Link 
              aria-label='documentation'
              // isExternal
              href='https://github.com/deep-foundation'>
              GitHub
            </Link> */}
          </HStack>
          <Space />
          <TalksForm portalOpen={openTalksModal} onClosePortal={onCloseTalksModal} />
        </> }
        
        <TalkingPoints refScrollContainer={scrollingRef} />
        
        {/* <GridArea>
          <IFrame 
            title={
              <HStack align='baseline' spacing={8} py='1rem'>
                <H2>Deep.Case</H2>
                <Text fontSize='sm' >pre alpha version</Text>
              </HStack>
            }
            src='http://deep.deep.foundation:3007/?bg-transparent=true'
            download={
              <Stack direction={max825 ? 'column' : 'row'} justify='center' spacing={10} p='1rem'>
                <Button aria-label='gitpod' variant="outline" colorScheme="second" size="lg">
                  <HStack>
                    <Text fontSize='sm'>GitPod</Text>
                    <Text fontSize='xs'>(cloud demo)</Text>
                  </HStack>
                </Button>
                <ButtonGroupDownload />
              </Stack>
            }
          />
        </GridArea> */}
        
        <Space unit={10} />
        
        <GridArea>
          <SpecialCardsText />
        </GridArea>

        <Space unit={max900 ? 14 : 4} />

        <Box as='section'>
          <GridArea component='div'>
            <H2>Podcasts</H2>
          </GridArea>
          <Space unit={4} />
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
      </Box>
    </>
  );
};