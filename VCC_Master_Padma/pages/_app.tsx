import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { StyleProvider, ThemePicker } from 'vcc-ui';
import Head from 'next/head';
import { FavIcons } from '@volvo-cars/favicons/react';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <StyleProvider>
        <ThemePicker variant="light">
          <Head>
            <title>Volvo Cars | Padma's Assignment</title>
            <FavIcons />
          </Head>
          <Component {...pageProps} />
        </ThemePicker>
      </StyleProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
