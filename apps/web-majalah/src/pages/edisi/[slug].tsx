import { Stack, Typography } from "@mui/material";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import {
  Post,
  StrapiResponseFailure,
  StrapiResponseSuccess,
  StrapiSingleResponseSuccess,
} from "api-types";
import { HTTPError } from "ky-universal";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";

import { MainLayout } from "@/components/layouts";
import { Edition } from "@/features/edition";
import { api, queries } from "@/lib";
import { NextPageWithLayout } from "@/types/pages";

interface Props {
  draftMode?: string;
}

const EditionPage: NextPageWithLayout<Props> = ({ draftMode }) => {
  const router = useRouter();
  const { slug } = router.query;
  const isDraftMode = draftMode === "true";

  const { data: post } = useQuery({
    ...queries.posts.detail(slug, {
      publicationState: isDraftMode ? "preview" : undefined,
      populate: [
        "assets",
        "document",
        "author.avatar",
        "category",
        "comments.user.avatar",
        "editors.avatar",
        "seo.metaImage",
        "seo.metaSocial.image",
        "tags",
        "sub_category",
        "likes",
        "bookmarks",
        "customUpdatedAt",
        "edition",
        "edition.posts",
        "edition.posts.assets",
        "edition.magazine",
      ],
    }),
    enabled: true,
  });

  if (!router.isFallback && !post?.data?.attributes.edition?.data) {
    return (
      <Stack sx={{ height: 325 }} spacing={2}>
        <Stack sx={{ flex: 1, justifyContent: "center" }}>
          <Typography variant="body1" align="center">
            Artikel tidak dapat ditemukan
          </Typography>
        </Stack>
      </Stack>
    );
  }

  return (
    <>
      <Head>
        <title>{`${post?.data?.attributes.title} - Insider`}</title>
        <meta
          name="description"
          content={`${post?.data?.attributes.subtitle}`}
        />
      </Head>
      <Edition post={post?.data} />
    </>
  );
};

EditionPage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps: GetStaticProps = async ({ params, draftMode }) => {
  const queryClient = new QueryClient();

  if (typeof params?.slug === "string" && params.slug !== "sw.js") {
    const { slug } = params;

    try {
      const { data: post } = await api
        .get(
          `posts/${slug}?${
            draftMode ? `publicationState=preview&` : ""
          }populate[0]=edition.magazine`
        )
        .json<StrapiSingleResponseSuccess<Post>>();

      await Promise.all([
        queryClient.prefetchQuery(
          queries.posts.detail(post?.attributes.slug, {
            publicationState: draftMode ? "preview" : undefined,
            populate: [
              "assets",
              "document",
              "author.avatar",
              "category",
              "comments.user.avatar",
              "editors.avatar",
              "seo.metaImage",
              "seo.metaSocial.image",
              "tags",
              "sub_category",
              "likes",
              "bookmarks",
              "customUpdatedAt",
              "edition",
              "edition.posts",
              "edition.posts.assets",
              "edition.magazine",
            ],
          })
        ),
        queryClient.prefetchQuery(
          queries.magazine.list({
            sort: "publishedAt:desc",
            filters: {
              slug: {
                $eq: `${post?.attributes.edition?.data?.attributes.magazine.data?.attributes.slug}`,
              },
            },
            populate: [
              "cover",
              "edition",
              "editions.posts",
              "editions.posts.assets",
              "magazine",
            ],
          })
        ),
      ]);
    } catch (error) {
      if (error instanceof HTTPError) {
        const errorJson =
          (await error.response.json()) as StrapiResponseFailure;

        if (errorJson.error.message !== "Not Found") {
          console.log(`edisi slug failed to fetch: ${error}`);
        }
      }
    }
  }

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      draftMode: draftMode ? "true" : "false",
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: posts } = await api
    .get("posts?sort=publishedAt:desc&pagination[pageSize]=100")
    .json<StrapiResponseSuccess<Post>>();

  return {
    paths: posts
      .map(({ attributes: { slug } }) => ({
        params: { slug: slug ?? undefined },
      }))
      .filter(({ params }) => !!params.slug),
    fallback: "blocking",
  };
};

export default EditionPage;
