import * as React from "react";

export const useStickyHeader = () => {
  const [isScrolling, setScrolling] = React.useState(false);

  const onScroll = React.useCallback(() => {
    const header = document.getElementById("header-nav");
    const scrollTop = window.scrollY;

    if (!header) {
      return;
    }

    setScrolling(scrollTop > header.getBoundingClientRect().height);
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return {
    isScrolling,
  };
};
