import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { Edition, Post } from "api-types";
import Image from "next/image";
import * as React from "react";

import { Empty, EmptyImage, Link, TypographyEllipsis } from "@/components";
import { anton, roboto, theme } from "@/theme";

interface Props {
  edition: Edition;
}

const CardItem = React.memo(function CardItem({ post }: { post: Post }) {
  return (
    <Stack spacing={1} alignItems="center">
      {post.attributes.assets?.data[0] ? (
        <Box
          sx={{
            width: { mobile: "100%" },
            height: 300,
            position: "relative",
            borderRadius: 2,
            overflow: "hidden",
            "& .thumbnail": {
              transition: "transform .7s ease",
            },
            "&:hover .thumbnail": {
              transform: "scale(1.1)",
            },
            "&:hover .hover-link": {
              color: theme.vars.palette.primary.main,
              opacity: 0.9,
            },
          }}
        >
          <Link
            href={`${process.env.NEXT_PUBLIC_WEB_PUBLIC_URL}/${post.attributes.slug}`}
          >
            <Image
              fill
              src={post.attributes.assets?.data[0].attributes.url}
              alt={
                post.attributes.assets?.data[0].attributes.alternativeText ?? ""
              }
              placeholder="blur"
              blurDataURL={
                post.attributes.assets?.data[0].attributes.placeholder ?? ""
              }
              style={{ objectFit: "cover", borderRadius: 8 }}
              className="thumbnail"
            />
          </Link>
        </Box>
      ) : (
        <EmptyImage />
      )}
      <Link
        href={`${process.env.NEXT_PUBLIC_WEB_PUBLIC_URL}/${post.attributes.slug}`}
      >
        <Stack spacing={1}>
          <TypographyEllipsis
            variant="h5"
            fontSize="1.5rem"
            sx={{ textTransform: "uppercase" }}
            className="hover-link"
            lines="2"
            fontFamily={anton.style.fontFamily}
            letterSpacing={1}
          >
            {post.attributes.title}
          </TypographyEllipsis>
          <Typography
            fontFamily={roboto.style.fontFamily}
            variant="body1"
            color={theme.vars.palette.text.primary}
            // lines="2"
          >
            {post.attributes.subtitle}
          </Typography>
        </Stack>
      </Link>
    </Stack>
  );
});

export const ContentGrid = React.memo(function ContentGrid({ edition }: Props) {
  return (
    <Container
      maxWidth="desktop"
      sx={{
        bgcolor: theme.vars.palette.background.default,
        mt: { desktop: 16, mobile: 4 },
        mb: 4,
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Typography
          fontFamily={roboto.style.fontFamily}
          variant="h4"
          color={theme.vars.palette.text.primary}
          fontWeight="900"
          sx={{ textTransform: "capitalize", lineHeight: 1, ml: 1 }}
        >
          {edition?.attributes.name}
        </Typography>
        <Box
          sx={{
            borderLeft: "4px solid",
            borderBottom: "4px solid",
            padding: 0.4,
            borderColor: theme.vars.palette.primary.main,
            position: "absolute",
            width: "20px",
            height: "20px",
            bottom: -6,
          }}
        />
      </Box>
      <Grid container spacing={4} mt={1}>
        {edition.attributes.posts ? (
          edition.attributes.posts.data.map((item) => (
            <Grid key={item.id} item desktop={4} mobile={12}>
              <CardItem post={item} />
            </Grid>
          ))
        ) : (
          <Empty />
        )}
      </Grid>
    </Container>
  );
});
