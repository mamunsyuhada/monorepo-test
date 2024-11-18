import { dehydrate, QueryClient } from "@tanstack/react-query";
import { Editorial as EditorialType, StrapiResponseSuccess } from "api-types";
import { GetStaticProps } from "next";
import Head from "next/head";

import { Empty } from "@/components";
import { MainLayout } from "@/components/layouts";
import { Editorial } from "@/features/editorial";
import { api, queries } from "@/lib";
import { NextPageWithLayout } from "@/types/pages";

interface Props {
  data: EditorialType[];
}

const EditorialPage: NextPageWithLayout<Props> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Editorial - INSIDER</title>
      </Head>
      {data ? <Editorial editorials={data} /> : <Empty />}
    </>
  );
};

EditorialPage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  const res = await api
    .get(`editorials?populate=*&filters[app][$eq]=insider`)
    .json<StrapiResponseSuccess<EditorialType>>();
  await queryClient.prefetchQuery(
    queries.editorial.list({
      populate: "*",
      filters: {
        app: {
          $eq: "insider",
        },
      },
    })
  );
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      data: res.data,
    },
    revalidate: 60,
  };
};

export default EditorialPage;
