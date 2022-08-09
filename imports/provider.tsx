import { LocalStoreProvider } from '@deep-foundation/store/local';
import { QueryStoreProvider } from '@deep-foundation/store/query';

import { Analitics } from './analitics';

export function Provider({
  children,
}: {
  theme?: any;
  children: JSX.Element;
}) {
  return (
    <Analitics
      yandexMetrikaAccounts={[84258358]}
      googleAnalyticsAccounts={['G-3WH4B0WR4L']}
    >
      <QueryStoreProvider>
        <LocalStoreProvider>
          {children}
        </LocalStoreProvider>
      </QueryStoreProvider>
    </Analitics>
  )
};
