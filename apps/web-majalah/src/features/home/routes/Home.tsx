import { Box, Button, CircularProgress, Container, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useInfiniteQuery } from "@tanstack/react-query";
import * as React from "react";

import { Empty } from "@/components";
import { queries } from "@/lib";

import { HeroLaunch, MagazineCard } from "../components";

export const Home = React.memo(function Home() {
  const theme = useTheme();
  const {
    data: edition,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    ...queries.edition.infinite({
      sort: "publishedAt:desc",
      populate: ["magazine.cover", "posts", "posts.assets"],
      pagination: {
        pageSize: 5,
      },
    }),
    getNextPageParam: (lastPage) =>
      (lastPage.meta.pagination?.pageCount ?? 1) <=
      (lastPage.meta.pagination?.page ?? 1)
        ? undefined
        : (lastPage.meta.pagination?.page ?? 1) + 1,
  });

  const handleLoadMore = React.useCallback(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  const listEditions = React.useMemo(() => {
    if (!edition?.pages) {
      return [];
    }
    return edition.pages.flatMap((item) => item.data);
  }, [edition?.pages]);

  return (
    <Stack
      sx={{
        alignItems: "stretch",
      }}
      component="main"
    >
      <HeroLaunch />
      <Container
        maxWidth="desktop"
        sx={{
          overflow: "hidden",
          bgcolor: theme.vars.palette.background.default,
          py: 4,
        }}
      >
        {listEditions.length > 0 ? (
          <>
            {listEditions?.map((item) => {
              return <MagazineCard key={item.id} post={item} />;
            })}
            <Box sx={{ mt: 3, textAlign: "center" }}>
              {isFetchingNextPage ? (
                <CircularProgress />
              ) : (
                hasNextPage && (
                  <Button
                    sx={{ textTransform: "capitalize" }}
                    variant="contained"
                    size="large"
                    disableElevation
                    onClick={handleLoadMore}
                  >
                    Lebih banyak
                  </Button>
                )
              )}
            </Box>
          </>
        ) : (
          !isLoading && <Empty title="Tidak ada majalah" />
        )}
      </Container>
    </Stack>
  );
});
