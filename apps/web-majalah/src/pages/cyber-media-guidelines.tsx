import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetStaticProps } from "next";
import Head from "next/head";

import { MainLayout } from "@/components/layouts";
import { CyberMediaGuidelines } from "@/features/static";
import { queries } from "@/lib";
import { NextPageWithLayout } from "@/types/pages";

const CyberMediaGuidelinesPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Pedoman Media Siber - Inilah.com</title>
        <meta
          name="description"
          content="PEDOMAN PEMBERITAAN MEDIA SIBER. Kemerdekaan berpendapat, kemerdekaan berekspresi, dan kemerdekaan pers adalah hak asasi manusia..."
        />
      </Head>
      <CyberMediaGuidelines />
    </>
  );
};

CyberMediaGuidelinesPage.getLayout = function getLayout(
  page: React.ReactElement
) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    queries.categories.list({
      populate: "sub_categories",
    })
  );
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
    revalidate: 60,
  };
};

export default CyberMediaGuidelinesPage;
