import { dehydrate, QueryClient } from "@tanstack/query-core";
import { StrapiResponseFailure } from "api-types";
import { HTTPError } from "ky-universal";
import { GetStaticProps } from "next";
import Head from "next/head";
import * as React from "react";

import { MainLayout } from "@/components/layouts/MainLayout";
import { Home } from "@/features/home";
import { queries } from "@/lib";
import { NextPageWithLayout } from "@/types/pages";

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        {/** HTML Meta Tags */}
        <title>
          Majalah INSIDER | Liputan Mendalam Kasus Politik hingga Hukum
          Indonesia
        </title>
        <meta
          name="description"
          content="Temukan fakta yang belum pernah Anda dengar seputar politik, hukum, hingga ekonomi Indonesia di Majalah INSIDER. Akses gratis!"
        />
        <meta
          name="keywords"
          content="majalah online, majalah digital, majalah politik, majalah gratis"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="robots" content="index, follow" />
        {/** Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Informasi Terkini dan Berita Terbaru - Insider"
        />
        <meta
          property="og:description"
          content="Temukan fakta yang belum pernah Anda dengar seputar politik, hukum, hingga ekonomi Indonesia di Majalah INSIDER. Akses gratis!"
        />
        <meta property="og:url" content="https://www.inilah.com" />
        <meta
          property="og:image"
          content="https://c.inilah.com/reborn/2023/11/new_Icon_INILAH_512_59e9c1df81.png"
        />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:site_name" content="inilah.com" />
        {/** Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@inilahdotcom" />
        <meta
          name="twitter:title"
          content="Informasi Terkini dan Berita Terbaru Hari Ini - Insider"
        />
        <meta
          name="twitter:description"
          content="Temukan fakta yang belum pernah Anda dengar seputar politik, hukum, hingga ekonomi Indonesia di Majalah INSIDER. Akses gratis!"
        />
        <meta
          name="twitter:image"
          content="https://c.inilah.com/reborn/2023/11/new_Icon_INILAH_512_59e9c1df81.png"
        />
        {/** Structured Data */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Inilah.com",
              url: "https://www.inilah.com",
              sameAs: [
                "https://www.facebook.com/inilahmedia",
                "https://x.com/inilahdotcom",
                "https://www.instagram.com/inilah_com/",
              ],
              logo: "https://c.inilah.com/reborn/2023/11/new_Icon_INILAH_512_59e9c1df81.png",
            }),
          }}
          key="post-jsonld"
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://www.inilah.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.inilah.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
          key="post-jsonld"
        />
      </Head>
      <Home />
    </>
  );
};

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  try {
    await Promise.all([
      queryClient.prefetchInfiniteQuery(
        queries.edition.infinite({
          sort: "publishedAt:desc",
          populate: ["magazine.cover", "posts", "posts.assets"],
          pagination: {
            pageSize: 5,
          },
        })
      ),
    ]);
  } catch (error) {
    if (error instanceof HTTPError) {
      const errorJson = (await error.response.json()) as StrapiResponseFailure;

      if (errorJson.error.message !== "Not Found") {
        console.log(`Magazine failed to fetch: ${error}`);
      }
    }
  }

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
    revalidate: 60,
  };
};

export default HomePage;
