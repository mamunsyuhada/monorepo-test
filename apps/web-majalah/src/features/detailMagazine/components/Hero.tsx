import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { IconShare } from "@tabler/icons-react";
import { Magazine } from "api-types";
import * as React from "react";

import { Thumbnail } from "@/components/Thumbnail";
import { roboto, titiliumWeb } from "@/theme";

import { ModalShare } from "./ModalShare";

interface Props {
  post?: Magazine | null;
}

export const Hero = React.memo(function Hero({ post }: Props) {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        background: `url(${post?.attributes.cover?.data[0]?.attributes.url}) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        // paddingBottom: 4,
      }}
    >
      <Box
        sx={{
          backdropFilter: "blur(16px)",
          width: "100%",
          height: "100%",
          p: 4,
        }}
      >
        <Container
          maxWidth="desktop"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            direction={{ desktop: "row", mobile: "column" }}
            spacing={{ mobile: 2, desktop: 8 }}
            height={{ desktop: 480 }}
            width="100%"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                minWidth: { mobile: 1, desktop: 414 },
                // height: { mobile: 1, tablet: 1, desktop: 450 },
                height: { mobile: 1, desktop: 585 },
              }}
            >
              <Thumbnail assets={post?.attributes.cover?.data} />
            </Box>
            <Stack
              direction="column"
              justifyContent="center"
              spacing={2}
              color="#FFF"
            >
              <Typography
                variant="h1"
                sx={() => ({
                  mb: 2,
                  fontFamily: roboto.style.fontFamily,
                  fontSize: { mobile: "2rem", tablet: "3rem" },
                  fontWeight: "900",
                  fontStretch: "200%",
                  textTransform: "uppercase",
                })}
              >
                {post?.attributes.title}
              </Typography>
              <Typography
                variant="h5"
                color="#FFF"
                sx={{
                  fontFamily: titiliumWeb.style.fontFamily,
                }}
              >
                {post?.attributes.description}
              </Typography>
              <Stack mb={16} mt={8}>
                <Button
                  startIcon={<IconShare />}
                  variant="contained"
                  sx={{ width: "50%" }}
                  onClick={handleOpenModal}
                >
                  Bagikan
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Container>
        {post?.attributes.title && (
          <ModalShare
            title={post?.attributes.title}
            open={open}
            onClose={handleCloseModal}
          />
        )}
      </Box>
    </Box>
  );
});
