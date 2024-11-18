import { useTheme } from "@mui/material/styles";
import Typography, { TypographyProps } from "@mui/material/Typography";
import * as React from "react";

interface Props extends Omit<TypographyProps, "component"> {
  component?: React.ElementType;
  lines?: string;
}

export const TypographyEllipsis = React.memo(
  ({ lines = "2", ...props }: Props) => {
    const theme = useTheme();
    let { sx } = props;

    if (typeof sx === "function") {
      sx = sx(theme);
    }

    return (
      <Typography
        {...props}
        sx={{
          ...sx,
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: lines,
          WebkitBoxOrient: "vertical",
        }}
      />
    );
  }
);
