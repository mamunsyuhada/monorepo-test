import { Box } from "@mui/material";
import * as React from "react";

import { useLayout } from "@/hooks";

import { Footer } from "../footer";
import { Header } from "../header";

export const MainLayout = ({ children }: React.PropsWithChildren) => {
  const { footer, header, mainContent } = useLayout();

  return (
    <>
      <Header ref={header} />
      <Box ref={mainContent}>{children}</Box>
      <Footer ref={footer} />
    </>
  );
};
