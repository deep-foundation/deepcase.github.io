import * as Sentry from '@sentry/nextjs';
import { useCallback, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticlesGrid } from '../imports/article/article';
import { CrewCard } from '../imports/crew-card';
import { DeepMainTheses } from '../imports/deep-main-theses-copy';
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
import { motion } from 'framer-motion';
import { PodcastsGallery, PodcastsScroll } from '../imports/podcast-gallery';
import { ArticleGrid } from '../imports/article/article-grid';
import { ArticlesGallery } from '../imports/article/grid';
import { Switch } from '../imports/switch-mode';
import { PageContent } from '../imports/page';


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

