import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Edition } from "api-types";
import * as React from "react";

import { Link, Thumbnail, TypographyEllipsis } from "@/components";
import { anton, roboto, robotSerif } from "@/theme";

interface Props {
  post?: Edition | null;
}

export const MagazineCard = React.memo(function MagazineCard({ post }: Props) {
  const theme = useTheme();

  return (
    <Stack direction="row">
      <Box sx={{ marginY: 2, width: "100%" }} id="magazines">
        <Box sx={{ position: "relative", mx: 2.5 }}>
          <Typography
            fontFamily={roboto.style.fontFamily}
            fontWeight={900}
            variant="h3"
            color={theme.vars.palette.text.primary}
            sx={{ textTransform: "capitalize", lineHeight: 1, ml: 1.5 }}
          >
            {post?.attributes.name}
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
          spacing={2}
          direction="row"
          sx={{
            position: "relative",
            mt: 3,
            mb: 5,
          }}
        >
          <Link href={`/${post?.attributes.magazine.data?.attributes.slug}`}>
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
                <Thumbnail
                  assets={
                    post?.attributes.magazine.data?.attributes.cover?.data
                  }
                />
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
                    {post?.attributes.magazine.data?.attributes.title}
                  </TypographyEllipsis>
                </Box>
              </Box>
            </Stack>
          </Link>
          <Link href={`/${post?.attributes.magazine.data?.attributes.slug}`}>
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
                {post?.attributes.magazine.data?.attributes.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: roboto.style.fontFamily,
                  fontSize: { mobile: "10px", tablet: "16px" },
                }}
              >
                {post?.attributes.magazine.data?.attributes.description}
              </Typography>
            </Stack>
          </Link>
          {/* <Stack direction={{ mobile: "row", tablet: "column" }} width="100%">
          {post?.attributes.posts?.data.slice(0, 4).map((item) => (
            <Stack
              direction="column"
              spacing={0}
              sx={{
                width: "100%",
                height: "100%",
                position: "relative",
                cursor: "pointer",
                "&:hover .hover-box": {
                  background: `linear-gradient(0deg, ${theme.vars.palette.primary.main}, rgba(255, 255, 255, 0))`,
                },
              }}
            >
              <Link href={`/edisi/${item.attributes.slug}`}>
                <Image
                  src={item.attributes.assets?.data[0]?.attributes.url ?? ""}
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  layout="fill"
                  alt={
                    item.attributes.assets?.data[0]?.attributes
                      .alternativeText ?? ""
                  }
                  placeholder="blur"
                  blurDataURL={
                    item.attributes.assets?.data[0]?.attributes.placeholder ??
                    ""
                  }
                />
                <Box
                  className="hover-box"
                  sx={{
                    width: "100%",
                    height: { mobile: "100%", tablet: "60%" },
                    position: "absolute",
                    display: "flex",
                    alignItems: "end",
                    bottom: 0,
                    left: 0,
                    padding: 0.8,
                    transition: "background 0.3s ease",
                  }}
                >
                  <Box
                    sx={{
                      transform: { mobile: "rotate(-90deg)", tablet: "none" },
                    }}
                    zIndex={1}
                  >
                    <TypographyEllipsis
                      variant="h5"
                      color="#FFFFFF"
                      fontFamily={robotSerif.style.fontFamily}
                      fontWeight={robotSerif.style.fontWeight}
                      position={{ mobile: "absolute", tablet: "inherit" }}
                      width={{ mobile: "250px", tablet: 1 }}
                      lines="1"
                    >
                      {item.attributes.title}
                    </TypographyEllipsis>
                  </Box>
                </Box>
              </Link>
            </Stack>
          ))}
        </Stack> */}
        </Stack>
      </Box>
    </Stack>
  );
});
