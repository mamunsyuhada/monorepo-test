import { Box, Container, ListItem, Stack } from "@mui/material";
import { Edition } from "api-types";
import * as React from "react";

import { Link, Thumbnail, TypographyEllipsis } from "@/components";
import { roboto, theme, titiliumWeb } from "@/theme";

interface Props {
  edition?: Edition | null;
}

export const ContentList = React.memo(function ContentList({ edition }: Props) {
  return (
    <Container
      maxWidth="desktop"
      sx={{
        bgcolor: theme.vars.palette.background.default,
      }}
    >
      <Stack
        direction="column"
        component="main"
        width={1}
        spacing={3}
        py={2}
        sx={{
          alignItems: "stretch",
        }}
      >
        {edition?.attributes.posts.data &&
          edition.attributes.posts?.data.map((item) => (
            <ListItem
              sx={() => ({
                px: 0,
                mb: 0.5,
                width: "100%",
                height: "100%",
                "& .thumbnail": {
                  transition: "transform .7s ease",
                },
                "&:hover .thumbnail": {
                  transform: "scale(1.1)",
                },
                "&:hover .hover-link": {
                  color: theme.vars.palette.primary.main,
                },
              })}
            >
              <Stack
                component="article"
                direction="column"
                spacing={2}
                alignItems={{ mobile: "flex-start", tablet: "center" }}
                sx={{ width: "100%" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { mobile: 200, tablet: 200, desktop: "400px" },
                    overflow: "hidden",
                  }}
                >
                  <Link
                    href={`${process.env.NEXT_PUBLIC_WEB_PUBLIC_URL}/${item?.attributes.slug}`}
                  >
                    <Thumbnail assets={item.attributes.assets?.data} />
                  </Link>
                </Box>
                <Box sx={{ flex: 1, width: 1 }}>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_WEB_PUBLIC_URL}/${item?.attributes.slug}`}
                  >
                    <TypographyEllipsis
                      className="hover-link"
                      variant="h6"
                      lines="3"
                      textAlign="left"
                      sx={() => ({
                        fontFamily: roboto.style.fontFamily,
                        fontSize: { mobile: "1rem", tablet: "1.5rem" },
                      })}
                    >
                      {item.attributes.title}
                    </TypographyEllipsis>
                    <TypographyEllipsis
                      fontFamily={titiliumWeb.style.fontFamily}
                      variant="h5"
                      color={theme.vars.palette.text.primary}
                      lines="3"
                    >
                      {item?.attributes?.subtitle}
                    </TypographyEllipsis>
                  </Link>
                </Box>
              </Stack>
            </ListItem>
          ))}
      </Stack>
    </Container>
  );
});
