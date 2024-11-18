import * as React from "react";

export const useLayout = () => {
  const footer = React.useRef<HTMLElement>(null);
  const header = React.useRef<HTMLElement>(null);
  const mainContent = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (footer.current && header.current && mainContent.current) {
      const headerFooterHeight =
        (header.current?.getBoundingClientRect().height || 0) +
        (footer.current?.getBoundingClientRect().height || 0);

      mainContent.current.style.minHeight = `calc(100vh - ${headerFooterHeight}px)`;
    }
  }, []);

  return {
    footer,
    header,
    mainContent,
  };
};
