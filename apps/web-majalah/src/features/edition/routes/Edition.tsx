import { Box, Container, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Post } from "api-types";
import * as React from "react";

import { Link } from "@/components";
import { anton, titiliumWeb } from "@/theme";

import { Cover } from "../components/Cover";
import { RelatedArticle } from "../components/RelatedArticle";

interface Props {
  post?: Post | null;
}

export const Edition = React.memo(function Edition({ post }: Props) {
  const theme = useTheme();

  return (
    <Container
      maxWidth="desktop"
      sx={{
        bgcolor: theme.vars.palette.background.default,
        py: 4,
      }}
    >
      <Box sx={{ position: "relative" }} mb={3}>
        <Typography
          fontFamily={anton.style.fontFamily}
          variant="h3"
          color={theme.vars.palette.text.primary}
          sx={{ textTransform: "uppercase", lineHeight: 1, ml: 1.5 }}
        >
          {post?.attributes.edition?.data?.attributes.name}
        </Typography>
        <Box
          sx={{
            borderLeft: "8px solid",
            borderBottom: "8px solid",
            padding: 0.4,
            borderColor: theme.vars.palette.primary.main,
            position: "absolute",
            width: "30px",
            height: "30px",
            bottom: -10,
          }}
        />
      </Box>
      <Stack
        component="section"
        direction="column"
        spacing={2}
        mb={3}
        sx={{
          "&:hover .hover-cover": {
            backgroundColor: theme.vars.palette.primary.main,
          },
          "&:hover .hover-link": {
            color: theme.vars.palette.primary.main,
          },
        }}
      >
        <Link
          href={`${process.env.NEXT_PUBLIC_WEB_PUBLIC_URL}/${post?.attributes.slug}`}
        >
          <Cover post={post} />
        </Link>
        <Link
          href={`${process.env.NEXT_PUBLIC_WEB_PUBLIC_URL}/${post?.attributes.slug}`}
        >
          <Typography
            className="hover-link"
            fontFamily={anton.style.fontFamily}
            variant="h4"
            color={theme.vars.palette.text.primary}
            sx={{
              textTransform: "uppercase",
              lineHeight: 1,
              cursor: "pointer",
            }}
          >
            {post?.attributes.title}
          </Typography>
        </Link>
        <Typography
          fontFamily={titiliumWeb.style.fontFamily}
          variant="h5"
          color={theme.vars.palette.text.primary}
          sx={{
            lineHeight: 1,
            ml: 1.5,
          }}
        >
          {post?.attributes.subtitle}
        </Typography>
      </Stack>
      <RelatedArticle post={post} />
    </Container>
  );
});
