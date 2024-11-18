import { Button, Stack, Typography } from "@mui/material";
import { IconArrowRight } from "@tabler/icons-react";
import * as React from "react";

import { Link } from "./Link";

interface Props {
  borderColor?: string;
  buttonTextColor?: string;
  isUseButton?: boolean;
  title: string;
  titleColor?: string;
  underlineColor?: string;
  moreLink?: string;
}

export const SectionTitle = React.memo(function SectionTitle({
  borderColor = "rgb(228, 218, 218)",
  buttonTextColor = "#5A5A5A",
  isUseButton = true,
  title,
  titleColor,
  underlineColor,
  moreLink,
}: Props) {
  return (
    <Stack direction="row" sx={{ width: "100%", alignItems: "stretch" }}>
      <Stack
        direction="row"
        sx={(theme) => ({
          alignItems: "center",
          borderBottom: `0.125rem solid ${
            underlineColor ?? theme.vars.palette.primary.main
          }`,
        })}
      >
        <Typography
          variant="h5"
          sx={{
            color: titleColor,
            textTransform: "uppercase",
          }}
        >
          {title}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        sx={{
          flex: 1,
          minHeight: 38,
          height: "100%",
          justifyContent: "flex-end",
          alignItems: "center",
          borderBottom: `0.125rem solid ${borderColor}`,
        }}
      >
        {isUseButton && (
          <Link href={moreLink ?? ""}>
            <Button
              size="small"
              variant="text"
              endIcon={<IconArrowRight size={18} color={buttonTextColor} />}
              sx={{ color: buttonTextColor, textTransform: "none" }}
            >
              Lihat lainnya
            </Button>
          </Link>
        )}
      </Stack>
    </Stack>
  );
});
