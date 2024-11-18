import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Magazine } from "api-types";
import * as React from "react";

import { Link, Thumbnail, TypographyEllipsis } from "@/components";
import { anton, roboto, robotSerif } from "@/theme";

interface Props {
  post?: Magazine | null;
}

export const ListMagazine = React.memo(function ListMagazine({ post }: Props) {
  const theme = useTheme();

  return (
    <Stack direction="row">
      <Box sx={{ marginY: 2, width: "100%" }} id="magazines">
        <Stack
          spacing={2}
          direction="row"
          sx={{
            position: "relative",
            mt: 3,
            mb: 5,
          }}
        >
          <Link href={`/${post?.attributes.slug}`}>
            <Stack
              direction="column"
              spacing={2}
              sx={{
                position: "relative",
                cursor: "pointer",
                "&:hover .hover-cover": {
                  background: `linear-gradient(0deg, ${theme.vars.palette.primary.main}, rgba(255, 255, 255, 0))`,
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  bgcolor: "#5A5A5A",
                  height: { mobile: 300, tablet: 500 },
                  width: { mobile: 200, tablet: 350 },
                  overflow: "hidden",
                  borderRadius: 2,
                }}
              >
                <Thumbnail assets={post?.attributes.cover?.data} />
              </Box>
              <Box
                className="hover-cover"
                sx={{
                  width: "100%",
                  height: "30%",
                  position: "absolute",
                  display: "flex",
                  alignItems: "end",
                  bottom: 0,
                  left: 0,
                  paddingY: 2,
                  paddingX: 1,
                  transition: "background 0.3s ease",
                  borderRadius: 2,
                }}
              >
                <Box>
                  <TypographyEllipsis
                    variant="h5"
                    color="#FFFFFF"
                    fontFamily={robotSerif.style.fontFamily}
                    fontWeight={robotSerif.style.fontWeight}
                    lines="1"
                  >
                    {post?.attributes.title}
                  </TypographyEllipsis>
                </Box>
              </Box>
            </Stack>
          </Link>
          <Link href={`/${post?.attributes.slug}`}>
            <Stack
              spacing={2}
              sx={{ "&:hover": { opacity: 0.5, transition: ".3s" } }}
            >
              <Typography
                variant="h1"
                sx={() => ({
                  mb: 2,
                  fontFamily: anton.style.fontFamily,
                  fontSize: { mobile: "2rem", tablet: "3rem" },
                  fontWeight: "900",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  wordBreak: "break-word",
                })}
              >
                {post?.attributes.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: roboto.style.fontFamily,
                  fontSize: { mobile: "10px", tablet: "16px" },
                }}
              >
                {post?.attributes.description}
              </Typography>
            </Stack>
          </Link>
        </Stack>
      </Box>
    </Stack>
  );
});
