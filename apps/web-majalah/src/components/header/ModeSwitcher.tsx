import { useColorScheme } from "@mui/material/styles";
import * as React from "react";

import { IconButton } from "../IconButton";

export const ModeSwitcher = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  const handleClick = React.useCallback(() => {
    setMode(mode === "light" ? "dark" : "light");
  }, [mode, setMode]);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // for server-side rendering
    // learn more at https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
    return null;
  }

  return (
    <IconButton
      name={mode === "light" ? "IconMoon" : "IconSun"}
      onClick={handleClick}
    />
  );
};
