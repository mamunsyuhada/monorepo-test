import { Box, Button, Stack, Typography } from "@mui/material";
import { IconArrowRight } from "@tabler/icons-react";
import { Post } from "api-types";
import * as React from "react";

import { EmptyImage, TypographyEllipsis } from "@/components";
import { Thumbnail } from "@/components/Thumbnail";

interface Props {
  post?: Post | null;
}

export const Cover = React.memo(function Cover({ post }: Props) {
  const isAssetsExist = !!post?.attributes?.assets?.data;

  return (
    <Stack direction="column" component="section" spacing={2.5}>
      {isAssetsExist && (
        <Stack
          sx={{
            position: "relative",
            width: "100%",
            height: { mobile: "250px", tablet: "450px", desktop: "65vh" },
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Thumbnail assets={post.attributes.assets?.data} />
          <Button
            className="hover-cover"
            sx={{
              color: "white",
              position: "absolute",
              right: { mobile: "10px", tablet: "30px" },
              bottom: { mobile: "5px", tablet: "20px" },
            }}
          >
            <Typography variant="subtitle2">Baca selengkapnya</Typography>
            <IconArrowRight />
          </Button>
        </Stack>
      )}
      {!isAssetsExist && (
        <Box
          sx={{
            position: "relative",
            width: "100%",
            paddingBottom: "60%",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <EmptyImage />
          </Box>
        </Box>
      )}
      <TypographyEllipsis
        variant="body2"
        lines="1"
        align="center"
        sx={{ color: "#818181" }}
      >
        {post?.attributes.assets?.data?.[0]?.attributes.caption ?? ""}
      </TypographyEllipsis>
    </Stack>
  );
});
