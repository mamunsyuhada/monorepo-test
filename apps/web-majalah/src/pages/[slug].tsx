import { Stack, Typography } from "@mui/material";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import {
  Magazine,
  StrapiResponseFailure,
  StrapiResponseSuccess,
} from "api-types";
import { HTTPError } from "ky-universal";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";

import { MainLayout } from "@/components/layouts";
import { DetailMagazine } from "@/features/detailMagazine";
import { api, queries } from "@/lib";
import { NextPageWithLayout } from "@/types/pages";

interface Props {
  draftMode?: string;
}

const EditionPage: NextPageWithLayout<Props> = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { data: post } = useQuery({
    ...queries.magazine.list({
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: [
        "cover",
        "editions.posts",
        "editions.posts.assets",
        "seo.metaImage",
        "seo.metaSocial.image",
      ],
    }),
    enabled: !!slug,
  });

  if (!router.isFallback && !post?.data[0]?.attributes.slug) {
    return (
      <Stack sx={{ height: 325 }} spacing={2}>
        <Stack sx={{ flex: 1, justifyContent: "center" }}>
          <Typography variant="body1" align="center">
            Majalah tidak dapat ditemukan
          </Typography>
        </Stack>
      </Stack>
    );
  }

  return (
    <>
      <Head>
        <title>{`${post?.data[0]?.attributes.title} - Insider`}</title>
        <meta
          name="description"
          content={`${post?.data[0]?.attributes.description}`}
        />
        <meta
          name="keywords"
          content={post?.data[0]?.attributes.seo?.keywords ?? ""}
        />
        {/* <meta
          name="viewport"
          content={post?.data[0]?.attributes.seo?.metaViewport ?? ""}
        /> */}
        <meta
          name="robots"
          content={post?.data[0]?.attributes.seo?.metaRobots ?? ""}
        />
        {/** Facebook Meta Tags */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={
            post?.data[0]?.attributes.seo?.metaSocial?.filter(
              (item) => item.socialNetwork === "facebook"
            )?.[0]?.title ?? ""
          }
        />
        <meta
          property="og:description"
          content={
            post?.data[0]?.attributes.seo?.metaSocial?.filter(
              (item) => item.socialNetwork === "facebook"
            )?.[0]?.description ?? ""
          }
        />
        <meta
          property="og:url"
          content={post?.data[0]?.attributes.seo?.canonicalURL ?? ""}
        />
        <meta
          property="og:image"
          content={
            post?.data[0]?.attributes.seo?.metaSocial?.filter(
              (item) => item.socialNetwork === "facebook"
            )?.[0]?.image?.data?.attributes.url
          }
        />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:site_name" content="inilah.com" />
        {/** Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@inilahdotcom" />
        <meta
          name="twitter:title"
          content={
            post?.data[0]?.attributes.seo?.metaSocial?.filter(
              (item) => item.socialNetwork === "twitter"
            )?.[0]?.title ?? ""
          }
        />
        <meta
          name="twitter:description"
          content={
            post?.data[0]?.attributes.seo?.metaSocial?.filter(
              (item) => item.socialNetwork === "twitter"
            )?.[0]?.description ?? ""
          }
        />
        <meta
          name="twitter:image"
          content={
            post?.data[0]?.attributes.seo?.metaSocial?.filter(
              (item) => item.socialNetwork === "twitter"
            )?.[0]?.image?.data?.attributes.url
          }
        />
        {/** Structured Data */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              post?.data[0]?.attributes.seo?.structuredData
            ),
          }}
          key="post-jsonld"
        />
      </Head>
      <DetailMagazine post={post?.data[0]} />
    </>
  );
};

EditionPage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryClient = new QueryClient();

  if (typeof params?.slug === "string" && params.slug !== "sw.js") {
    const { slug } = params;

    try {
      await Promise.all([
        queryClient.prefetchQuery(
          queries.magazine.list({
            filters: {
              slug: {
                $eq: slug,
              },
            },
            populate: [
              "cover",
              "editions.posts",
              "editions.posts.assets",
              "seo.metaImage",
              "seo.metaSocial.image",
            ],
          })
        ),
      ]);
    } catch (error) {
      if (error instanceof HTTPError) {
        const errorJson =
          (await error.response.json()) as StrapiResponseFailure;

        if (errorJson.error.message !== "Not Found") {
          console.log(`magazine slug failed to fetch: ${error}`);
        }
      }
    }
  }

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      slug: params?.slug,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: magazines } = await api
    .get("magazines")
    .json<StrapiResponseSuccess<Magazine>>();

  return {
    paths: magazines
      .map(({ attributes: { slug } }) => ({
        params: { slug: slug ?? undefined },
      }))
      .filter(({ params }) => !!params.slug),
    fallback: "blocking",
  };
};

export default EditionPage;
