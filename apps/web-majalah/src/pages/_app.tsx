import "../global.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { HTTPError } from "ky-universal";
import { AppProps } from "next/app";
import Head from "next/head";
import * as React from "react";

import { theme } from "@/theme";
import { NextPageWithLayout } from "@/types/pages";

import createEmotionCache from "../createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
};

const MAX_RETRIES = 3;
const HTTP_STATUS_TO_NOT_RETRY = [400, 401, 403, 404];

export default function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity, // Always keep the data fresh (no background refetch)
            retry: (failureCount, error) => {
              if (failureCount > MAX_RETRIES) {
                return false;
              }

              if (
                error instanceof HTTPError &&
                HTTP_STATUS_TO_NOT_RETRY.includes(error.response.status)
              ) {
                console.log(
                  `Aborting retry due to ${error.response.status} status`
                );
                return false;
              }

              return true;
            },
          },
        },
      })
  );

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Insider</title>
        <meta
          name="description"
          content="Sajian berita terbaru hari ini seputar politik, hukum, kriminal, olahraga, otomotif, hingga teknologi, di Indonesia dan dunia."
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssVarsProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline enableColorScheme />
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            {getLayout(<Component {...pageProps} />)}
          </Hydrate>
        </QueryClientProvider>
      </CssVarsProvider>
    </CacheProvider>
  );
}
