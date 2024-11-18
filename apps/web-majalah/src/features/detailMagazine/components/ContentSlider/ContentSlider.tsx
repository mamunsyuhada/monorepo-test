import { Box, Container, Stack, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { Edition, Post } from "api-types";
import Image from "next/image";
import * as React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { EmptyImage, Link, TypographyEllipsis } from "@/components";
import { roboto, titiliumWeb } from "@/theme";

import styles from "./ContentSlider.module.css";

interface Props {
  edition?: Edition | null;
}

const Slide = styled(SwiperSlide)(({ theme }) => ({
  width: "72% !important",
  paddingRight: 24,
  [theme.breakpoints.up("tablet")]: {
    width: "38% !important",
  },
  [theme.breakpoints.up("desktop")]: {
    width: "25% !important",
  },
}));

const CardItem = React.memo(function CardItem({ post }: { post: Post }) {
  const theme = useTheme();

  return (
    <Stack spacing={1}>
      {post.attributes.assets?.data[0] ? (
        <Box
          sx={{
            width: 300,
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
            sx={{ fontWeight: "bold" }}
            className="hover-link"
            lines="2"
          >
            {post.attributes.title}
          </TypographyEllipsis>
          <TypographyEllipsis
            fontFamily={titiliumWeb.style.fontFamily}
            variant="body1"
            color={theme.vars.palette.text.primary}
            lines="2"
          >
            {post.attributes.subtitle}
          </TypographyEllipsis>
        </Stack>
      </Link>
    </Stack>
  );
});

export const ContentSlider = React.memo(function ContentSlider({
  edition,
}: Props) {
  const theme = useTheme();
  return (
    <Container
      maxWidth="desktop"
      sx={{ position: "relative", mt: { desktop: 16, mobile: 4 }, mb: 4 }}
    >
      <Box sx={{ position: "relative" }}>
        <Typography
          fontFamily={roboto.style.fontFamily}
          variant="h5"
          color={theme.vars.palette.text.primary}
          fontWeight="900"
          sx={{ textTransform: "uppercase", lineHeight: 1, ml: 1.5 }}
        >
          {edition?.attributes.name}
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
      <Swiper
        spaceBetween={30}
        slidesPerView="auto"
        style={{ marginTop: 16 }}
        modules={[Autoplay, Pagination]}
        pagination={{
          bulletActiveClass: styles["active-bullet"],
          clickable: true,
          bulletClass: `swiper-pagination-bullet ${styles.bullet}`,
          horizontalClass: styles["bullet-wrapper"],
        }}
      >
        {edition?.attributes.posts.data &&
          edition.attributes.posts.data.map((item) => (
            <Slide>
              <CardItem post={item} />
            </Slide>
          ))}
      </Swiper>
    </Container>
  );
});
