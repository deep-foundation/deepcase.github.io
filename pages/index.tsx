import * as Sentry from '@sentry/nextjs';
import { ChakraProvider, keyframes } from '../imports/framework';
import { PageContent } from '../imports/page';
import { Provider } from '../imports/provider';
import { theme } from '../imports/theme/build';


Sentry.init({
  dsn: "https://eb433b917ff04aa88678e074f4ee3c61@o871361.ingest.sentry.io/5940912",
  
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

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
    <Provider>
      <ChakraProvider theme={theme}>
        <PageContent/>
      </ChakraProvider>
    </Provider>
  );
};

