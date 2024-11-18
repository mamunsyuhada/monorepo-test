import { dehydrate, QueryClient } from "@tanstack/query-core";
import { StrapiResponseFailure } from "api-types";
import { HTTPError } from "ky-universal";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { MainLayout } from "@/components/layouts";
import { Search } from "@/features/search";
import { queries } from "@/lib";
import { NextPageWithLayout } from "@/types/pages";

const SearchPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { q } = router.query;

  return (
    <>
      <Head>
        <title>
          {`Pencarian ${typeof q === "string" ? q : ""} - Inilah.com`}
        </title>
      </Head>
      <Search query={typeof q === "string" ? q : undefined} />
    </>
  );
};

SearchPage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  try {
    await Promise.all([
      queryClient.prefetchInfiniteQuery(
        queries.magazine.infinite({
          sort: "publishedAt:desc",
          populate: ["cover"],
          filters: {
            title: {
              $containsi: "",
            },
          },
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
        console.log(`web search failed to fetch: ${error}`);
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

export default SearchPage;
