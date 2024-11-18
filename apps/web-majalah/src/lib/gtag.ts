export const pageview = (url: string) => {
  // @ts-expect-error
  window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
    page_path: url,
  });
};
