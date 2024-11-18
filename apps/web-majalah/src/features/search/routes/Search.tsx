import { Box, Button, CircularProgress, Container } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import * as React from "react";

import { Empty } from "@/components";
import { queries } from "@/lib";

import { ListMagazine, Title } from "../components";

interface Props {
  query?: string;
}

export const Search = React.memo(function Search({ query }: Props) {
  const {
    data: search,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    ...queries.magazine.infinite({
      sort: "publishedAt:desc",
      populate: ["cover"],
      filters: {
        title: {
          $containsi: query,
        },
      },
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

  const listSearches = React.useMemo(() => {
    if (!search?.pages) {
      return [];
    }
    return search.pages.flatMap((item) => item.data);
  }, [search?.pages]);

  return (
    <Container
      maxWidth="desktop"
      sx={(theme) => ({
        bgcolor: theme.vars.palette.background.default,
        py: 4,
      })}
    >
      <Title query={query} />
      {listSearches.length > 0 ? (
        <>
          {listSearches?.map((item) => {
            return <ListMagazine key={item.id} post={item} />;
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
        !isLoading && <Empty title="Tidak ada berita" />
      )}
    </Container>
  );
});
